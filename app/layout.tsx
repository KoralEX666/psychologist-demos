import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Psycholog Demo - Personalizowane Strony dla Psychologów',
  description: 'Przykładowe strony www dla gabinetów psychologicznych',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
