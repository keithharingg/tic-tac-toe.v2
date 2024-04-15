import clsx from 'clsx';
import React, { useState } from 'react';
import { GAME_SYMBOLS } from './constants';
import { UiButton } from '../uikit/ui-button';
import { GameSymbol } from './game-symbol';

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
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.TRIANGLE);
  const nextMove = getNextMove(currentMove);
  const handleCellClick = (index) => {
    setCurrentMove((prevCurrentMove) => getNextMove(prevCurrentMove));
  };
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
        {cells.map((symbol, index) => (
          <GameCell onClick={() => handleCellClick(index)} key={index}>
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
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
          Move: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
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

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}
