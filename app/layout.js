
'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  const [navbarPosition, setNavbarPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setNavbarPosition((prev) => Math.max(prev - 10, -100));
      } else if (e.key === 'ArrowRight') {
        setNavbarPosition((prev) => Math.min(prev + 10, 100));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar position={navbarPosition} />
        <main className="min-h-screen pt-16"> {/* Add padding-top to account for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}