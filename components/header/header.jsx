import React from 'react';
import Image from 'next/image';
import logoSrc from './logo.svg';
import { Profile } from '../profile';
import { ArrowDown } from './icons/arrow-down';
import { UiButton } from '../uikit/ui-button';

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="Logo" />
      <div className="w-px h-8 bg-slate-300 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Play
      </UiButton>
      <button className="ml-auto flex items-center hover:text-teal-500 transition-colors gap-2 text-star text-teal-600">
        <Profile />
        <ArrowDown />
      </button>
    </header>
  );
}
