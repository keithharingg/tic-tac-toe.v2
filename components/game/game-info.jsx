import { GameSymbol } from './game-symbol';
import styles from './game.module.css';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className="mb-2">Draw</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-2">
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2">
      Step: <GameSymbol symbol={currentStep} />
    </div>
  );
}
