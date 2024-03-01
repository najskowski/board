import { createContext, useContext } from "react";
import { type Board } from "../types";

type BoardContextType = {
  board: Board | undefined;
  setBoard: React.Dispatch<React.SetStateAction<Board|undefined>>;
}

export const BoardContext = createContext<BoardContextType|undefined>(undefined);

export function useBoardContext() {
  const board = useContext(BoardContext);
  if (board === undefined) {
    throw new Error("useBoardContext must be used with a BoardContext");
  }
  return board;
}
