import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/ui/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Chakron Yuraket | Software Engineer',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="relative bg-slate-50 text-slate-800 antialiased selection:bg-indigo-200 selection:text-indigo-900 min-h-screen flex flex-col">
        
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <Navbar />

        <main className="max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-8 flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}