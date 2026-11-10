import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PIXII SCOOTER AI — Soutenance PFE',
  description: 'Présentation dynamique de soutenance PFE - Système IA pour trottinettes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#020B18] text-[#001027] antialiased">
        {children}
      </body>
    </html>
  );
}
