import clsx from 'clsx';
import React, { useState } from 'react';
import { CircleIcon } from './icons/circle-icon';
import { CrossIcon } from './icons/cross-icon';
import { UiButton } from '../uikit/ui-button';

const GAME_SYMBOLS = {
  CIRCLE: 'circle',
  CROSS: 'cross',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
};

const MOVE_ORDER = [
  GAME_SYMBOLS.CIRCLE,
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

const getNextMove = (currentMove) => {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
};

export function GameField({ className }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CIRCLE);
  const nextMove = getNextMove(currentMove);
  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Draw
      </UiButton>
      <UiButton size="md" variant="outline">
        Surrender
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo currentMove={currentMove} nextMove={nextMove} actions={actions} />
      <GameGrid>
        {cells.map((_, i) => (
          <GameCell key={i}></GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ className, children }) {
  return (
    <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}>
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 tetx-xl leading-tight font-semibold">
          Move: <CircleIcon className="w-5 h-5" /> {currentMove}
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Next: <CrossIcon /> {nextMove}
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid mt-4 grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
      {children}
    </div>
  );
}

function GameCell({ children }) {
  return (
    <button className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}
