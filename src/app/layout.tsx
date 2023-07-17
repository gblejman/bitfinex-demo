import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Main } from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitfinex Demo',
  description: 'Bitfinex api demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
