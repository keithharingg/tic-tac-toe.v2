import clsx from 'clsx';
import { Profile } from '../profile';
import { GameSymbol } from './game-symbol';
import avatarSrc1 from './avatars/avatar-1.png';
import avatarSrc2 from './avatars/avatar-2.png';
import avatarSrc3 from './avatars/avatar-3.png';
import avatarSrc4 from './avatars/avatar-4.png';
import { GAME_SYMBOLS } from './constants';
import { useEffect, useState } from 'react';

const players = [
  {
    id: 1,
    name: 'Lars',
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: 'Lara',
    rating: 850,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.CIRCLE,
  },
  {
    id: 3,
    name: 'Lisa',
    rating: 1400,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: 'Nick',
    rating: 760,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3',
        className,
      )}>
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          playerInfo={player}
          key={player.id}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  const minuteString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondString = String(Math.floor(seconds % 60)).padStart(2, '0');

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    } else {
      return 'text-slate-300';
    }
  };
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx('relative', isRight && 'order-3')}>
        <Profile
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
          className="w-44"
        />
        <div className="w-5 h-5 rounded-full bg-white shadow flex absolute -left-1 -top-1 items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx('h-6 w-px bg-slate-300', isRight && 'order-2')} />
      <div
        className={clsx('text-lg font-semibold w-[60px]', isRight && 'order-1', getTimerColor())}>
        {minuteString}:{secondString}
      </div>
    </div>
  );
}
