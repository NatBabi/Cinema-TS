import Link from 'next/link';
import {
  ArrowIcon,
  CardIcon,
  ChartIcon,
  FilmIcon,
  PopcornIcon,
  QrIcon,
  SearchIcon,
  SeatIcon,
  ShieldIcon,
  StarIcon,
  TicketIcon,
} from '@/components/icons';

const features = [
  {
    icon: SearchIcon,
    title: 'Discover what to watch',
    desc: 'Search by title, actor, or studio. Filter by genre, language, date, and rating — with trending picks and personalized recommendations.',
  },
  {
    icon: SeatIcon,
    title: 'Interactive seat maps',
    desc: 'Pick exactly where you sit with a live seating map. Choose VIP or standard, select multiple seats, and see availability in real time.',
  },
  {
    icon: QrIcon,
    title: 'Instant confirmations',
    desc: 'Every booking generates a QR code or 6-digit entry code — validated at the door in seconds, no printouts required.',
  },
  {
    icon: CardIcon,
    title: 'Secure payments',
    desc: 'Pay by card or your favorite online service. Transactions are encrypted end to end, with clear refund and cancellation policies.',
  },
  {
    icon: PopcornIcon,
    title: 'Concessions, built in',
    desc: 'Add snacks and refreshments to your order straight from an integrated menu — ready when you arrive.',
  },
  {
    icon: StarIcon,
    title: 'Rate, review & follow',
    desc: 'Build a watchlist, rate movies and theaters, and get reminders the moment a film you want becomes available.',
  },
];

const roles = [
  {
    icon: TicketIcon,
    name: 'Cinema-goers',
    desc: 'Browse, book, and manage tickets with watchlists, reviews, and a full booking history.',
  },
  {
    icon: FilmIcon,
    name: 'Movie owners',
    desc: 'Publish films, track ticket sales and audience demographics, and engage directly with fans.',
  },
  {
    icon: ChartIcon,
    name: 'Admins',
    desc: 'Manage movies, theaters, and screenings while monitoring bookings and generating sales reports.',
  },
  {
    icon: ShieldIcon,
    name: 'Managerial admins',
    desc: 'Oversee staff, enforce security and compliance, and run KPI reporting across every venue.',
  },
  {
    icon: QrIcon,
    name: 'Doormen',
    desc: 'Validate tickets at entry, manage crowd flow, and coordinate with staff in real time.',
  },
];

const stats = [
  { value: '5', label: 'Tailored role experiences' },
  { value: 'Real-time', label: 'Seat availability' },
  { value: 'QR + PIN', label: 'Ticket validation' },
  { value: 'End-to-end', label: 'Encrypted payments' },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* ── Nav ───────────────────────────────────────────── */}
      <header className="relative z-20">
        <nav className="container-page flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-gold-400 to-accent-500 text-ink-950">
              <FilmIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              Lumière
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#roles" className="transition hover:text-white">
              For everyone
            </a>
            <a href="#how" className="transition hover:text-white">
              How it works
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-slate-200 transition hover:text-white sm:inline"
            >
              Sign in
            </Link>
            <Link href="/signup" className="btn-primary !px-5 !py-2.5">
              Get started
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-radial-spotlight" />
        <div className="container-page relative grid gap-16 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gold-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Now booking — your seat awaits
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              The whole cinema,
              <span className="block bg-gradient-to-r from-gold-400 via-accent-400 to-accent-500 bg-clip-text text-transparent">
                in one ticket.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Lumière is a full-featured ticketing platform for modern
              cinemas — search films, pick your seats on a live map, pay
              securely, and walk in with a tap. Built for movie-goers, owners,
              and staff alike.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/signup" className="btn-primary">
                Book your first ticket
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href="#features" className="btn-ghost">
                Explore features
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-slate-400">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Decorative ticket / seat-map mock */}
          <div className="relative hidden lg:block">
            <div className="animate-float">
              <SeatMapMock />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section id="features" className="relative border-t border-white/5 py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Everything you need"
            title="From search to seat, beautifully simple"
            subtitle="A single platform that handles discovery, booking, payments, and entry — without the friction."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="card group">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-500/20 to-gold-500/20 text-gold-400">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roles ─────────────────────────────────────────── */}
      <section id="roles" className="relative py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="One platform, every role"
            title="Built for everyone in the theater"
            subtitle="Lumière adapts to who you are — with purpose-built tools for each part of the cinema."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <article
                key={r.name}
                className="card flex flex-col gap-4 sm:flex-row sm:items-start"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent-400">
                  <r.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {r.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {r.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section id="how" className="relative border-t border-white/5 py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps to your seat"
          />
          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              {
                n: '01',
                t: 'Find a film',
                d: 'Search and filter the catalog, or follow trending picks and recommendations.',
              },
              {
                n: '02',
                t: 'Pick your seats',
                d: 'Choose a showtime and tap your spots on the live, interactive seat map.',
              },
              {
                n: '03',
                t: 'Pay securely',
                d: 'Add concessions, then check out by card or online payment in a few taps.',
              },
              {
                n: '04',
                t: 'Walk right in',
                d: 'Show your QR or 6-digit code at the door — the doorman validates instantly.',
              },
            ].map((step) => (
              <li key={step.n} className="relative">
                <span className="font-display text-4xl font-bold text-white/10">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-spotlight" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your next night at the movies starts here
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Create a free account and book your first screening in minutes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/signup" className="btn-primary">
                  Create your account
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link href="/movies" className="btn-ghost">
                  Browse showtimes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12">
        <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-gold-400 to-accent-500 text-ink-950">
              <FilmIcon className="h-4 w-4" />
            </span>
            <span className="font-display font-semibold text-white">
              Lumière
            </span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 Lumière Cinema Ticketing System. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <Link href="/login" className="transition hover:text-white">
              Sign in
            </Link>
            <a
              href="https://github.com/NatBabi/Cinema-TS"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ── Helpers ─────────────────────────────────────────────── */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SeatMapMock() {
  // 6 rows x 8 seats — a few "taken" and a VIP block, purely decorative.
  const taken = new Set([3, 4, 11, 19, 27, 35, 36]);
  const vip = new Set([20, 21, 22, 23]);
  const selected = new Set([28, 29]);

  return (
    <div className="rounded-3xl border border-white/10 bg-ink-800/60 p-7 shadow-[0_30px_80px_-20px_rgba(124,58,237,0.4)] backdrop-blur">
      <div className="mx-auto mb-6 h-1.5 w-3/4 rounded-full bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.3em] text-slate-500">
        Screen
      </p>
      <div className="grid grid-cols-8 gap-2">
        {Array.from({ length: 48 }).map((_, i) => {
          let cls = 'bg-white/10';
          if (taken.has(i)) cls = 'bg-white/5 opacity-40';
          else if (selected.has(i)) cls = 'bg-gold-400 shadow-[0_0_12px_rgba(245,196,81,0.7)]';
          else if (vip.has(i)) cls = 'bg-accent-500/70';
          return (
            <span
              key={i}
              className={`aspect-square rounded-md ${cls} transition`}
            />
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-5 text-[11px] text-slate-400">
        <Legend className="bg-white/10" label="Available" />
        <Legend className="bg-accent-500/70" label="VIP" />
        <Legend className="bg-gold-400" label="Selected" />
        <Legend className="bg-white/5 opacity-40" label="Taken" />
      </div>
    </div>
  );
}

function Legend({ className, label }: { className: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-3 w-3 rounded-sm ${className}`} />
      {label}
    </span>
  );
}
