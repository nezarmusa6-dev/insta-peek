import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, Video, Trophy, Swords, Clock, Users, Check, Play } from "lucide-react";

const TITLE = "Round 2 Jo — MMA, Muay Thai & Boxing in Amman";
const DESC = "Train with Round 2's fight coaches. MMA, Muay Thai and Boxing classes, MatCam session replays and in-house tournaments.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;800&display=swap" },
    ],
  }),
  component: Landing,
});

const sessions = [
  { name: "MMA", time: "Sun–Thu · 7:00 PM", desc: "Striking, wrestling and ground game combined into full fight sparring." },
  { name: "Muay Thai", time: "Sat–Wed · 6:00 PM", desc: "Art of eight limbs: clinch, elbows, knees and pad rounds." },
  { name: "Boxing", time: "Daily · 5:00 PM", desc: "Footwork, head movement and combinations on bags and mitts." },
  { name: "Gym / S&C", time: "Open 8 AM – 11 PM", desc: "Conditioning built for fighters: power, cardio, recovery." },
];

const plans = [
  { name: "Single Discipline", price: "45", note: "1 program · 12 sessions/mo", perks: ["One combat program", "MatCam replays", "Open gym access"] },
  { name: "Fighter", price: "70", note: "All programs · unlimited", perks: ["MMA, Muay Thai & Boxing", "MatCam replays + clips", "Tournament entry priority", "Open gym access"], hot: true },
  { name: "Private 1-on-1", price: "25", note: "per session", perks: ["Pick your coach", "Recorded on MatCam", "Personal fight plan"] },
];

const coaches = [
  { name: "Head Coach", role: "MMA · Founder", tag: "HC" },
  { name: "Muay Thai Coach", role: "Kru · Clinch specialist", tag: "MT" },
  { name: "Boxing Coach", role: "Pro record · Footwork", tag: "BX" },
  { name: "Grappling Coach", role: "BJJ · Wrestling", tag: "GR" },
];

function Landing() {
  const [view, setView] = useState<"home" | "tournaments">("home");
  const navItems = [
    { id: "sessions", label: "Sessions" },
    { id: "coaches", label: "Coaches" },
    { id: "pricing", label: "Pricing" },
    { id: "matcam", label: "MatCam" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => setView("home")} className="font-display text-3xl">ROUND<span className="text-primary">2</span></button>
          <nav className="hidden items-center gap-6 text-sm font-semibold uppercase md:flex">
            {navItems.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setView("home")} className="hover:text-primary">{s.label}</a>
            ))}
            <button onClick={() => setView("tournaments")} className={view === "tournaments" ? "text-primary" : "hover:text-primary"}>Tournaments</button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="border border-border px-4 py-2 text-sm font-bold uppercase hover:border-primary">Log in</button>
            <a href="#pricing" onClick={() => setView("home")} className="bg-primary px-4 py-2 text-sm font-bold uppercase text-primary-foreground">Join</a>
          </div>
        </div>
      </header>

      {view === "home" && (
      <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-4 inline-block border border-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">Amman · Fight Club</p>
            <h1 className="font-display text-7xl leading-[0.9] md:text-9xl">Every fight<br />has a <span className="text-primary">Round 2.</span></h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">MMA, Muay Thai and Boxing coached by fighters. Every session filmed so you can rewatch, fix and come back harder.</p>
            <div className="mt-8 flex gap-3">
              <a href="#pricing" className="bg-primary px-6 py-3 font-bold uppercase text-primary-foreground">Start training</a>
              <a href="#sessions" className="border border-border px-6 py-3 font-bold uppercase hover:border-primary">View classes</a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="font-display select-none text-[16rem] leading-none text-primary/15 md:text-[22rem]">R2</div>
            <div className="absolute bottom-6 left-0 right-0 grid grid-cols-3 gap-px bg-border">
              {[["4", "Disciplines"], ["12+", "Classes / wk"], ["100%", "Filmed"]].map(([n, l]) => (
                <div key={l} className="bg-card p-4 text-center"><div className="font-display text-4xl text-accent">{n}</div><div className="text-xs uppercase text-muted-foreground">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="tape h-3" />
      </section>

      <Section id="sessions" kicker="Round 1" title="Sessions">
        <div className="grid gap-px bg-border md:grid-cols-4">
          {sessions.map((s) => (
            <div key={s.name} className="group bg-card p-6 transition hover:bg-muted">
              <Swords className="size-6 text-primary" />
              <h3 className="font-display mt-4 text-4xl">{s.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs font-semibold uppercase text-accent"><Clock className="size-3" />{s.time}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="coaches" kicker="Your corner" title="The Coaches">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {coaches.map((c) => (
            <div key={c.tag} className="border border-border bg-card">
              <div className="flex aspect-[3/4] items-end bg-gradient-to-t from-primary/40 to-muted p-4">
                <span className="font-display text-8xl text-foreground/20">{c.tag}</span>
              </div>
              <div className="p-4"><h3 className="font-display text-3xl">{c.name}</h3><p className="text-sm text-muted-foreground">{c.role}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="pricing" kicker="Weigh-in" title="Pricing">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative border p-8 ${p.hot ? "border-primary bg-card" : "border-border"}`}>
              {p.hot && <span className="absolute -top-3 left-8 bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">Main event</span>}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1"><span className="font-display text-7xl">{p.price}</span><span className="mb-3 text-muted-foreground">JOD</span></div>
              <p className="text-sm text-muted-foreground">{p.note}</p>
              <ul className="mt-6 space-y-2 text-sm">{p.perks.map((x) => <li key={x} className="flex gap-2"><Check className="size-4 text-primary" />{x}</li>)}</ul>
              <a href="#" className={`mt-8 block py-3 text-center font-bold uppercase ${p.hot ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary"}`}>Choose</a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="matcam" kicker="Tape study" title="MatCam">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-video border border-border bg-card">
            <div className="absolute left-4 top-4 flex items-center gap-2 text-xs font-bold uppercase"><span className="size-2 animate-pulse rounded-full bg-primary" />REC · Mat 1</div>
            <div className="absolute right-4 top-4 font-display text-xl text-accent">RD 2 · 02:47</div>
            <div className="flex h-full items-center justify-center"><Play className="size-16 text-primary" /></div>
          </div>
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground">Cameras above the mat record every class. Your sessions land in your member dashboard so you can study your rounds like a pro.</p>
            {[
              [Camera, "Every class recorded", "Coaches start recording from the admin panel — no phones on the mat."],
              [Video, "Replays in your dashboard", "Members watch their own sessions anytime after training."],
              [Users, "Coach feedback", "Rewatch with your coach and fix mistakes before your next spar."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Camera;
              return <div key={t as string} className="flex gap-4"><I className="mt-1 size-6 shrink-0 text-primary" /><div><h4 className="font-bold uppercase">{t as string}</h4><p className="text-sm text-muted-foreground">{d as string}</p></div></div>;
            })}
          </div>
        </div>
      </Section>
      </>
      )}

      {view === "tournaments" && (
        <Section id="tournaments" kicker="Fight night" title="Tournaments">
          <TournamentMaker />
        </Section>
      )}

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <span className="font-display text-2xl text-foreground">ROUND<span className="text-primary">2</span></span>
        <p className="mt-2">Amman, Jordan · <a className="hover:text-primary" href="https://www.instagram.com/round2_jo/" target="_blank" rel="noreferrer">@round2_jo</a></p>
      </footer>
    </div>
  );
}

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="font-display mb-10 text-6xl md:text-7xl">{title}</h2>
      {children}
    </section>
  );
}

function TournamentMaker() {
  const [names, setNames] = useState("Ali\nOmar\nYazan\nSami\nKareem\nHamza\nZaid\nLaith");
  const [rounds, setRounds] = useState<string[][]>([]);
  const fighters = names.split("\n").map((n) => n.trim()).filter(Boolean);

  function build() {
    const shuffled = [...fighters].sort(() => Math.random() - 0.5);
    let size = 2;
    while (size < shuffled.length) size *= 2;
    const first = [...shuffled, ...Array(size - shuffled.length).fill("BYE")];
    const all: string[][] = [first];
    let n = size / 2;
    while (n >= 1) { all.push(Array(n).fill("TBD")); n /= 2; }
    setRounds(all);
  }

  function win(r: number, i: number) {
    const name = rounds[r]?.[i] ?? "TBD";
    if (r + 1 >= rounds.length || name === "TBD" || name === "BYE") return;
    const next = rounds.map((x) => [...x]);
    next[r + 1]![Math.floor(i / 2)] = name;
    setRounds(next);
  }

  const champ = rounds.length ? rounds[rounds.length - 1]?.[0] ?? "TBD" : "TBD";

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="border border-border bg-card p-6">
        <h3 className="font-display text-3xl">Fight card</h3>
        <p className="mb-3 text-sm text-muted-foreground">One fighter per line.</p>
        <textarea value={names} onChange={(e) => setNames(e.target.value)} rows={9} className="w-full border border-border bg-background p-3 text-sm outline-none focus:border-primary" />
        <button onClick={build} disabled={fighters.length < 2} className="mt-4 flex w-full items-center justify-center gap-2 bg-primary py-3 font-bold uppercase text-primary-foreground disabled:opacity-50">
          <Swords className="size-4" /> Make bracket ({fighters.length})
        </button>
      </div>
      <div className="overflow-x-auto border border-border bg-card p-6">
        {!rounds.length ? (
          <div className="flex h-full min-h-60 flex-col items-center justify-center text-center text-muted-foreground"><Trophy className="mb-3 size-10 text-accent" />Add fighters and hit “Make bracket”. Click a fighter to send them to the next round.</div>
        ) : (
          <div className="flex min-w-max gap-6">
            {rounds.map((round, r) => (
              <div key={r} className="flex flex-col justify-around gap-3">
                <p className="font-display text-xl text-accent">{r === rounds.length - 1 ? "Champion" : r === rounds.length - 2 ? "Final" : `Round ${r + 1}`}</p>
                {r === rounds.length - 1 ? (
                  <div className="flex items-center gap-2 border-2 border-accent px-4 py-3 font-display text-3xl"><Trophy className="size-6 text-accent" />{champ}</div>
                ) : (
                  Array.from({ length: round.length / 2 }).map((_, m) => (
                    <div key={m} className="w-40 border border-border">
                      {[0, 1].map((k) => {
                        const i = m * 2 + k;
                        const won = rounds[r + 1]?.[m] === round[i] && round[i] !== "TBD";
                        return (
                          <button key={k} onClick={() => win(r, i)} className={`block w-full px-3 py-2 text-left text-sm font-semibold ${k ? "border-t border-border" : ""} ${won ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                            <span className="mr-2 text-xs opacity-60">{k ? "BLUE" : "RED"}</span>{round[i]}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
