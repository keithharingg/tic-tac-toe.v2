import { GameSymbol } from './game-symbol';
import styles from './game.module.css';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className={styles['game-info']}>Draw</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={styles['game-info']}>
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={styles['game-info']}>
      Step: <GameSymbol symbol={currentStep} />
    </div>
  );
}
