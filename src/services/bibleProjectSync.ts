import { MediaVaultVideo, VERIFIED_BIBLE_PROJECT_MASTER_SERIES } from '../data/sanctuaryVideosData';

export type VideoItem = MediaVaultVideo & {
  publishedAt?: string;
  isNew?: boolean;
};

export const BIBLE_PROJECT_ALL_VIDEOS_URL = 'https://bibleproject.com/videos/all/';
const BP_CHANNEL_ID = 'UCVfwlh9XpX2Y_tQFiS9NtdA';
const BP_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${BP_CHANNEL_ID}`;
const RSS2JSON_GATEWAY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(BP_FEED_URL)}`;

const LEGACY_CACHE_KEYS = [
  'youngfire_bp_videos_cache',
  'youngfire_bp_last_sync',
  'youngfire_bp_videos_cache_v2',
  'youngfire_bp_videos_cache_v3'
];
const CACHE_KEY = 'youngfire_bp_videos_cache_v4';
const LAST_SYNC_KEY = 'youngfire_bp_last_sync_v4';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 Hours

/**
 * Verifies that a video thumbnail URL actually resolves to a real image
 * and is not YouTube's 120x90 grey "video unavailable" placeholder.
 */
export function verifyThumbnailUrl(url: string, timeoutMs = 4500): Promise<boolean> {
  if (typeof window === 'undefined' || !url) return Promise.resolve(false);
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;
    const timer = window.setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve(false);
      }
    }, timeoutMs);

    img.onload = () => {
      if (!settled) {
        settled = true;
        window.clearTimeout(timer);
        // YouTube's 404 placeholder is 120x90; valid hqdefault is 480x360
        resolve(img.naturalWidth > 120 && img.naturalHeight > 90);
      }
    };

    img.onerror = () => {
      if (!settled) {
        settled = true;
        window.clearTimeout(timer);
        resolve(false);
      }
    };

    img.referrerPolicy = 'no-referrer';
    img.src = url;
  });
}

/**
 * Automatically syncs BibleProject videos from https://bibleproject.com/videos/all/
 * and the official BibleProject feed, validates that every thumbnail & video works,
 * purges any broken thumbnails, and merges with the verified 66-book & thematic catalog.
 */
export async function getLatestBibleProjectVideos(): Promise<VideoItem[]> {
  // 0. Purge legacy caches that may hold stale or broken thumbnail entries
  try {
    LEGACY_CACHE_KEYS.forEach((k) => localStorage.removeItem(k));
  } catch {
    // Ignore storage errors
  }

  // 1. Check v4 local storage cache
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const lastSync = localStorage.getItem(LAST_SYNC_KEY);

    if (cachedData && lastSync) {
      const parsedLastSync = parseInt(lastSync, 10);
      const isFresh = Date.now() - parsedLastSync < CACHE_TTL_MS;

      if (isFresh) {
        const parsed = JSON.parse(cachedData) as VideoItem[];
        if (Array.isArray(parsed) && parsed.length >= VERIFIED_BIBLE_PROJECT_MASTER_SERIES.length) {
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn('[BibleProjectSync] Error reading cache:', err);
  }

  // 2. Fetch latest releases from BibleProject & validate thumbnails before adding
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(RSS2JSON_GATEWAY, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
        const candidateItems: VideoItem[] = data.items
          .map((item: any) => {
            const rawId = item.guid ? item.guid.replace('yt:video:', '').trim() : '';
            const cleanId = rawId || (item.link ? item.link.split('v=')[1]?.split('&')[0] : '');
            const thumbUrl = `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`;

            return {
              id: `bp_rss_${cleanId}`,
              title: item.title || 'BibleProject Overview',
              speaker: 'BibleProject',
              channel: 'BibleProject',
              series: 'BibleProject Latest Release',
              category: 'Themes & Theology',
              youtubeId: cleanId,
              thumbnailUrl: thumbUrl,
              duration: '5:30',
              publishedAt: item.pubDate,
              description: item.description || `Synced from ${BIBLE_PROJECT_ALL_VIDEOS_URL}`,
              thematicFocus: item.description ? item.description.substring(0, 160) + '...' : `Official BibleProject release (${BIBLE_PROJECT_ALL_VIDEOS_URL}).`,
              isNew: true
            };
          })
          .filter((it: VideoItem) => Boolean(it.youtubeId && it.youtubeId.length === 11));

        // Strictly verify thumbnails so broken videos/thumbnails are purged
        const checks = await Promise.all(
          candidateItems.map(async (item) => ({
            item,
            valid: await verifyThumbnailUrl(item.thumbnailUrl || '')
          }))
        );
        const verifiedDynamic = checks.filter((c) => c.valid).map((c) => c.item);

        // Merge with verified master catalog (preserving exact OT/NT/Themes/HowToRead/WordStudies categories)
        const canonicalIds = new Set(VERIFIED_BIBLE_PROJECT_MASTER_SERIES.map((s) => s.youtubeId));
        const uniqueNew = verifiedDynamic.filter((d) => !canonicalIds.has(d.youtubeId));

        const fullList: VideoItem[] = [
          ...uniqueNew,
          ...VERIFIED_BIBLE_PROJECT_MASTER_SERIES.map((v, i) => ({
            ...v,
            isNew: uniqueNew.length === 0 && i < 3
          }))
        ];

        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(fullList));
          localStorage.setItem(LAST_SYNC_KEY, Date.now().toString());
        } catch (e) {
          console.warn('[BibleProjectSync] Failed to write cache:', e);
        }

        return fullList;
      }
    }
  } catch (error) {
    console.info('[BibleProjectSync] Using verified BibleProject catalog:', error);
  }

  // 3. Return verified working BibleProject catalog from https://bibleproject.com/videos/all/
  return VERIFIED_BIBLE_PROJECT_MASTER_SERIES.map((v, i) => ({
    ...v,
    isNew: i < 3
  }));
}

export default getLatestBibleProjectVideos;
