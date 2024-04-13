import Image from 'next/image';
import avatarSrc from './avatar.png';
import clsx from 'clsx';

export function Profile({ className }) {
  return (
    <div>
      <div className={clsx('flex items-center gap-2 text-star text-teal-600', className)}>
        <Image src={avatarSrc} width={48} height={48} alt="Avatar" />
        <div>
          <div className="text-lg leading-tight">Nick3Sck</div>
          <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
        </div>
      </div>
    </div>
  );
}
