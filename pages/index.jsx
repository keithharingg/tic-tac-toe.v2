import { useState } from 'react';
import { GameField, GameInfo, GameTitle, useGameState } from '../components/game';
import { Header } from '../components/header';
import { GameSymbol } from '../components/game/game-symbol';
import { UiModal } from '../components/uikit/ui-modal';
import { UiButton } from '../components/uikit/ui-button';

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
        <UiModal width="full" isOpen={winnerSymbol} onClose={() => console.log('close')}>
          <UiModal.Header>Game over</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Winner: <span className="text-teal-600">Lars</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Back
            </UiButton>
            <UiButton size="md" variant="primary">
              Restart
            </UiButton>
          </UiModal.Footer>
        </UiModal>
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
