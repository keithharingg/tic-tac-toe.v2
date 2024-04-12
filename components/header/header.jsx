import React from 'react';
import Image from 'next/image';
import logoSrc from './logo.svg';

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="Logo" />
      <div className="w-px h-8 bg-slate-300 mx-6" />
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2">Play</button>
    </header>
  );
}
