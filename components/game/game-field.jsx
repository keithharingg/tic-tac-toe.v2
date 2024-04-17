import clsx from 'clsx';
import React from 'react';
import { UiButton } from '../uikit/ui-button';
import { GameSymbol } from './game-symbol';

export function GameField({
  className,
  handleCellClick,
  cells,
  currentMove,
  nextMove,
  winnerSequence,
}) {
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
          <GameCell
            onClick={() => handleCellClick(index)}
            key={index}
            disabled={!!winnerSequence}
            isWinner={winnerSequence?.includes(index)}>
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

function GameCell({ children, onClick, isWinner, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'border border-slate-200 -ml-px -mt-px flex items-center justify-center',
        isWinner && 'bg-orange-600/10',
      )}>
      {children}
    </button>
  );
}
