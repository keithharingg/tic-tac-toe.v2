import { useState } from 'react';
import { GameField, GameInfo, GameTitle, useGameState } from '../components/game';
import { Header } from '../components/header';
import { GameSymbol } from '../components/game/game-symbol';

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    handleCellClick,
    handlePlayerTimeOver,
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
  } = useGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          onPlayerTimeOver={handlePlayerTimeOver}
          isWinner={!!winnerSymbol}
          currentMove={currentMove}
          playersCount={playersCount}
          className="mt-4"
        />
        {winnerSymbol && (
          <div className="m-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          winnerSymbol={winnerSymbol}
          handleCellClick={handleCellClick}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          playersCount={playersCount}
          winnerSequence={winnerSequence}
          className="mt-6"
        />
      </main>
    </div>
  );
}
