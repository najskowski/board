import { useEffect, useState } from "react";
import { Table } from "./components/table";
import useLocalStorage from "./hooks/use-local-storage";
import { BoardContext } from "./context/board-context";
import { Toolbar } from "./components/toolbar";
import { Links } from "./components/links";
import { type Board } from "./types"

function App() {
  const { set, get } = useLocalStorage("board")
  const [board, setBoard] = useState<Board | undefined>(JSON.parse(get() ?? "[]"));
  useEffect(() => {
    set(JSON.stringify(board))
  }, [board])
  return (
    <BoardContext.Provider value={{
      board,
      setBoard
    }}>
      <div className="absolute inset-0 h-full w-full bg-neutral-950 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
        {board?.map((table) => (
          <Table data={table} key={table.id} />
        ))}
        <Toolbar />
        <Links />
      </div>
    </BoardContext.Provider>
  );
}

export default App;