import { useState } from 'react';
import { GAME_SYMBOLS, MOVE_ORDER } from './constants';

export function useGameState(playersCount) {
  const getNextMove = (currentMove, playersCount) => {
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
  };

  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    setGameState((prevGameState) => {
      // check if cell is === null (not occupied)
      if (!prevGameState.cells[index]) {
        // if not occupied, then update game state
        return {
          ...prevGameState,
          currentMove: getNextMove(prevGameState.currentMove, playersCount),
          cells: prevGameState.cells.map((cell, i) =>
            i === index ? getNextMove(prevGameState.currentMove, playersCount) : cell,
          ),
        };
      } else {
        // if occupied, return game state without updates
        return prevGameState;
      }
    });
  };

  return {
    handleCellClick,
    cells,
    currentMove,
    nextMove,
  };
}
