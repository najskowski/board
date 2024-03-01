import {
  HiViewGridAdd,
  HiOutlineDownload,
  HiOutlineTrash,
  HiOutlineDocumentAdd,
} from "react-icons/hi";
import { useBoardContext } from "../context/board-context";
import { useRef } from "react";
export const Toolbar = () => {
  const { board, setBoard } = useBoardContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const moveMultiplier =
    board?.filter(
      (element) =>
        element.coordinates?.x! % 10 === 0 && element.coordinates?.y! % 10 === 0
    ).length ?? 0;
  const createTable = () => {
    setBoard((prev) => {
      if (prev) {
        return [
          ...prev,
          {
            id: Math.floor(Math.random() * 1_000_000),
            title: `New table ${prev.length + 1}`,
            items: [
              {
                id: Math.floor(Math.random() * 1_000_000),
                content: `New item`,
              },
            ],
            coordinates: {
              x: moveMultiplier * 10,
              y: moveMultiplier * 10,
            },
            color: "neutral"
          },
        ];
      }
    });
  };
  const downloadBoard = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(board)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myboard.json";
    document.body.appendChild(element);
    element.click();
  };
  const clearBoard = () => {
    setBoard([]);
  };
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const importBoard = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        console.log("e.target.result", e.target?.result);
        if (e.target?.result) {
          setBoard(JSON.parse(e.target.result.toString()));
        }
      };
    }
  };
  return (
    <div className="fixed bottom-5 left-5 space-y-3">
      <button
        className="flex items-center gap-1 font-semibold hover:text-neutral-400 transition-all"
        title="New table"
        onClick={createTable}
      >
        <HiViewGridAdd size={30} /> Create new table
      </button>
      <button
        className="flex items-center gap-1 font-semibold hover:text-neutral-400 transition-all"
        title="Download board"
        onClick={downloadBoard}
      >
        <HiOutlineDownload size={30} /> Download board
      </button>
      <button
        className="flex items-center gap-1 font-semibold hover:text-neutral-400 transition-all"
        title="Clear board"
        onClick={clearBoard}
      >
        <HiOutlineTrash size={30} /> Clear board
      </button>
      <button
        className="flex items-center gap-1 font-semibold hover:text-neutral-400 transition-all"
        title="Import from .json file"
        onClick={triggerFileInput}
      >
        <HiOutlineDocumentAdd size={30} /> Import board
      </button>
      <input
        type="file"
        accept=".json,.jsonl,.jsonc"
        ref={fileInputRef}
        className="absolute -left-full"
        onChange={(e) => importBoard(e)}
      />
    </div>
  );
};
