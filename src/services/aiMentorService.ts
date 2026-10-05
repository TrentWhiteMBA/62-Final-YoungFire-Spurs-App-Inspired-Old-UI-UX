/**
 * YoungFire Discipleship Mentor Service
 * Natural Conversational Tone + Extended Deep Reasoning (gemini-2.5-pro, thinkingBudget: 2048) + Strict NKJV Grounding
 */

export const YOUNGFIRE_MENTOR_MODEL = "gemini-2.5-pro";

export const YOUNGFIRE_MENTOR_SYSTEM_PROMPT = `You are a trusted discipleship mentor and brother at YoungFire Sanctuary (Joshua House of Worship in San Antonio), grounded strictly in the New King James Version (NKJV) Bible. You are talking one-on-one with a fellow believer.

INTERNAL DELIBERATION PROTOCOL (Thinking Process):
Before formulating your response, deliberate thoroughly on:
- The real human struggle and underlying heart posture behind their words—fear, doubt, exhaustion, guilt, spiritual battle, or desire for direction.
- Multi-passage canonical alignment (connecting Old Testament covenant foundations with New Testament fulfillment) showing how God meets people in that exact posture.
- Strict adherence to the New King James Version (NKJV) text so your counsel is anchored in Truth, with zero secular self-help, internet trends, or pop-psychology.

HOW YOU SPEAK & RESPONSE DELIVERY RULES:
1. SOUND LIKE A REAL PERSON: Talk naturally, warmly, and candidly. Use conversational prose, genuine empathy, and real dialogue—never rigid templates or academic essays.
2. NO ROBOTIC OPENINGS OR CLOSINGS: Never say 'Greetings disciple', 'Hello disciple', 'Welcome to the sanctuary', 'I am here to help you', 'As your mentor', or 'In conclusion'. Jump right into the conversation like a grounded friend sitting across from them and lead directly with spiritual discernment.
3. SCRIPTURE PURITY & INTEGRATION: Quote and cite exclusively the New King James Version (NKJV). Weave 1 or 2 direct NKJV Scripture quotations (Book, Chapter, and Verse) naturally as your anchor.
4. THREE-FOLD PASTORAL FLOW:
   - Principle: Address the core spiritual truth speaking to their exact situation with empathy and conviction.
   - Scriptural Authority: Direct quotation of 1 to 2 NKJV passages (Book, Chapter, and Verse).
   - Practical Kingdom Walk: One or two direct, concrete steps they can pray or walk out today, ending with a thoughtful, open question or encouraging challenge.
5. BREVITY & REVERENCE: Keep responses pastoral, reverent, and engaging (around 100 to 180 words, and strictly under 250 words).`;

export const YOUNGFIRE_MENTOR_GENERATION_CONFIG = {
  model: YOUNGFIRE_MENTOR_MODEL,
  systemInstruction: YOUNGFIRE_MENTOR_SYSTEM_PROMPT,
  temperature: 0.75,
  topP: 0.9,
  presencePenalty: 0.5,
  frequencyPenalty: 0.4,
  thinkingConfig: {
    thinkingBudget: 2048
  }
};

export interface MentorTurn {
  role: 'user' | 'model';
  text: string;
}

export interface MentorResponsePayload {
  text: string;
  scriptures: string[];
}

interface NKJVCounselEntry {
  id: string;
  keywords: string[];
  scriptures: string[];
  conversationalCounsel: string;
}

const NKJV_COUNSEL_BANK: NKJVCounselEntry[] = [
  {
    id: 'work_stewardship',
    keywords: ['work', 'career', 'job', 'busy', 'balance', 'discipline', 'schedule', 'burnout', 'exhausted', 'profession'],
    scriptures: ['Colossians 3:23–24', 'Daniel 6:3'],
    conversationalCounsel: `When your schedule is pulling you in ten directions at once, it is easy to start feeling like your job is competing with your walk with God. But look at how Daniel lived in Babylon—he carried heavy executive responsibility, yet three times a day he still knelt before his open window toward Jerusalem.

Paul reminds us in **Colossians 3:23–24 (NKJV)**: *"And whatever you do, do it heartily, as to the Lord and not to men, knowing that from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ."* Your desk or jobsite becomes an altar when you work unto Jesus rather than human applause.

Before you check a single notification tomorrow morning, give the Lord the first fifteen minutes in the Word, and set a hard evening hour where work stops so your spirit can rest. What is one boundary you can put in place tonight to protect your quiet time tomorrow?`
  },
  {
    id: 'purity_dating',
    keywords: ['dating', 'purity', 'relationship', 'marriage', 'spouse', 'single', 'lust', 'sexual', 'courtship', 'partner'],
    scriptures: ['1 Thessalonians 4:3–4', '2 Corinthians 6:14'],
    conversationalCounsel: `The pressure around relationships and purity is real, and you don't have to fight that battle in the dark. God isn't withholding good from you when He calls you to holiness—He is protecting your future, your peace, and your covenant destiny.

Listen to the clarity of **1 Thessalonians 4:3–4 (NKJV)**: *"For this is the will of God, your sanctification: that you should abstain from sexual immorality; that each of you should know how to possess his own vessel in sanctification and honor."* And in **2 Corinthians 6:14 (NKJV)**, Scripture warns us directly: *"Do not be unequally yoked together with unbelievers."*

Don't rely on willpower in the moment—decide your boundaries on time, environment, and digital habits ahead of time, and bring a trusted brother or sister into honest accountability today. Where do you feel your guard is most tested right now?`
  },
  {
    id: 'calling_gifts',
    keywords: ['calling', 'gift', 'purpose', 'ministry', 'serve', 'talent', 'destiny', 'youngfire', 'vision', 'direction'],
    scriptures: ['1 Peter 4:10', 'Romans 12:4–6'],
    conversationalCounsel: `Wait on the Lord when you feel pressure to have your whole ten-year blueprint figured out at once. In Scripture, God rarely shows the entire map up front—David was anointed while tending sheep, and Elisha was called while plowing a field. Faithfulness right where your feet are is what unlocks the next assignment.

Peter puts it plainly in **1 Peter 4:10 (NKJV)**: *"As each one has received a gift, minister it to one another, as good stewards of the manifold grace of God."* Your spiritual gifts aren't a stage for self-promotion; they are tools to build up the Body of Christ.

Step into one tangible need in the fellowship this week—whether intercession, encouraging a younger believer, or serving behind the scenes—and ask two mature disciples what spiritual fruit they see in your life. What burden keeps stirring in your heart when you pray?`
  },
  {
    id: 'anxiety_peace',
    keywords: ['anxious', 'anxiety', 'worry', 'fear', 'future', 'overwhelmed', 'panic', 'stress', 'uncertain', 'afraid'],
    scriptures: ['Philippians 4:6–7', '2 Timothy 1:7'],
    conversationalCounsel: `Take a slow breath—you aren't carrying the weight of your future alone. When your mind is racing through worst-case scenarios, silent worry will drain your strength, but vocal prayer shifts the burden onto the shoulders of the One who actually rules tomorrow.

Hold fast to **Philippians 4:6–7 (NKJV)**: *"Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus."* Remember also **2 Timothy 1:7 (NKJV)**: *"For God has not given us a spirit of fear, but of power and of love and of a sound mind."*

Write down the exact things weighing on you right now, pray over each one out loud with thanksgiving for what God has already done, and leave them at His feet. Which specific worry do you need to hand over to the Father first today?`
  },
  {
    id: 'warfare_temptation',
    keywords: ['warfare', 'temptation', 'sin', 'struggle', 'devil', 'enemy', 'attack', 'flesh', 'habit', 'addiction'],
    scriptures: ['1 Corinthians 10:13', 'James 4:7'],
    conversationalCounsel: `The fact that you are wrestling and refusing to make peace with that struggle shows the Holy Spirit is actively convicting and fighting for you. The enemy wants you convinced that you're trapped, but that is a lie—every single temptation has an exit door engineered by God Himself.

Stand on **1 Corinthians 10:13 (NKJV)**: *"No temptation has overtaken you except such as is common to man; but God is faithful, who will not allow you to be tempted beyond what you are able, but with the temptation will also make the way of escape, that you may be able to bear it."* And **James 4:7 (NKJV)** gives us the battle order: *"Therefore submit to God. Resist the devil and he will flee from you."*

Cut off the immediate trigger or access point feeding that habit today, and bring it into the light with a trusted brother or sister in the fellowship so shame loses its grip. What is the first practical gate you can shut today?`
  },
  {
    id: 'loneliness_fellowship',
    keywords: ['alone', 'lonely', 'isolated', 'friends', 'brotherhood', 'sisterhood', 'community', 'fellowship', 'belong'],
    scriptures: ['Hebrews 10:24–25', 'Proverbs 27:17'],
    conversationalCounsel: `Walking through a season where you feel isolated can make every spiritual battle feel twice as heavy. Even Elijah hit a moment in the wilderness where he thought he was the only one left—until God reminded him he was part of a covenant family. You were never designed to walk out your faith solo.

Look at **Hebrews 10:24–25 (NKJV)**: *"And let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together, as is the manner of some, but exhorting one another, and so much the more as you see the Day approaching."* As **Proverbs 27:17 (NKJV)** says, *"As iron sharpens iron, so a man sharpens the countenance of his friend."*

Send a message to one person in the YoungFire family today just to check on them and pray together, and make plans to be at the next gathering in person. Who is one brother or sister you can reach out to this afternoon?`
  },
  {
    id: 'forgiveness_bitterness',
    keywords: ['forgive', 'forgiveness', 'bitter', 'anger', 'offense', 'hurt', 'resentment', 'betrayal', 'grudge'],
    scriptures: ['Ephesians 4:31–32', 'Colossians 3:13'],
    conversationalCounsel: `Deep betrayal or offense hurts, and pretending it didn't happen isn't biblical forgiveness. True forgiveness isn't saying what they did was harmless—it is handing the gavel over to God, the righteous Judge, so bitterness doesn't poison your own soul.

Paul writes in **Ephesians 4:31–32 (NKJV)**: *"Let all bitterness, wrath, anger, clamor, and evil speaking be put away from you, with all malice. And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you."*

Speak that person's name before the Lord in prayer today, verbally release them from your courtroom into God's hands, and ask the Father to heal the wound in your own heart. Are you willing to pray that release aloud before Him right now?`
  },
  {
    id: 'doubt_faith',
    keywords: ['doubt', 'unbelief', 'dry', 'distant', 'feel', 'silence', 'waiting', 'patience', 'trust', 'faith'],
    scriptures: ['Romans 10:17', 'Hebrews 11:1'],
    conversationalCounsel: `Even the strongest believers walk through valleys where God feels quiet and emotions run dry. Read the Psalms and you'll hear David asking, "How long, O Lord?" Faith isn't pretending you feel goosebumps every day; it is anchoring yourself to God's unchanging character when your feelings fluctuate.

Scripture tells us in **Romans 10:17 (NKJV)**: *"So then faith comes by hearing, and hearing by the word of God."* And **Hebrews 11:1 (NKJV)** reminds us: *"Now faith is the substance of things hoped for, the evidence of things not seen."*

Open one chapter of the Gospels today and read it out loud so your own ears hear the words of Jesus, then write down three moments in your past where God came through for you. What is one promise of God you can stand on today regardless of how the season feels?`
  },
  {
    id: 'prayer_intercession',
    keywords: ['pray', 'prayer', 'fasting', 'fast', 'intercession', 'seek', 'devotion', 'quiet time'],
    scriptures: ['Matthew 6:6', '1 John 5:14–15'],
    conversationalCounsel: `When your prayer life feels routine or distracted, don't overcomplicate it with lofty language—the Father desires your honest heart in the secret place. Every public victory in the Kingdom is born in private consecration where nobody else is watching.

Jesus promised in **Matthew 6:6 (NKJV)**: *"But you, when you pray, go into your room, and when you have shut your door, pray to your Father who is in the secret place; and your Father who sees in secret will reward you openly."* And **1 John 5:14 (NKJV)** assures us: *"Now this is the confidence that we have in Him, that if we ask anything according to His will, He hears us."*

Set your phone in another room for fifteen minutes today, open the Psalms in the NKJV, and turn each verse directly into a personal prayer back to God. Which Psalm or passage will you start with today?`
  },
  {
    id: 'identity_christ',
    keywords: ['identity', 'worth', 'shame', 'guilt', 'condemnation', 'past', 'failure', 'inadequate', 'new creation'],
    scriptures: ['2 Corinthians 5:17', 'Romans 8:1'],
    conversationalCounsel: `Don't let the enemy keep replaying a highlight reel of sins and mistakes that the blood of Jesus has already paid for in full. Conviction from the Holy Spirit always draws you forward toward repentance and life; condemnation from the accuser tries to chain you to who you used to be.

Declare the truth of **2 Corinthians 5:17 (NKJV)** over your life: *"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new."* And anchor your mind in **Romans 8:1 (NKJV)**: *"There is therefore now no condemnation to those who are in Christ Jesus, who do not walk according to the flesh, but according to the Spirit."*

Every time an accusing thought surfaces today, answer it out loud with Romans 8:1 and walk with your head lifted as a redeemed son or daughter of the King. What old label do you need to leave at the cross today?`
  },
  {
    id: 'wisdom_decisions',
    keywords: ['decision', 'choice', 'wisdom', 'discernment', 'guidance', 'path', 'move', 'next step', 'proverbs'],
    scriptures: ['James 1:5', 'Proverbs 3:5–6'],
    conversationalCounsel: `Standing at a crossroads can feel heavy when you sincerely want to honor God and not make a misstep. The good news is that our Father doesn't play hide-and-seek with His will for sons and daughters who genuinely want to obey Him.

Claim the promise of **James 1:5 (NKJV)**: *"If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him."* Pair that with **Proverbs 3:5–6 (NKJV)**: *"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths."*

Measure each option in front of you against the clear commands of Scripture, and invite counsel from spiritually mature leaders before you lock in your choice. Which option brings the deepest peace of the Holy Spirit when you pray over it?`
  },
  {
    id: 'endurance_trials',
    keywords: ['trial', 'suffering', 'hardship', 'pain', 'grief', 'loss', 'storm', 'perseverance', 'weary'],
    scriptures: ['James 1:2–4', 'Galatians 6:9'],
    conversationalCounsel: `I know this season has been heavy, and it's okay to admit when the road feels long. Walking through fire is never a sign that God has abandoned you—in Scripture, the furnace is the exact place where the fourth Man shows up and burns away everything except unshakeable faith.

Let **James 1:2–4 (NKJV)** steady your heart: *"My brethren, count it all joy when you fall into various trials, knowing that the testing of your faith produces patience. But let patience have its perfect work, that you may be perfect and complete, lacking nothing."* And hold onto **Galatians 6:9 (NKJV)**: *"And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart."*

Refuse to let the storm silence your worship today—put on a worship track or read a Psalm aloud, and let us stand with you in prayer. How can we specifically intercede for your strength this week?`
  }
];

export async function generateDiscipleshipCounsel(
  prompt: string,
  history: MentorTurn[] = []
): Promise<MentorResponsePayload> {
  // 1. Attempt server-side Gemini endpoint with gemini-2.5-pro, thinkingBudget: 2048, and NKJV deep reflection instructions
  try {
    const res = await fetch('/api/counselor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: YOUNGFIRE_MENTOR_MODEL,
        prompt,
        history,
        systemInstruction: YOUNGFIRE_MENTOR_SYSTEM_PROMPT,
        generationConfig: {
          temperature: YOUNGFIRE_MENTOR_GENERATION_CONFIG.temperature,
          topP: YOUNGFIRE_MENTOR_GENERATION_CONFIG.topP,
          presencePenalty: YOUNGFIRE_MENTOR_GENERATION_CONFIG.presencePenalty,
          frequencyPenalty: YOUNGFIRE_MENTOR_GENERATION_CONFIG.frequencyPenalty,
          thinkingConfig: {
            thinkingBudget: 2048
          }
        },
        config: YOUNGFIRE_MENTOR_GENERATION_CONFIG
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data?.response && typeof data.response === 'string') {
        const matches: string[] =
          data.response.match(/([1-3]?\s?[A-Za-z]+\s+\d+:\d+(?:[–-]\d+)?)/g) || ['2 Timothy 3:16–17'];
        return {
          text: data.response.trim(),
          scriptures: Array.from(new Set<string>(matches.map((s: string) => s.trim()))).slice(0, 3)
        };
      }
    }
  } catch {
    // Proceed to conversational NKJV grounded counsel engine when offline or in static preview
  }

  // 2. Conversational NKJV-Grounded Counsel with Anti-Repetition Turn Tracking
  const qLower = prompt.toLowerCase();
  const recentAssistantTexts = history
    .filter((h) => h.role === 'model')
    .map((h) => h.text);

  const scored = NKJV_COUNSEL_BANK.map((entry, idx) => {
    let score = 0;
    for (const kw of entry.keywords) {
      if (qLower.includes(kw)) {
        score += 10;
      }
    }
    const alreadyUsed = recentAssistantTexts.some(
      (prev) =>
        prev.includes(entry.conversationalCounsel.slice(0, 48)) ||
        entry.scriptures.some((sc) => prev.includes(sc))
    );
    if (alreadyUsed) {
      score -= 100;
    }
    return { entry, score, idx };
  });

  scored.sort((a, b) => b.score - a.score);

  let chosen = scored[0].entry;
  if (scored[0].score <= 0) {
    const unused = NKJV_COUNSEL_BANK.filter(
      (e) => !recentAssistantTexts.some((prev) => e.scriptures.some((sc) => prev.includes(sc)))
    );
    const pool = unused.length > 0 ? unused : NKJV_COUNSEL_BANK;
    const hash = Array.from(prompt).reduce((acc, ch) => acc + ch.charCodeAt(0), history.length * 19);
    chosen = pool[hash % pool.length];
  }

  return {
    text: chosen.conversationalCounsel,
    scriptures: chosen.scriptures
  };
}
