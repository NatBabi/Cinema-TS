import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const TicketIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z" />
    <path d="M13 7v2M13 13v2" />
  </svg>
);

export const SeatIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
    <path d="M4 11h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" />
    <path d="M7 17v3M17 17v3" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const CardIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </svg>
);

export const ChartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 14v3M12 10v7M16 6v11" />
  </svg>
);

export const QrIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <path d="M14 14h3v3M20 14v6M14 20h3" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 2.5 5.3 5.5.8-4 4 1 5.7L12 21l-5 2.6 1-5.7-4-4 5.5-.8L12 3Z" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const PopcornIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 9h12l-1.2 11.2a1 1 0 0 1-1 .8H8.2a1 1 0 0 1-1-.8L6 9Z" />
    <path d="M6 9a2 2 0 0 1 .3-3.8A2.2 2.2 0 0 1 10 4a2.2 2.2 0 0 1 4 0 2.2 2.2 0 0 1 3.7 1.2A2 2 0 0 1 18 9" />
    <path d="M10 9v11M14 9v11" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const FilmIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
  </svg>
);
