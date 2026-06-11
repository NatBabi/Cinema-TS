import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumière — Cinema Ticketing, Reimagined',
  description:
    'Search, book, and manage movie tickets seamlessly. A multi-role cinema platform with real-time seating, secure payments, and powerful analytics.',
  keywords: [
    'cinema',
    'movie tickets',
    'booking',
    'showtimes',
    'theater',
    'ticketing',
  ],
  openGraph: {
    title: 'Lumière — Cinema Ticketing, Reimagined',
    description:
      'Real-time seating, secure payments, and analytics for cinema-goers, owners, and staff.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="grain min-h-screen">{children}</body>
    </html>
  );
}
