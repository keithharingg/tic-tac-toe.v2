import clsx from 'clsx';
import { Profile } from '../profile';
import { CrossIcon } from './icons/cross-icon';

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between gap-3',
        className,
      )}>
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow flex absolute -left-1 -top-1 items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-300" />
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold">00:08</div>
        <div className="h-6 w-px bg-slate-300" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow flex absolute -left-1 -top-1 items-center justify-center">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
