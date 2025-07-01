import { Button } from '@/components/button';
import './globals.css';
import { Geist } from 'next/font/google';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function NotFound() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} antialiased h-full`}>
        <div className="flex items-center justify-center flex-col h-full">
          <h1 className="text-3xl font-bold">404</h1>
          <p className="mb-4">Page Not Found</p>
          <Link href="/">
            <Button>Go to Homepage</Button>
          </Link>
        </div>
      </body>
    </html>
  );
}
