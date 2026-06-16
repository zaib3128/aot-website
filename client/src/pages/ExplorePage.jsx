import { useState } from 'react'
import './ExplorePage.css'

const characters = [
  {
    id      : 'eren',
    name    : 'Eren Yeager',
    title   : 'The Founding Titan',
    color   : '#8B2020',
    glow    : 'rgba(139,32,32,0.4)',
    role    : 'Attack Titan · Founding Titan · War Hammer Titan',
    intro   : 'Born with hatred in his heart and freedom in his eyes. He became the very monster he swore to destroy — and chose it willingly.',
    quotes  : [
      {
        text : 'If you win, you live. If you lose, you die. If you don\'t fight, you can\'t win.',
        ctx  : 'To himself, before his first battle as a soldier.',
      },
      {
        text : 'I am free.',
        ctx  : 'Eren\'s final declaration — the simplest and most devastating words he ever spoke.',
      },
      {
        text : 'I\'ve always hated this world. I want to destroy it.',
        ctx  : 'To Reiner, after years of planning in the shadows of Marley.',
      },
      {
        text : 'The world is cruel. And it\'s also very beautiful.',
        ctx  : 'To Mikasa, on the day everything changed.',
      },
      {
        text : 'I don\'t have time to worry if it\'s right or wrong. You can\'t just sit there and wait for someone who suits your needs perfectly.',
        ctx  : 'Pushing himself to act when others hesitate.',
      },
    ],
  },
  {
    id      : 'levi',
    name    : 'Levi Ackerman',
    title   : "Humanity's Strongest",
    color   : '#2A4A7A',
    glow    : 'rgba(42,74,122,0.4)',
    role    : 'Captain · Scout Regiment · Ackerman Clan',
    intro   : 'Cold. Precise. Devastating. He grew up in darkness and chose to dedicate every drop of his strength to something worth dying for.',
    quotes  : [
      {
        text : 'The only thing we\'re allowed to do is believe that we won\'t regret the choice we made.',
        ctx  : 'To Eren, before the mission to retake Wall Maria.',
      },
      {
        text : 'No matter what happens, you don\'t have to feel guilty about it. Make a choice you won\'t regret.',
        ctx  : 'Giving Eren the freedom to decide — even if it costs everything.',
      },
      {
        text : 'I don\'t know which option you should choose. I could never advise you on that. No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it\'s right or wrong until you see the outcome.',
        ctx  : 'The wisdom of a man who has lived with impossible decisions.',
      },
      {
        text : 'Even if I can\'t see it, even if it\'s just a little — I have to believe.',
        ctx  : 'Charging into Zeke\'s barrage knowing most of them would die.',
      },
      {
        text : 'Tch. Don\'t you know that the weak have no rights or choices?',
        ctx  : 'A brutal truth learned from a life underground.',
      },
    ],
  },
  {
    id      : 'erwin',
    name    : 'Erwin Smith',
    title   : 'Commander of the Survey Corps',
    color   : '#4A6741',
    glow    : 'rgba(74,103,65,0.4)',
    role    : 'Commander · Survey Corps · The Gambling General',
    intro   : 'He sent thousands to their deaths with a smile and tears in his eyes. Every gamble he made was his own life bet against the truth of the world.',
    quotes  : [
      {
        text : 'Give up on your dreams and die.',
        ctx  : 'To Eren. The most brutal and honest motivational speech in the series.',
      },
      {
        text : 'We are all living sacrifices, covered in blood.',
        ctx  : 'Acknowledging what it truly means to be in the Survey Corps.',
      },
      {
        text : 'That day, all female Survey Corps members will be required to wear vertical maneuvering gear... on their heads.',
        ctx  : 'During his infamous recruitment speech — the pivot that changed everything.',
      },
      {
        text : 'The only thing I wanted was to see the world my father described to me. Was that wish truly so wrong?',
        ctx  : 'His dying thought. The dream he sacrificed everything to reach.',
      },
      {
        text : 'Our lives are so cheap. We are soldiers whose lives are worth less than a single horse. But our dreams and desires are not. They cannot be taken so easily.',
        ctx  : 'Before the charge at Shiganshina. His last words to the Survey Corps.',
      },
    ],
  },
  {
    id      : 'mikasa',
    name    : 'Mikasa Ackerman',
    title   : 'The Last Azumabito',
    color   : '#6B2A5A',
    glow    : 'rgba(107,42,90,0.4)',
    role    : 'Scout Regiment · Ackerman Clan · The One Who Stayed',
    intro   : 'She was the most powerful soldier alive. She could have been anything. She chose to stay beside him — until the very end, when staying meant ending him.',
    quotes  : [
      {
        text : 'I\'ve always hated you. Since that first day. But... thank you for wrapping this scarf around me.',
        ctx  : 'Her last words to Eren, holding his severed head. The most devastating line in the series.',
      },
      {
        text : 'This world is merciless, and it\'s also very beautiful.',
        ctx  : 'Words Eren gave her. Words she carried for the rest of her life.',
      },
      {
        text : 'He told me to fight... and I did. I kept fighting.',
        ctx  : 'The simple truth of who Mikasa became, and why.',
      },
      {
        text : 'I don\'t want to lose what little family I have left.',
        ctx  : 'To Armin. The weight of everyone she has already buried.',
      },
      {
        text : 'Whenever I\'m in trouble, you always come to save me. Always.',
        ctx  : 'What she believed, until she was the one who had to come for him.',
      },
    ],
  },
]

const twists = [
  {
    number  : '01',
    title   : 'The Basement',
    reveal  : 'Grisha\'s basement didn\'t just hold secrets about the Titans — it revealed that humanity outside the walls still existed, that Eldians had been enslaved for generations, and that everything the people inside the walls believed was a fabricated lie.',
    impact  : 'The entire premise of the show shifted. The enemy wasn\'t the Titans. It was the world.',
    color   : '#8B2020',
  },
  {
    number  : '02',
    title   : 'Reiner and Bertholdt',
    reveal  : '"I\'m the Armored Titan. Bertholdt is the Colossal Titan." Said casually, mid-sentence, on a rooftop — as if confessing to a minor inconvenience. Two of the most wanted criminals in humanity\'s history had been sitting in their squad for years.',
    impact  : 'Every scene with them was instantly recontextualized. Every smile, every friendship — a performance.',
    color   : '#2A4A7A',
  },
  {
    number  : '03',
    title   : 'The Founding Titan\'s Limitation',
    reveal  : 'The Founding Titan\'s true power is unlimited — but a royal vow made 2,000 years ago chains it. Only a royal-blooded holder can use it freely. Eren, despite holding it, is powerless — unless he touches a royal.',
    impact  : 'Historia\'s bloodline became the most critical factor in the entire war.',
    color   : '#4A6741',
  },
  {
    number  : '04',
    title   : 'Eren Sees the Future',
    reveal  : 'The Attack Titan can inherit the memories of future holders. Eren saw the Rumbling the moment he touched Historia\'s hand at the medal ceremony. Every choice he made after that — every cruelty, every distance — was preordained.',
    impact  : 'Eren wasn\'t becoming a monster. He was completing a loop he couldn\'t escape.',
    color   : '#6B2A5A',
  },
  {
    number  : '05',
    title   : 'Ymir Fritz and the Devil',
    reveal  : 'The origin of all Titans traces back to a girl named Ymir Fritz who made a deal with a mysterious entity in a primordial realm. For 2,000 years — even after her death — she continued to build Titan bodies in that realm, enslaved by her devotion.',
    impact  : 'Mikasa killing Eren freed Ymir from her obsession. The Titans vanished because love, finally, let go.',
    color   : '#5A3A6A',
  },
  {
    number  : '06',
    title   : 'Grisha\'s Memory — He Knew',
    reveal  : 'When Eren showed Grisha the memories of the future, Grisha saw his own son becoming the monster that would end the world. He cried. He begged the Reiss family to forgive him. Then he killed them anyway — because Eren showed him that he would.',
    impact  : 'A father murdered a family because his son from the future left him no other choice.',
    color   : '#4A3A2A',
  },
]

export default function ExplorePage() {
  const [activeChar,  setActiveChar]  = useState('eren')
  const [activeQuote, setActiveQuote] = useState(0)
  const [activeTwist, setActiveTwist] = useState(null)

  const char = characters.find(c => c.id === activeChar)

  return (
    <div className="exp-page">

      {/* ── HERO ──────────────────────────────────── */}
      <div className="exp-hero">
        <div className="exp-hero__grain" />
        <div className="exp-hero__content">
          <span className="exp-hero__eyebrow">Words that changed everything</span>
          <h1 className="exp-hero__title">
            Their Words.<br />
            <em>Your Chills.</em>
          </h1>
          <p className="exp-hero__sub">
            The quotes, the loves, the losses, and the twists that made
            Attack on Titan the greatest story ever told.
          </p>
        </div>
        <div className="exp-hero__scroll"><span /></div>
      </div>

      {/* ── CHARACTER QUOTES ──────────────────────── */}
      <div className="exp-quotes-section">

        {/* Character selector */}
        <div className="exp-char-tabs">
          {characters.map(c => (
            <button
              key={c.id}
              className={`exp-char-tab ${activeChar === c.id ? 'exp-char-tab--active' : ''}`}
              style={{ '--c-color': c.color }}
              onClick={() => { setActiveChar(c.id); setActiveQuote(0) }}
            >
              <span className="exp-char-tab__name">{c.name.split(' ')[0]}</span>
              <span className="exp-char-tab__title">{c.title}</span>
            </button>
          ))}
        </div>

        {/* Character panel */}
        <div className="exp-char-panel" style={{ '--c-color': char.color, '--c-glow': char.glow }}>

          {/* Left — character info */}
          <div className="exp-char-info">
            <span className="exp-char-role">{char.role}</span>
            <h2 className="exp-char-name">{char.name}</h2>
            <p className="exp-char-intro">{char.intro}</p>

            {/* Quote navigation dots */}
            <div className="exp-quote-dots">
              {char.quotes.map((_, i) => (
                <button
                  key={i}
                  className={`exp-quote-dot ${activeQuote === i ? 'exp-quote-dot--active' : ''}`}
                  onClick={() => setActiveQuote(i)}
                />
              ))}
            </div>
          </div>

          {/* Right — active quote */}
          <div className="exp-quote-display">
            <div className="exp-quote-mark">"</div>
            <blockquote className="exp-quote-text" key={`${activeChar}-${activeQuote}`}>
              {char.quotes[activeQuote].text}
            </blockquote>
            <p className="exp-quote-ctx">
              — {char.quotes[activeQuote].ctx}
            </p>

            {/* Prev / Next */}
            <div className="exp-quote-nav">
              <button
                className="exp-quote-btn"
                onClick={() => setActiveQuote(p => Math.max(0, p - 1))}
                disabled={activeQuote === 0}
              >
                ← Prev
              </button>
              <span className="exp-quote-counter">
                {activeQuote + 1} / {char.quotes.length}
              </span>
              <button
                className="exp-quote-btn"
                onClick={() => setActiveQuote(p => Math.min(char.quotes.length - 1, p + 1))}
                disabled={activeQuote === char.quotes.length - 1}
              >
                Next →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── MIKASA LOVE SECTION ───────────────────── */}
      <div className="exp-love">
        <div className="exp-love__grain" />
        <div className="exp-love__content">
          <span className="exp-love__eyebrow">The Love That Ended the World</span>
          <h2 className="exp-love__title">Mikasa & Eren</h2>
          <div className="exp-love__body">
            <p>
              She was nine years old when he wrapped a scarf around her and told her
              the world was beautiful and cruel. She never let go of that scarf.
              Not through the fall of Wall Maria. Not through three years of war.
              Not through the Rumbling.
            </p>
            <p>
              Eren pushed her away deliberately — calling her a slave to her Ackerman
              instincts, telling her she meant nothing. She believed him just enough
              to keep fighting. Not enough to stop loving him.
            </p>
            <p>
              In the end, she flew to him on the back of a bird above Fort Salta.
              She held his face in her hands one last time. She kissed him. She said
              goodbye. And then she killed him — because that was the only way to
              free him, and free the world.
            </p>
            <p className="exp-love__final">
              Years later, she sat at his grave with the scarf still around her neck.
              A bird landed on her. She smiled. <em>"Thank you for wrapping this scarf around me."</em>
            </p>
          </div>
        </div>
      </div>

      {/* ── PLOT TWISTS ───────────────────────────── */}
      <div className="exp-twists">
        <div className="exp-twists__header">
          <span className="exp-twists__eyebrow">Nothing was what it seemed</span>
          <h2 className="exp-twists__title">The Twists</h2>
          <p className="exp-twists__sub">
            Six revelations that rewrote everything you thought you knew.
          </p>
        </div>

        <div className="exp-twists__list">
          {twists.map((twist, i) => (
            <div
              key={i}
              className={`exp-twist ${activeTwist === i ? 'exp-twist--open' : ''}`}
              style={{ '--t-color': twist.color }}
              onClick={() => setActiveTwist(p => p === i ? null : i)}
            >
              <div className="exp-twist__top">
                <div className="exp-twist__left">
                  <span className="exp-twist__num">{twist.number}</span>
                  <h3 className="exp-twist__title">{twist.title}</h3>
                </div>
                <span className="exp-twist__chevron">
                  {activeTwist === i ? '−' : '+'}
                </span>
              </div>

              {activeTwist === i && (
                <div className="exp-twist__body">
                  <p className="exp-twist__reveal">{twist.reveal}</p>
                  <div className="exp-twist__impact">
                    <span className="exp-twist__impact-label">↳ Why it hits</span>
                    <p>{twist.impact}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── CLOSING ───────────────────────────────── */}
      <div className="exp-end">
        <div className="exp-end__line" />
        <p className="exp-end__quote">
          "Even if I am the devil incarnate, I will keep moving forward."
        </p>
        <span className="exp-end__attr">— Eren Yeager</span>
        <div className="exp-end__line" />
      </div>

    </div>
  )
}