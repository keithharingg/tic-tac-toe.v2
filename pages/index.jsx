import { useState } from 'react';
import { GameField, GameInfo, GameTitle, useGameState } from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
  const [playersCount] = useState(2);
  const { handleCellClick, cells, currentMove, nextMove, winnerSequence } =
    useGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo currentMove={currentMove} playersCount={playersCount} className="mt-4" />
        <GameField
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
