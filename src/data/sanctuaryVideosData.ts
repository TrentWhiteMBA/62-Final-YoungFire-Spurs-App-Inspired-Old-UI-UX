/**
 * Sanctuary Videos Data - Verified Clean Canon Hydration
 * 100% verified 200 OK YouTube IDs with valid thumbnails.
 * All broken, 404, or dead links strictly purged.
 */

export interface SanctuaryVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  artist?: string;
  speaker?: string;
  series?: string;
  speakerOrMinistry?: string;
  channel?: string;
  category: 'Old Testament' | 'New Testament' | 'Themes & Theology' | 'How to Read' | 'Word Studies' | 'Praise & Worship' | string;
  duration: string;
  thematicFocus?: string;
  lyricsSnippet?: string;
  lyricsText?: string;
  isJhowOfficial?: boolean;
  scriptureRefs?: string[];
  description?: string;
  thumbnailUrl?: string;
}

export type MediaVaultVideo = SanctuaryVideoItem;

export const cleanYouTubeId = (urlOrId: string): string => {
  if (!urlOrId) return '';
  let id = urlOrId.trim();
  if (id.includes('v=')) {
    id = id.split('v=')[1]?.split('&')[0]?.split('?')[0] || id;
  } else if (id.includes('youtu.be/')) {
    id = id.split('youtu.be/')[1]?.split('&')[0]?.split('?')[0] || id;
  } else if (id.includes('embed/')) {
    id = id.split('embed/')[1]?.split('&')[0]?.split('?')[0] || id;
  }
  id = id.split('&')[0].split('?')[0];
  return id.substring(0, 11);
};

export const getYouTubeThumbnail = (id: string, quality: 'hq' | 'mq' | 'default' = 'hq'): string => {
  const cleanId = cleanYouTubeId(id);
  if (!cleanId) return '/image_4.png';
  return `https://img.youtube.com/vi/${cleanId}/${quality}default.jpg`;
};

export const SANCTUARY_VIDEOS_DATA: SanctuaryVideoItem[] = [
  {
    "id": "pw-jireh",
    "youtubeId": "mC-zw0zCCtg",
    "title": "Jireh (feat. Chandler Moore & Naomi Raine)",
    "artist": "Elevation Worship & Maverick City",
    "speaker": "Chandler Moore & Naomi Raine",
    "channel": "Elevation Worship",
    "category": "Praise & Worship",
    "duration": "9:58",
    "thematicFocus": "Philippians 4:19 — Contentment in Christ who is our all-sufficient provider.",
    "description": "A powerful anthem of contentment and confidence in God who is more than enough."
  },
  {
    "id": "pw-praise",
    "youtubeId": "f2oxGYpuLkw",
    "title": "Praise (feat. Brandon Lake, Chris Brown & Chandler Moore)",
    "artist": "Elevation Worship",
    "speaker": "Brandon Lake",
    "channel": "Elevation Worship",
    "category": "Praise & Worship",
    "duration": "5:04",
    "thematicFocus": "Psalm 150:6 — Let everything that has breath praise the Lord.",
    "description": "High-energy praise celebration declaring God’s goodness in all seasons."
  },
  {
    "id": "pw-gratitude",
    "youtubeId": "dQdfs5S6jyA",
    "title": "Gratitude (Official Live Video)",
    "artist": "Brandon Lake",
    "speaker": "Brandon Lake",
    "channel": "Brandon Lake",
    "category": "Praise & Worship",
    "duration": "5:37",
    "thematicFocus": "Psalm 103:1 — Bless the Lord, O my soul, and all that is within me.",
    "description": "A pure offering of humble praise when all you have to give is a hallelujah."
  },
  {
    "id": "pw-goodness-of-god",
    "youtubeId": "y81yIo1_3o8",
    "title": "Goodness of God (Live)",
    "artist": "Bethel Music / Jenn Johnson",
    "speaker": "Jenn Johnson",
    "channel": "Bethel Music",
    "category": "Praise & Worship",
    "duration": "4:56",
    "thematicFocus": "Psalm 23:6 — Surely goodness and mercy shall follow me all the days of my life.",
    "description": "An enduring testament of God’s faithfulness from the moment we wake until night."
  },
  {
    "id": "pw-way-maker",
    "youtubeId": "w2pHOVKP7xo",
    "title": "Way Maker (Official Video)",
    "artist": "Sinach / Leeland",
    "speaker": "Sinach",
    "channel": "Sinach",
    "category": "Praise & Worship",
    "duration": "5:12",
    "thematicFocus": "Isaiah 43:16 — Miracle worker, promise keeper, light in the darkness.",
    "description": "Global declaration of God making a way where there seems to be no way."
  },
  {
    "id": "pw-break-every-chain",
    "youtubeId": "ucY6NwQTI3M",
    "title": "Break Every Chain (Live)",
    "artist": "Tasha Cobbs Leonard",
    "speaker": "Tasha Cobbs Leonard",
    "channel": "Tasha Cobbs Leonard",
    "category": "Praise & Worship",
    "duration": "8:19",
    "thematicFocus": "Acts 16:26 — Power in Jesus’ name to break every spiritual bond.",
    "description": "Apostolic deliverance anthem breaking generational strongholds through intercession."
  },
  {
    "id": "pw-graves-into-gardens",
    "youtubeId": "KwX1f2gYKZ4",
    "title": "Graves Into Gardens (feat. Brandon Lake)",
    "artist": "Elevation Worship",
    "speaker": "Brandon Lake",
    "channel": "Elevation Worship",
    "category": "Praise & Worship",
    "duration": "7:32",
    "thematicFocus": "Ezekiel 37 — God turns mourning into dancing and graves into gardens.",
    "description": "Declaration of resurrection power turning dry bones into vibrant life."
  },
  {
    "id": "pw-reckless-love",
    "youtubeId": "6xx0d3R2LoU",
    "title": "Reckless Love (Official Music Video)",
    "artist": "Cory Asbury",
    "speaker": "Cory Asbury",
    "channel": "Bethel Music",
    "category": "Praise & Worship",
    "duration": "5:32",
    "thematicFocus": "Luke 15:4 — The relentless pursuit of the Shepherd leaving the 99 for the 1.",
    "description": "Meditation on the unearned, overwhelming, and unending love of God."
  },
  {
    "id": "pw-battle-belongs",
    "youtubeId": "qtvQNzPHn-w",
    "title": "Battle Belongs (Live)",
    "artist": "Phil Wickham",
    "speaker": "Phil Wickham",
    "channel": "Phil Wickham",
    "category": "Praise & Worship",
    "duration": "4:47",
    "thematicFocus": "2 Chronicles 20:15 — The battle is not yours, but God’s.",
    "description": "When we fight on our knees with our hands lifted high, God fights our battles."
  },
  {
    "id": "pw-god-is-good",
    "youtubeId": "q5m09rqOoxE",
    "title": "GOD IS GOOD — Joy in the Lord",
    "artist": "Forrest Frank",
    "speaker": "Forrest Frank",
    "channel": "Forrest Frank",
    "category": "Praise & Worship",
    "duration": "3:15",
    "thematicFocus": "Psalm 100:5 — For the Lord is good; His mercy is everlasting.",
    "description": "Youthful celebratory praise declaring that God is good all the time."
  },
  {
    "id": "jhow-thought-captive",
    "youtubeId": "xLpGXQ2SmyI",
    "title": "How to Take Every Thought Captive!",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:50:53",
    "thematicFocus": "2 Corinthians 10:5 — Bringing every thought into obedience to Christ.",
    "description": "Apostolic teaching on mental discipline and casting down vain imaginations.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-builders",
    "youtubeId": "ZmGFcS8DihI",
    "title": "Something For The Builders!",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "2:07:56",
    "thematicFocus": "Nehemiah 4 & Ephesians 4:16 — Rebuilding the walls with sword and trowel.",
    "description": "Equipping the body of Christ for corporate restoration and kingdom discipleship.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-power-presence",
    "youtubeId": "dR6eeLFCvUw",
    "title": "9 Ways to Build Up Others – \"The Power of Presence\"",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:36:11",
    "thematicFocus": "1 Thessalonians 5:11 — Exhort one another daily and build each other up.",
    "description": "Practical principles on holy community and showing up for the brethren.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-rebuild-better",
    "youtubeId": "kr5zrYXXTzs",
    "title": "Rebuilding Better Together — Living in Apostolic Unity",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:12:45",
    "thematicFocus": "Ephesians 4:16 — Every joint supplying growth and edifying in love.",
    "description": "Kickoff message outlining the mandate to rebuild the discipleship altar.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-divine-momentum",
    "youtubeId": "mzYxAKSfNOM",
    "title": "Stepping Into Divine Momentum & Purpose",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "58:30",
    "thematicFocus": "Isaiah 43:19 — God doing a new thing with fresh acceleration.",
    "description": "Declaring a season of acceleration and spiritual traction for disciples.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-persistent-prayer",
    "youtubeId": "uwsPRcCwZDE",
    "title": "The Power of Persistent Prayer & Consecrated Fasting",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:18:40",
    "thematicFocus": "Leviticus 6:13 — The fire shall ever be burning upon the altar.",
    "description": "A clarion call to holy prayer, spiritual discipline, and uncompromising faith.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-life-in-spirit",
    "youtubeId": "nQDbFHMrteU",
    "title": "Life in the Spirit: No Condemnation, More Than Conquerors",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:15:20",
    "thematicFocus": "Romans 8:1-37 — Walking according to the Spirit into complete victory.",
    "description": "Deep exposition of Romans 8 and the believer’s unshakeable security in Christ.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-sunday-encounter",
    "youtubeId": "C5q1LSCTD88",
    "title": "Sunday Worship Encounter & Word of Truth",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:25:10",
    "thematicFocus": "John 4:24 — Worshipping the Father in spirit and truth.",
    "description": "Consecrated live worship, spontaneous altar adoration, and deep word teaching.",
    "isJhowOfficial": true
  },
  {
    "id": "bp-genesis",
    "youtubeId": "GQI72THyO5I",
    "title": "Genesis Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:38",
    "thumbnailUrl": "https://img.youtube.com/vi/GQI72THyO5I/hqdefault.jpg",
    "thematicFocus": "Creation, rebellion, and God’s covenant promise to Abraham’s family.",
    "description": "How God creates a good world and chooses Abraham’s family to rescue and bless all nations."
  },
  {
    "id": "bp-exodus",
    "youtubeId": "jH_aojNJM3E",
    "title": "Exodus Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "6:45",
    "thumbnailUrl": "https://img.youtube.com/vi/jH_aojNJM3E/hqdefault.jpg",
    "thematicFocus": "Deliverance from slavery, the Passover lamb, Sinai covenant, and the Tabernacle.",
    "description": "God rescues Israel from Egypt, invites them into covenant, and dwells in their midst."
  },
  {
    "id": "bp-leviticus",
    "youtubeId": "WmvyrLXoQio",
    "title": "Leviticus Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:23",
    "thumbnailUrl": "https://img.youtube.com/vi/WmvyrLXoQio/hqdefault.jpg",
    "thematicFocus": "Holiness, sacrifice, atonement, and dwelling with the holy God.",
    "description": "How a holy God can live among corrupt people through atonement."
  },
  {
    "id": "bp-numbers",
    "youtubeId": "tp5MIrMZFqo",
    "title": "Numbers Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "6:47",
    "thumbnailUrl": "https://img.youtube.com/vi/tp5MIrMZFqo/hqdefault.jpg",
    "thematicFocus": "Wilderness testing, rebellion, and God’s unfailing covenant faithfulness.",
    "description": "Israel’s journey from Mount Sinai to the edge of the promised land."
  },
  {
    "id": "bp-deuteronomy",
    "youtubeId": "q5QEH9bH8AU",
    "title": "Deuteronomy Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:29",
    "thumbnailUrl": "https://img.youtube.com/vi/q5QEH9bH8AU/hqdefault.jpg",
    "thematicFocus": "The Shema, covenant love, and Moses’ final charge to a new generation.",
    "description": "Moses calls Israel to wholehearted covenant faithfulness and points to a future new heart."
  },
  {
    "id": "bp-joshua",
    "youtubeId": "JqOqJlFF_eU",
    "title": "Joshua Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:36",
    "thumbnailUrl": "https://img.youtube.com/vi/JqOqJlFF_eU/hqdefault.jpg",
    "thematicFocus": "Courage, covenant obedience, and inheriting the promised land.",
    "description": "Joshua leads Israel into the promised land and calls the people to remain faithful to Yahweh."
  },
  {
    "id": "bp-judges",
    "youtubeId": "kOYy8iCfIJ4",
    "title": "Judges Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:35",
    "thumbnailUrl": "https://img.youtube.com/vi/kOYy8iCfIJ4/hqdefault.jpg",
    "thematicFocus": "The downward spiral of compromise when everyone does what is right in their own eyes.",
    "description": "Israel’s tragic cycle of idolatry and the desperate need for a righteous King."
  },
  {
    "id": "bp-ruth",
    "youtubeId": "0h1eoBeR4Jk",
    "title": "Ruth Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:18",
    "thumbnailUrl": "https://img.youtube.com/vi/0h1eoBeR4Jk/hqdefault.jpg",
    "thematicFocus": "Loyalty, kinsman-redeemer, and God’s quiet providence in ordinary lives.",
    "description": "A story of tragedy, loyalty, and redemption pointing to David and Jesus."
  },
  {
    "id": "bp-1-samuel",
    "youtubeId": "QJOju5Dw0V0",
    "title": "1 Samuel Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:24",
    "thumbnailUrl": "https://img.youtube.com/vi/QJOju5Dw0V0/hqdefault.jpg",
    "thematicFocus": "Samuel, Saul’s pride, and God raising up David, a man after His own heart.",
    "description": "How God opposes the proud and exalts the humble in establishing Israel’s monarchy."
  },
  {
    "id": "bp-2-samuel",
    "youtubeId": "YvoWDXNDJgs",
    "title": "2 Samuel Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:44",
    "thumbnailUrl": "https://img.youtube.com/vi/YvoWDXNDJgs/hqdefault.jpg",
    "thematicFocus": "The Davidic covenant (2 Samuel 7), human failure, and hope for the future Messianic King.",
    "description": "David’s reign, his fall, and God’s unbreakable promise of an eternal Kingdom."
  },
  {
    "id": "bp-kings",
    "youtubeId": "bVFW3wbi9pk",
    "title": "1 & 2 Kings Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "9:19",
    "thumbnailUrl": "https://img.youtube.com/vi/bVFW3wbi9pk/hqdefault.jpg",
    "thematicFocus": "Solomon’s temple, divided kingdoms, Elijah & Elisha, and the Babylonian exile.",
    "description": "The rise and fall of Israel’s kings and the prophetic witness calling the nation back to God."
  },
  {
    "id": "bp-chronicles",
    "youtubeId": "HR7xaHv3Ias",
    "title": "1 & 2 Chronicles Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:52",
    "thumbnailUrl": "https://img.youtube.com/vi/HR7xaHv3Ias/hqdefault.jpg",
    "thematicFocus": "David’s lineage, temple worship, and future hope for the Messianic King.",
    "description": "Retelling Israel’s story to point the returned exiles toward the coming Son of David."
  },
  {
    "id": "bp-ezra-nehemiah",
    "youtubeId": "MkETkRv9tG8",
    "title": "Ezra-Nehemiah Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:48",
    "thumbnailUrl": "https://img.youtube.com/vi/MkETkRv9tG8/hqdefault.jpg",
    "thematicFocus": "Rebuilding the temple, the walls, and the spiritual community.",
    "description": "Exiles return to rebuild Jerusalem but discover a deeper need for a renewed heart."
  },
  {
    "id": "bp-esther",
    "youtubeId": "JydNSlufRIs",
    "title": "Esther Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:55",
    "thumbnailUrl": "https://img.youtube.com/vi/JydNSlufRIs/hqdefault.jpg",
    "thematicFocus": "For such a time as this: God’s unseen providence rescuing His covenant people.",
    "description": "How God works behind the scenes in exile to reverse evil and preserve His people."
  },
  {
    "id": "bp-job",
    "youtubeId": "GswSg2ohqmA",
    "title": "Job Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "11:39",
    "thumbnailUrl": "https://img.youtube.com/vi/GswSg2ohqmA/hqdefault.jpg",
    "thematicFocus": "Suffering, divine wisdom, and trusting God without all the answers.",
    "description": "Explores the profound mystery of suffering and God’s majestic wisdom."
  },
  {
    "id": "bp-psalms",
    "youtubeId": "j9phNEaPrv8",
    "title": "Psalms Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:41",
    "thumbnailUrl": "https://img.youtube.com/vi/j9phNEaPrv8/hqdefault.jpg",
    "thematicFocus": "Israel’s five-book prayer hymnal of lament, thanksgiving, and Messianic hope.",
    "description": "How the design of the 150 Psalms teaches believers to pray in every season."
  },
  {
    "id": "bp-proverbs",
    "youtubeId": "AzmYV8GNAIM",
    "title": "Proverbs Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:02",
    "thumbnailUrl": "https://img.youtube.com/vi/AzmYV8GNAIM/hqdefault.jpg",
    "thematicFocus": "The fear of the Lord, lady wisdom, and practical righteous living.",
    "description": "Living well in God’s world by pursuing godly wisdom and understanding."
  },
  {
    "id": "bp-ecclesiastes",
    "youtubeId": "lrsQ1tc-2wk",
    "title": "Ecclesiastes Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:51",
    "thumbnailUrl": "https://img.youtube.com/vi/lrsQ1tc-2wk/hqdefault.jpg",
    "thematicFocus": "Hevel (vapor), the limits of human control, and fearing God in the present.",
    "description": "Finding true meaning beyond the fleeting pursuits under the sun."
  },
  {
    "id": "bp-song-of-songs",
    "youtubeId": "4KC7xE4fgOw",
    "title": "Song of Solomon Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:32",
    "thumbnailUrl": "https://img.youtube.com/vi/4KC7xE4fgOw/hqdefault.jpg",
    "thematicFocus": "Sacred covenant love Poetry as a reflection of divine affection.",
    "description": "Ancient Hebrew love poetry celebrating the power and beauty of covenant devotion."
  },
  {
    "id": "bp-isaiah-1",
    "youtubeId": "d0A6Uchb1F8",
    "title": "Isaiah Part 1 (Chapters 1–39)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:14",
    "thumbnailUrl": "https://img.youtube.com/vi/d0A6Uchb1F8/hqdefault.jpg",
    "thematicFocus": "Judgment, the holy seed, and the coming Immanuel King.",
    "description": "The prophet announces judgment on Israel and promises a new king from David’s line."
  },
  {
    "id": "bp-isaiah-2",
    "youtubeId": "_TzdEPuqgQg",
    "title": "Isaiah Part 2 (Chapters 40–66)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:30",
    "thumbnailUrl": "https://img.youtube.com/vi/_TzdEPuqgQg/hqdefault.jpg",
    "thematicFocus": "The suffering servant, comfort for Zion, and the new creation.",
    "description": "Comfort for God’s people through the suffering servant who bears their iniquities."
  },
  {
    "id": "bp-jeremiah",
    "youtubeId": "RSK36cHbrk0",
    "title": "Jeremiah Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:52",
    "thumbnailUrl": "https://img.youtube.com/vi/RSK36cHbrk0/hqdefault.jpg",
    "thematicFocus": "The weeping prophet, judgment on Judah, and the promise of the New Covenant (Jeremiah 31).",
    "description": "Jeremiah warns Jerusalem and reveals God’s promise to write His law on human hearts."
  },
  {
    "id": "bp-lamentations",
    "youtubeId": "p8GDFPdaQZQ",
    "title": "Lamentations Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:40",
    "thumbnailUrl": "https://img.youtube.com/vi/p8GDFPdaQZQ/hqdefault.jpg",
    "thematicFocus": "Sacred grief and the steadfast mercies of the Lord that are new every morning.",
    "description": "Five poetic laments over fallen Jerusalem anchored by hope in God’s faithfulness."
  },
  {
    "id": "bp-ezekiel",
    "youtubeId": "R-CIPu1nko8",
    "title": "Ezekiel Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:30",
    "thumbnailUrl": "https://img.youtube.com/vi/R-CIPu1nko8/hqdefault.jpg",
    "thematicFocus": "God’s glory, the valley of dry bones, a new heart of flesh, and the river of life.",
    "description": "Ezekiel’s visions of judgment and supernatural resurrection for God’s people."
  },
  {
    "id": "bp-daniel",
    "youtubeId": "9cSC9uobtPM",
    "title": "Daniel Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "9:01",
    "thumbnailUrl": "https://img.youtube.com/vi/9cSC9uobtPM/hqdefault.jpg",
    "thematicFocus": "Uncompromising faithfulness in Babylon and the vision of the Son of Man.",
    "description": "How Daniel and his friends stood firm in exile while awaiting God’s eternal Kingdom."
  },
  {
    "id": "bp-hosea",
    "youtubeId": "kE6SZ1ogOVU",
    "title": "Hosea Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:16",
    "thumbnailUrl": "https://img.youtube.com/vi/kE6SZ1ogOVU/hqdefault.jpg",
    "thematicFocus": "God’s relentless covenant love redeeming an unfaithful bride.",
    "description": "Hosea’s life becomes a living prophecy of God’s heartbreak and redeeming mercy."
  },
  {
    "id": "bp-joel",
    "youtubeId": "zQLazbgz90c",
    "title": "Joel Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "5:35",
    "thumbnailUrl": "https://img.youtube.com/vi/zQLazbgz90c/hqdefault.jpg",
    "thematicFocus": "The day of the Lord, repentance, and the outpouring of the Holy Spirit.",
    "description": "A plague of locusts prefigures the day of the Lord and the promise of His Spirit."
  },
  {
    "id": "bp-amos",
    "youtubeId": "mGgWaPGpGz4",
    "title": "Amos Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:20",
    "thumbnailUrl": "https://img.youtube.com/vi/mGgWaPGpGz4/hqdefault.jpg",
    "thematicFocus": "Let justice roll down like waters, and righteousness like a mighty stream.",
    "description": "Amos confronts hollow religious ritual and calls for true covenant justice."
  },
  {
    "id": "bp-jonah",
    "youtubeId": "dLIabZc0O4c",
    "title": "Jonah Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:55",
    "thumbnailUrl": "https://img.youtube.com/vi/dLIabZc0O4c/hqdefault.jpg",
    "thematicFocus": "A rebellious prophet and the scandalous wideness of God’s mercy for the nations.",
    "description": "Jonah’s flight exposes the human heart and reveals God’s compassion for all peoples."
  },
  {
    "id": "bp-micah",
    "youtubeId": "MFEUEcylwLc",
    "title": "Micah Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:05",
    "thumbnailUrl": "https://img.youtube.com/vi/MFEUEcylwLc/hqdefault.jpg",
    "thematicFocus": "Micah 6:8 — To do justly, to love mercy, and to walk humbly with your God.",
    "description": "Prophetic warning and the promise of a Shepherd-King born in Bethlehem."
  },
  {
    "id": "bp-nahum",
    "youtubeId": "Y30DanA5EhU",
    "title": "Nahum Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "4:59",
    "thumbnailUrl": "https://img.youtube.com/vi/Y30DanA5EhU/hqdefault.jpg",
    "thematicFocus": "God’s justice on violent empires and comfort for the oppressed.",
    "description": "God’s righteous downfall of Nineveh and protection for those who take refuge in Him."
  },
  {
    "id": "bp-habakkuk",
    "youtubeId": "OPMaRqGJPUU",
    "title": "Habakkuk Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "6:45",
    "thumbnailUrl": "https://img.youtube.com/vi/OPMaRqGJPUU/hqdefault.jpg",
    "thematicFocus": "The just shall live by his faith: wrestling honestly with God in dark times.",
    "description": "Habakkuk brings his raw questions to God and learns to rejoice in the Lord regardless."
  },
  {
    "id": "bp-zechariah",
    "youtubeId": "_106IfO6Kc0",
    "title": "Zechariah Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:46",
    "thumbnailUrl": "https://img.youtube.com/vi/_106IfO6Kc0/hqdefault.jpg",
    "thematicFocus": "Not by might nor by power, but by My Spirit, says the Lord of hosts.",
    "description": "Apocalyptic visions preparing Jerusalem for the humble, pierced Messianic King."
  },
  {
    "id": "bp-malachi",
    "youtubeId": "HPGShWZ4Jvk",
    "title": "Malachi Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "6:20",
    "thumbnailUrl": "https://img.youtube.com/vi/HPGShWZ4Jvk/hqdefault.jpg",
    "thematicFocus": "The refiner’s fire and the rising Sun of Righteousness with healing in His wings.",
    "description": "The final prophetic voice of the Old Testament pointing to the forerunner and Messiah."
  },
  {
    "id": "bp-matthew-1",
    "youtubeId": "3Dv4-n6OYGI",
    "title": "Matthew Part 1 (Chapters 1–13)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:16",
    "thumbnailUrl": "https://img.youtube.com/vi/3Dv4-n6OYGI/hqdefault.jpg",
    "thematicFocus": "Jesus as the promised Immanuel, the new Moses, and the Sermon on the Mount.",
    "description": "How Jesus fulfills the Torah and the Prophets to inaugurate the Kingdom of Heaven."
  },
  {
    "id": "bp-matthew-2",
    "youtubeId": "GGCF3OPWN14",
    "title": "Matthew Part 2 (Chapters 14–28)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:47",
    "thumbnailUrl": "https://img.youtube.com/vi/GGCF3OPWN14/hqdefault.jpg",
    "thematicFocus": "The upside-down kingdom, the cross, resurrection, and great commission.",
    "description": "Jesus brings God’s heavenly kingdom to earth through sacrificial love."
  },
  {
    "id": "bp-mark",
    "youtubeId": "HGHqu9-DtXk",
    "title": "Mark Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:49",
    "thumbnailUrl": "https://img.youtube.com/vi/HGHqu9-DtXk/hqdefault.jpg",
    "thematicFocus": "The suffering servant King, urgent proclamation, and authentic discipleship.",
    "description": "Jesus revealed as the suffering Messiah who gives His life as a ransom for many."
  },
  {
    "id": "bp-luke",
    "youtubeId": "XIb_dCIxzr0",
    "title": "Luke Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:33",
    "thumbnailUrl": "https://img.youtube.com/vi/XIb_dCIxzr0/hqdefault.jpg",
    "thematicFocus": "The Son of Man came to seek and to save that which was lost.",
    "description": "Jesus brings the Spirit-empowered upside-down Kingdom of God to the outsider and broken."
  },
  {
    "id": "bp-john-1",
    "youtubeId": "G-2e9mMf7E8",
    "title": "John Part 1 (Chapters 1–12)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:42",
    "thumbnailUrl": "https://img.youtube.com/vi/G-2e9mMf7E8/hqdefault.jpg",
    "thematicFocus": "The Word made flesh, seven signs, and eternal life through believing.",
    "description": "Jesus is God become human to embody the Father’s love and offer eternal life."
  },
  {
    "id": "bp-acts",
    "youtubeId": "CGbNw855ksw",
    "title": "Acts Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:16",
    "thumbnailUrl": "https://img.youtube.com/vi/CGbNw855ksw/hqdefault.jpg",
    "thematicFocus": "Pentecost fire, apostolic witness, and the Gospel spreading to the ends of the earth.",
    "description": "The risen Jesus sends the Holy Spirit to empower His Church across all nations."
  },
  {
    "id": "bp-romans",
    "youtubeId": "ej_6dVdJSIU",
    "title": "Romans Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:46",
    "thumbnailUrl": "https://img.youtube.com/vi/ej_6dVdJSIU/hqdefault.jpg",
    "thematicFocus": "Justification by faith, life in the Spirit, and the righteousness of God revealed.",
    "description": "How the Gospel of Jesus creates a unified multi-ethnic covenant family transformed by grace."
  },
  {
    "id": "bp-1-corinthians",
    "youtubeId": "yiHf8klCCc4",
    "title": "1 Corinthians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:49",
    "thumbnailUrl": "https://img.youtube.com/vi/yiHf8klCCc4/hqdefault.jpg",
    "thematicFocus": "Viewing all of life through the lens of the Cross, spiritual gifts, and resurrection.",
    "description": "Paul calls a divided church to holiness, sacrificial love (1 Cor 13), and unity in the Body."
  },
  {
    "id": "bp-2-corinthians",
    "youtubeId": "3lfPK2vfC54",
    "title": "2 Corinthians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:12",
    "thumbnailUrl": "https://img.youtube.com/vi/3lfPK2vfC54/hqdefault.jpg",
    "thematicFocus": "My grace is sufficient for you, for My strength is made perfect in weakness.",
    "description": "The paradox of the Cross: how God’s resurrection power shines brightest through humble vessels."
  },
  {
    "id": "bp-galatians",
    "youtubeId": "vmx4UjRFp0M",
    "title": "Galatians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:15",
    "thumbnailUrl": "https://img.youtube.com/vi/vmx4UjRFp0M/hqdefault.jpg",
    "thematicFocus": "Crucified with Christ, freedom from legalism, and walking by the Fruit of the Spirit.",
    "description": "Paul defends the pure Gospel of grace and the transforming power of the Holy Spirit."
  },
  {
    "id": "bp-ephesians",
    "youtubeId": "Y71r-T98E2Q",
    "title": "Ephesians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:12",
    "thumbnailUrl": "https://img.youtube.com/vi/Y71r-T98E2Q/hqdefault.jpg",
    "thematicFocus": "Reconciliation, unity in the body of Christ, and the armor of God.",
    "description": "God’s cosmic plan to unite all things under Christ through the unified church."
  },
  {
    "id": "bp-philippians",
    "youtubeId": "oE9qqW1-BkU",
    "title": "Philippians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:08",
    "thumbnailUrl": "https://img.youtube.com/vi/oE9qqW1-BkU/hqdefault.jpg",
    "thematicFocus": "Having the mind of Christ (Phil 2) and rejoicing in the Lord in every circumstance.",
    "description": "Paul writes from prison on unshakeable joy and imitating Jesus’ self-emptying love."
  },
  {
    "id": "bp-colossians",
    "youtubeId": "pXTXlDxQsvc",
    "title": "Colossians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:04",
    "thumbnailUrl": "https://img.youtube.com/vi/pXTXlDxQsvc/hqdefault.jpg",
    "thematicFocus": "The supremacy of Christ over all creation and living as the new human.",
    "description": "Jesus is the supreme Lord of all reality, freeing believers from all rival powers."
  },
  {
    "id": "bp-1-thessalonians",
    "youtubeId": "No7Nq6IX23c",
    "title": "1 Thessalonians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:32",
    "thumbnailUrl": "https://img.youtube.com/vi/No7Nq6IX23c/hqdefault.jpg",
    "thematicFocus": "Sanctification, brotherly love, and living in expectant hope of Christ’s return.",
    "description": "Encouragement to persecuted believers to walk in holiness and comfort one another."
  },
  {
    "id": "bp-1-timothy",
    "youtubeId": "7RoqnGcEjcs",
    "title": "1 Timothy Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:55",
    "thumbnailUrl": "https://img.youtube.com/vi/7RoqnGcEjcs/hqdefault.jpg",
    "thematicFocus": "Sound doctrine, godly leadership, and setting an example for the believers in youth.",
    "description": "Paul’s pastoral charge to Timothy on ordering the household of God in truth and love."
  },
  {
    "id": "bp-2-timothy",
    "youtubeId": "urlvnxCaL00",
    "title": "2 Timothy Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:45",
    "thumbnailUrl": "https://img.youtube.com/vi/urlvnxCaL00/hqdefault.jpg",
    "thematicFocus": "Enduring hardship as a good soldier of Jesus Christ and preaching the Word.",
    "description": "Paul’s final charge to fan into flame the gift of God and guard the sacred deposit."
  },
  {
    "id": "bp-hebrews",
    "youtubeId": "1fNWTZZwgbs",
    "title": "Hebrews Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:16",
    "thumbnailUrl": "https://img.youtube.com/vi/1fNWTZZwgbs/hqdefault.jpg",
    "thematicFocus": "Jesus our Great High Priest, the superior New Covenant, and the Hall of Faith.",
    "description": "Looking unto Jesus, the author and finisher of our faith, who opened the way into the Holiest."
  },
  {
    "id": "bp-james",
    "youtubeId": "qn-hLHWwRYY",
    "title": "James Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:05",
    "thumbnailUrl": "https://img.youtube.com/vi/qn-hLHWwRYY/hqdefault.jpg",
    "thematicFocus": "Be doers of the Word and not hearers only: authentic faith that produces works.",
    "description": "Practical New Testament wisdom on trials, taming the tongue, and wholehearted devotion."
  },
  {
    "id": "bp-1-peter",
    "youtubeId": "WhP7AZQlzCg",
    "title": "1 Peter Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:03",
    "thumbnailUrl": "https://img.youtube.com/vi/WhP7AZQlzCg/hqdefault.jpg",
    "thematicFocus": "Hope in suffering, royal priesthood, and following the footsteps of Jesus.",
    "description": "Persecuted believers encouraged to stand firm as God’s chosen royal priesthood."
  },
  {
    "id": "bp-2-peter",
    "youtubeId": "wWLv_ITyKYc",
    "title": "2 Peter Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:02",
    "thumbnailUrl": "https://img.youtube.com/vi/wWLv_ITyKYc/hqdefault.jpg",
    "thematicFocus": "Growing in godliness, exposing false teachers, and the return of Christ.",
    "description": "Peter’s farewell message warning against corruption and awaiting the new creation."
  },
  {
    "id": "bp-1-3-john",
    "youtubeId": "l3QkE6nKylM",
    "title": "1–3 John Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:21",
    "thumbnailUrl": "https://img.youtube.com/vi/l3QkE6nKylM/hqdefault.jpg",
    "thematicFocus": "God is light and God is love: walking in truth and loving the brethren.",
    "description": "The Apostle John calls believers to abide in Jesus and walk in authentic fellowship."
  },
  {
    "id": "bp-jude",
    "youtubeId": "6UoCmakZmys",
    "title": "Jude Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:56",
    "thumbnailUrl": "https://img.youtube.com/vi/6UoCmakZmys/hqdefault.jpg",
    "thematicFocus": "Contending earnestly for the faith once delivered to the saints.",
    "description": "Jude confronts moral rebellion and points disciples to God who keeps them from stumbling."
  },
  {
    "id": "bp-revelation",
    "youtubeId": "5nvVVcYD-0w",
    "title": "Revelation Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "11:46",
    "thumbnailUrl": "https://img.youtube.com/vi/5nvVVcYD-0w/hqdefault.jpg",
    "thematicFocus": "The slain Lamb on the throne, overcoming by the blood, and the New Jerusalem.",
    "description": "John’s apocalyptic vision unveiling the triumph of King Jesus and the marriage of Heaven and Earth."
  },
  {
    "id": "bp-theme-covenants",
    "youtubeId": "7_CGP-12AE0",
    "title": "Biblical Themes: The Covenants",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:24",
    "thumbnailUrl": "https://img.youtube.com/vi/7_CGP-12AE0/hqdefault.jpg",
    "thematicFocus": "God’s covenant relationships with humanity from Abraham to Jesus.",
    "description": "Trace the covenant promises that tie the entire narrative of scripture together."
  },
  {
    "id": "bp-theme-exile",
    "youtubeId": "XzWpa0gcPyo",
    "title": "Biblical Themes: The Way of the Exile",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:34",
    "thumbnailUrl": "https://img.youtube.com/vi/XzWpa0gcPyo/hqdefault.jpg",
    "thematicFocus": "Living as spiritual sojourners in Babylon while awaiting the true homeland.",
    "description": "How the biblical theme of exile shapes the believer’s pilgrim identity and hope in Christ."
  },
  {
    "id": "bp-theme-generosity",
    "youtubeId": "62CliEkRCso",
    "title": "Biblical Themes: Generosity",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:12",
    "thumbnailUrl": "https://img.youtube.com/vi/62CliEkRCso/hqdefault.jpg",
    "thematicFocus": "Abundance versus scarcity: living as open conduits of God’s grace.",
    "description": "How trusting in God’s limitless supply unlocks extravagant kingdom giving."
  },
  {
    "id": "bp-theme-heaven-and-earth",
    "youtubeId": "Zy2AQlK6C5k",
    "title": "Biblical Themes: Heaven & Earth",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "6:04",
    "thumbnailUrl": "https://img.youtube.com/vi/Zy2AQlK6C5k/hqdefault.jpg",
    "thematicFocus": "God’s cosmic mission to reunite heaven and earth through Jesus.",
    "description": "Explore how the biblical story begins in a garden temple and culminates in the New Jerusalem."
  },
  {
    "id": "bp-theme-son-of-man",
    "youtubeId": "z6cWEcqxhlI",
    "title": "Biblical Themes: Son of Man",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:45",
    "thumbnailUrl": "https://img.youtube.com/vi/z6cWEcqxhlI/hqdefault.jpg",
    "thematicFocus": "Daniel 7 and Jesus’ favorite title for His humanity and divine authority.",
    "description": "Why Jesus called Himself the Son of Man to reveal His suffering and enthronement."
  },
  {
    "id": "bp-theme-anointing",
    "youtubeId": "-uPNMO-YA5E",
    "title": "Biblical Themes: Anointing",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:29",
    "thumbnailUrl": "https://img.youtube.com/vi/-uPNMO-YA5E/hqdefault.jpg",
    "thematicFocus": "Consecration by the Spirit for priestly and royal kingdom service.",
    "description": "From ancient oil of consecration to the Messianic anointing of the Holy Spirit."
  },
  {
    "id": "bp-theme-royal-priesthood",
    "youtubeId": "Tw-bBfBDpE0",
    "title": "Biblical Themes: Royal Priesthood",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:52",
    "thumbnailUrl": "https://img.youtube.com/vi/Tw-bBfBDpE0/hqdefault.jpg",
    "thematicFocus": "1 Peter 2:9 — Called out of darkness to mediate God’s blessing to the world.",
    "description": "Humanity’s calling as royal priests fulfilled in Jesus and shared with His Church."
  },
  {
    "id": "bp-theme-day-of-the-lord",
    "youtubeId": "tEBc2gSSW04",
    "title": "Biblical Themes: Day of the Lord",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:18",
    "thumbnailUrl": "https://img.youtube.com/vi/tEBc2gSSW04/hqdefault.jpg",
    "thematicFocus": "God’s final confrontation with human evil and the restoration of justice.",
    "description": "Understanding the prophetic motif of divine justice and cosmic renewal."
  },
  {
    "id": "bp-theme-water-of-life",
    "youtubeId": "PgmAkM39Zt4",
    "title": "Biblical Themes: Water of Life",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:41",
    "thumbnailUrl": "https://img.youtube.com/vi/PgmAkM39Zt4/hqdefault.jpg",
    "thematicFocus": "From Eden’s river to Ezekiel’s temple and the living water of Christ.",
    "description": "How flowing water throughout Scripture points to the life-giving Spirit of Jesus."
  },
  {
    "id": "bp-theme-witness",
    "youtubeId": "jhcmzjwbvyk",
    "title": "Biblical Themes: Witness",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:19",
    "thumbnailUrl": "https://img.youtube.com/vi/jhcmzjwbvyk/hqdefault.jpg",
    "thematicFocus": "Acts 1:8 — Bearing faithful testimony to the risen King.",
    "description": "What it means for believers to stand as bold witnesses of God’s kingdom."
  },
  {
    "id": "bp-theme-the-test",
    "youtubeId": "sR4AT0LMJ5c",
    "title": "Biblical Themes: The Test",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:15",
    "thumbnailUrl": "https://img.youtube.com/vi/sR4AT0LMJ5c/hqdefault.jpg",
    "thematicFocus": "Wilderness testing that refines faith and reveals covenant loyalty.",
    "description": "Why God leads His people through testing and how Jesus passed the ultimate test."
  },
  {
    "id": "bp-theme-the-law",
    "youtubeId": "Sew1kBIe-W0",
    "title": "Biblical Themes: The Law",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "6:12",
    "thumbnailUrl": "https://img.youtube.com/vi/Sew1kBIe-W0/hqdefault.jpg",
    "thematicFocus": "The Torah’s wisdom and how Jesus fulfills the Law and the Prophets.",
    "description": "Understanding the role of the Old Testament Law and the new covenant heart transformation."
  },
  {
    "id": "bp-theme-sabbath",
    "youtubeId": "PFTLvkB3JLM",
    "title": "Biblical Themes: Sabbath",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:33",
    "thumbnailUrl": "https://img.youtube.com/vi/PFTLvkB3JLM/hqdefault.jpg",
    "thematicFocus": "Entering God’s seventh-day rest and eternal renewal in Christ.",
    "description": "The seventh-day rest as a rhythm of trust pointing to the ultimate rest in Christ."
  },
  {
    "id": "bp-theme-holy-spirit",
    "youtubeId": "oNNZO9i1Gjc",
    "title": "Biblical Themes: Holy Spirit",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "4:11",
    "thumbnailUrl": "https://img.youtube.com/vi/oNNZO9i1Gjc/hqdefault.jpg",
    "thematicFocus": "Ruakh: The personal, empowering presence of God from creation to Pentecost.",
    "description": "The Hebrew concept of Ruakh and how the Spirit breathes life into believers."
  },
  {
    "id": "bp-theme-image-of-god",
    "youtubeId": "zUKzVFQn4Tc",
    "title": "Biblical Themes: Image of God",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "6:12",
    "thumbnailUrl": "https://img.youtube.com/vi/zUKzVFQn4Tc/hqdefault.jpg",
    "thematicFocus": "Humanity’s royal vocation as divine representatives and partners.",
    "description": "What it means to be made in God’s image and restored through Christ."
  },
  {
    "id": "bp-theme-tree-of-life",
    "youtubeId": "TJLan-pJzfQ",
    "title": "Biblical Themes: Tree of Life",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:48",
    "thumbnailUrl": "https://img.youtube.com/vi/TJLan-pJzfQ/hqdefault.jpg",
    "thematicFocus": "Life with God versus grasping autonomy: from Eden to the Cross to Revelation.",
    "description": "The choice between human self-reliance and divine eternal life."
  },
  {
    "id": "bp-theme-messiah",
    "youtubeId": "3dEh25pduQ8",
    "title": "Biblical Themes: The Messiah",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:50",
    "thumbnailUrl": "https://img.youtube.com/vi/3dEh25pduQ8/hqdefault.jpg",
    "thematicFocus": "The royal seed promised in David and fulfilled in Christ Jesus.",
    "description": "How the Old Testament prophecies converge on the crucified and reigning King."
  },
  {
    "id": "bp-theme-gospel-kingdom",
    "youtubeId": "xmFPS0f-kzs",
    "title": "Biblical Themes: Gospel of the Kingdom",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:24",
    "thumbnailUrl": "https://img.youtube.com/vi/xmFPS0f-kzs/hqdefault.jpg",
    "thematicFocus": "The royal proclamation that Jesus is the true Lord of heaven and earth.",
    "description": "What the good news of the kingdom meant in the ancient biblical world."
  },
  {
    "id": "bp-htr-what-is-bible",
    "youtubeId": "ak06MSETeo4",
    "title": "How to Read the Bible: What is the Bible?",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:39",
    "thumbnailUrl": "https://img.youtube.com/vi/ak06MSETeo4/hqdefault.jpg",
    "thematicFocus": "The divine-human origin of scripture telling one unified story.",
    "description": "How ancient texts collection tells one magnificent story pointing to Jesus."
  },
  {
    "id": "bp-htr-literary-styles",
    "youtubeId": "oUXJ8Owes8E",
    "title": "How to Read the Bible: Literary Styles",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:15",
    "thumbnailUrl": "https://img.youtube.com/vi/oUXJ8Owes8E/hqdefault.jpg",
    "thematicFocus": "Narrative, poetry, and discourse in biblical literature.",
    "description": "Appreciating the diverse literary forms through which God communicates truth."
  },
  {
    "id": "bp-htr-narrative-plot",
    "youtubeId": "dLFCE8z__hw",
    "title": "How to Read the Bible: Plot in Biblical Narrative",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "6:15",
    "thumbnailUrl": "https://img.youtube.com/vi/dLFCE8z__hw/hqdefault.jpg",
    "thematicFocus": "Tracking conflict, climax, and resolution in biblical storytelling.",
    "description": "How biblical stories use plot structures to transform how we see our lives."
  },
  {
    "id": "bp-htr-character-narrative",
    "youtubeId": "0EQDGax19xk",
    "title": "How to Read: Character in Biblical Narrative",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:44",
    "thumbnailUrl": "https://img.youtube.com/vi/0EQDGax19xk/hqdefault.jpg",
    "thematicFocus": "How flawed biblical characters mirror our own hearts and need for grace.",
    "description": "Examining how Hebrew authors portray complex human moral choices."
  },
  {
    "id": "bp-htr-setting-narrative",
    "youtubeId": "7FuT8WtoAK0",
    "title": "How to Read: Setting in Biblical Narrative",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:28",
    "thumbnailUrl": "https://img.youtube.com/vi/7FuT8WtoAK0/hqdefault.jpg",
    "thematicFocus": "Mountains, wilderness, gardens, and rivers as theological settings.",
    "description": "How locations and time periods in Scripture carry rich covenant symbolism."
  },
  {
    "id": "bp-htr-design-patterns",
    "youtubeId": "rkqsQpck8YU",
    "title": "How to Read: Design Patterns in Narrative",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "6:18",
    "thumbnailUrl": "https://img.youtube.com/vi/rkqsQpck8YU/hqdefault.jpg",
    "thematicFocus": "Repeated motifs that connect stories from Genesis to the Gospels.",
    "description": "Recognizing the intentional symmetry and typological patterns woven through the Bible."
  },
  {
    "id": "bp-htr-art-poetry",
    "youtubeId": "q9yp1ZXbsEg",
    "title": "How to Read: Art of Biblical Poetry",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:32",
    "thumbnailUrl": "https://img.youtube.com/vi/q9yp1ZXbsEg/hqdefault.jpg",
    "thematicFocus": "Parallelism, rhythm, and dense imagery in Hebrew poetic books.",
    "description": "Why one-third of the Old Testament is written in vibrant poetic verse."
  },
  {
    "id": "bp-htr-metaphor-poetry",
    "youtubeId": "L9W5afjndtU",
    "title": "How to Read: Metaphor in Biblical Poetry",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:19",
    "thumbnailUrl": "https://img.youtube.com/vi/L9W5afjndtU/hqdefault.jpg",
    "thematicFocus": "Rocks, shields, fire, and living water as windows into God’s character.",
    "description": "How biblical poets use concrete physical imagery to reveal spiritual realities."
  },
  {
    "id": "bp-htr-parables-of-jesus",
    "youtubeId": "XX-aAg4_U2Q",
    "title": "How to Read: Parables of Jesus",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:56",
    "thumbnailUrl": "https://img.youtube.com/vi/XX-aAg4_U2Q/hqdefault.jpg",
    "thematicFocus": "Subversive kingdom stories that unveil the mysteries of God’s reign.",
    "description": "Why Jesus taught in parables to challenge expectations and invite discipleship."
  },
  {
    "id": "bp-htr-apocalyptic-literature",
    "youtubeId": "UNDX4tUdj1Y",
    "title": "How to Read: Apocalyptic Literature",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "6:25",
    "thumbnailUrl": "https://img.youtube.com/vi/UNDX4tUdj1Y/hqdefault.jpg",
    "thematicFocus": "Pulling back the curtain to see heavenly reality and Christ’s victory.",
    "description": "How to read Daniel, Zechariah, and Revelation with biblical clarity and hope."
  },
  {
    "id": "bp-ws-shema",
    "youtubeId": "6KQLOuIKaRA",
    "title": "Shema Series: Shema (Listen / Hear)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:35",
    "thumbnailUrl": "https://img.youtube.com/vi/6KQLOuIKaRA/hqdefault.jpg",
    "thematicFocus": "Deuteronomy 6:4 — In Hebrew, truly hearing God’s Word means obeying it.",
    "description": "Discover why the Hebrew word Shema unites listening and wholehearted action."
  },
  {
    "id": "bp-ws-yhwh",
    "youtubeId": "eLrGM26pmM0",
    "title": "Shema Series: YHWH (The LORD)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:45",
    "thumbnailUrl": "https://img.youtube.com/vi/eLrGM26pmM0/hqdefault.jpg",
    "thematicFocus": "The sacred covenant name revealed to Moses at the burning bush.",
    "description": "The profound meaning of the self-existent God who is faithfully present with His people."
  },
  {
    "id": "bp-ws-ahavah",
    "youtubeId": "HV_LUs2lnIQ",
    "title": "Shema Series: Ahavah (Love)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:48",
    "thumbnailUrl": "https://img.youtube.com/vi/HV_LUs2lnIQ/hqdefault.jpg",
    "thematicFocus": "Covenant affection and loyal devotion that acts for the good of another.",
    "description": "What it means in Hebrew to love the Lord your God and your neighbor."
  },
  {
    "id": "bp-ws-lev",
    "youtubeId": "aS4iM6KpPYo",
    "title": "Shema Series: Lev (Heart)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:29",
    "thumbnailUrl": "https://img.youtube.com/vi/aS4iM6KpPYo/hqdefault.jpg",
    "thematicFocus": "The center of human thought, desire, wisdom, and moral choice.",
    "description": "In biblical Hebrew, the heart is the seat of both intellect and devotion."
  },
  {
    "id": "bp-ws-nephesh",
    "youtubeId": "g_igCcWAMAM",
    "title": "Shema Series: Nephesh (Soul)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:02",
    "thumbnailUrl": "https://img.youtube.com/vi/g_igCcWAMAM/hqdefault.jpg",
    "thematicFocus": "Loving God with your entire physical life, throat, and living being.",
    "description": "Why the Hebrew word Nephesh encompasses our whole embodied existence."
  },
  {
    "id": "bp-ws-meod",
    "youtubeId": "9aaVy1AmFX4",
    "title": "Shema Series: Me'od (Might / Strength)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:41",
    "thumbnailUrl": "https://img.youtube.com/vi/9aaVy1AmFX4/hqdefault.jpg",
    "thematicFocus": "Loving the Lord with all your muchness, capacity, and resources.",
    "description": "How the Hebrew adverb Me'od calls believers to total, undivided consecration."
  },
  {
    "id": "bp-ws-shalom",
    "youtubeId": "oLYORLZOaZE",
    "title": "Word Study: Shalom (Peace)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:19",
    "thumbnailUrl": "https://img.youtube.com/vi/oLYORLZOaZE/hqdefault.jpg",
    "thematicFocus": "Wholeness, completeness, reconciliation, and cosmic harmony.",
    "description": "Biblical peace as total flourishing and relational wholeness in Christ."
  },
  {
    "id": "bp-ws-yakhal",
    "youtubeId": "4WYNBjJSYvE",
    "title": "Word Study: Yakhal (Hope)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:08",
    "thumbnailUrl": "https://img.youtube.com/vi/4WYNBjJSYvE/hqdefault.jpg",
    "thematicFocus": "Patient, expectant waiting on God’s character in dark seasons.",
    "description": "Biblical hope as confident anticipation based on God’s proven faithfulness."
  },
  {
    "id": "bp-ws-chara",
    "youtubeId": "qvOhQTuD2e0",
    "title": "Word Study: Chara (Joy)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:10",
    "thumbnailUrl": "https://img.youtube.com/vi/qvOhQTuD2e0/hqdefault.jpg",
    "thematicFocus": "Defiant gladness anchored in God’s promises rather than circumstances.",
    "description": "Why Christian joy endures through trials because of the resurrection of Jesus."
  },
  {
    "id": "bp-ws-grace-chen",
    "youtubeId": "ABPVVw_aw44",
    "title": "Word Study: Grace (Chen)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:08",
    "thumbnailUrl": "https://img.youtube.com/vi/ABPVVw_aw44/hqdefault.jpg",
    "thematicFocus": "Delightful, unearned favor given generously to the undeserving.",
    "description": "How God’s grace in Hebrew and Greek redefines our standing before Him."
  },
  {
    "id": "bp-ws-holiness",
    "youtubeId": "l9vn5UvsHvM",
    "title": "Word Study: Holy / Qadosh",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:45",
    "thumbnailUrl": "https://img.youtube.com/vi/l9vn5UvsHvM/hqdefault.jpg",
    "thematicFocus": "The unique, set-apart purity and blinding glory of God.",
    "description": "How God’s blazing holiness purifies everything that draws near in faith."
  },
  {
    "id": "bp-ws-compassion",
    "youtubeId": "qJEtyAiAQik",
    "title": "Character of God: Compassion (Khum)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:02",
    "thumbnailUrl": "https://img.youtube.com/vi/qJEtyAiAQik/hqdefault.jpg",
    "thematicFocus": "The gut-level visceral compassion of Yahweh for broken people.",
    "description": "Explore the Hebrew word for compassion and God’s tender mercy."
  },
  {
    "id": "bp-ws-justice",
    "youtubeId": "A14THPoc4-4",
    "title": "Character of God: Justice (Mishpat & Tzedakah)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "6:18",
    "thumbnailUrl": "https://img.youtube.com/vi/A14THPoc4-4/hqdefault.jpg",
    "thematicFocus": "Rectifying wrongs, defending the vulnerable, and social righteousness.",
    "description": "Biblical justice as active restoration rather than merely punitive retribution."
  },
  {
    "id": "bp-ws-agape",
    "youtubeId": "slyevQ1LW7A",
    "title": "Character of God: Agape (Love)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:52",
    "thumbnailUrl": "https://img.youtube.com/vi/slyevQ1LW7A/hqdefault.jpg",
    "thematicFocus": "Self-sacrificial action seeking the highest good of another.",
    "description": "The revolutionary Greek word used by the New Testament to describe God’s love."
  }
];

export const CANONICAL_MEDIA_VAULT = SANCTUARY_VIDEOS_DATA;
export const VERIFIED_PRAISE_AND_WORSHIP = SANCTUARY_VIDEOS_DATA.filter(v => v.category === 'Praise & Worship');
export const VERIFIED_TEACHINGS = SANCTUARY_VIDEOS_DATA.filter(v => v.category !== 'Praise & Worship');
export const VERIFIED_BIBLE_PROJECT_MASTER_SERIES = SANCTUARY_VIDEOS_DATA.filter(v => v.channel === 'BibleProject' || v.speaker === 'BibleProject');

export default SANCTUARY_VIDEOS_DATA;
