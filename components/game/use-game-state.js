import { useState } from 'react';
import { GAME_SYMBOLS } from './constants';
import { computeWinner, getNextMove } from './model';

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersTimeOver: [],
  }));

  const winnerSequence = computeWinner(cells);

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

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prevGameState) => {
      return {
        ...prevGameState,
        playersTimeOver: [...prevGameState.playersTimeOver, symbol],
        currentMove: getNextMove(prevGameState.currentMove, playersCount),
      };
    });
  };

  return {
    handleCellClick,
    handlePlayerTimeOver,
    cells,
    currentMove,
    nextMove,
    winnerSequence,
  };
}
