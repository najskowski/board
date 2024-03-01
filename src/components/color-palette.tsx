import { useEffect } from "react";
import { useBoardContext } from "../context/board-context";
import { TableColor } from "../types";
import { motion } from "framer-motion";

type ColorPaletteProps = {
  tableId: number;
  setColorPaletteVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ColorPalette = ({
  tableId,
  setColorPaletteVisible,
}: ColorPaletteProps) => {
  const { board, setBoard } = useBoardContext();
  const changeTableColor = (color: TableColor) => {
    const newData = board?.map((table) => {
      if (table.id === tableId) {
        table.color = color;
      }
      return table;
    });
    setBoard(newData);
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      console.log((e.target as HTMLElement))
      if (
        !(e.target as HTMLElement).classList.contains("color-palette") &&
        !(e.target as HTMLElement).classList.contains("color-palette-button")
      ) {
        setColorPaletteVisible(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <motion.div className="w-max h-fit p-3 border border-neutral-800 bg-neutral-900 rounded-md grid grid-cols-5 gap-1 absolute -left-[60px] top-7 z-10 color-palette"
      initial={{ scale: "0%" }}
      animate={{ scale: "100%" }}
      exit={{ scale: "0%" }}
    >
      <button
        onClick={() => changeTableColor("slate")}
        className="w-5 h-5 bg-slate-500"
        title="slate"
      ></button>
      <button
        onClick={() => changeTableColor("gray")}
        className="w-5 h-5 bg-gray-500"
        title="gray"
      ></button>
      <button
        onClick={() => changeTableColor("zinc")}
        className="w-5 h-5 bg-zinc-500"
        title="zinc"
      ></button>
      <button
        onClick={() => changeTableColor("neutral")}
        className="w-5 h-5 bg-neutral-500"
        title="neutral"
      ></button>
      <button
        onClick={() => changeTableColor("stone")}
        className="w-5 h-5 bg-stone-500"
        title="stone"
      ></button>
      <button
        onClick={() => changeTableColor("red")}
        className="w-5 h-5 bg-red-500"
        title="red"
      ></button>
      <button
        onClick={() => changeTableColor("orange")}
        className="w-5 h-5 bg-orange-500"
        title="orange"
      ></button>
      <button
        onClick={() => changeTableColor("amber")}
        className="w-5 h-5 bg-amber-500"
        title="amber"
      ></button>
      <button
        onClick={() => changeTableColor("yellow")}
        className="w-5 h-5 bg-yellow-500"
        title="yellow"
      ></button>
      <button
        onClick={() => changeTableColor("lime")}
        className="w-5 h-5 bg-lime-500"
        title="lime"
      ></button>
      <button
        onClick={() => changeTableColor("green")}
        className="w-5 h-5 bg-green-500"
        title="green"
      ></button>
      <button
        onClick={() => changeTableColor("emerald")}
        className="w-5 h-5 bg-emerald-500"
        title="emerald"
      ></button>
      <button
        onClick={() => changeTableColor("teal")}
        className="w-5 h-5 bg-teal-500"
        title="teal"
      ></button>
      <button
        onClick={() => changeTableColor("cyan")}
        className="w-5 h-5 bg-cyan-500"
        title="cyan"
      ></button>
      <button
        onClick={() => changeTableColor("sky")}
        className="w-5 h-5 bg-sky-500"
        title="sky"
      ></button>
      <button
        onClick={() => changeTableColor("blue")}
        className="w-5 h-5 bg-blue-500"
        title="blue"
      ></button>
      <button
        onClick={() => changeTableColor("indigo")}
        className="w-5 h-5 bg-indigo-500"
        title="indigo"
      ></button>
      <button
        onClick={() => changeTableColor("violet")}
        className="w-5 h-5 bg-violet-500"
        title="violet"
      ></button>
      <button
        onClick={() => changeTableColor("purple")}
        className="w-5 h-5 bg-purple-500"
        title="purple"
      ></button>
      <button
        onClick={() => changeTableColor("fuchsia")}
        className="w-5 h-5 bg-fuchsia-500"
        title="fuchsia"
      ></button>
      <button
        onClick={() => changeTableColor("pink")}
        className="w-5 h-5 bg-pink-500"
        title="pink"
      ></button>
      <button
        onClick={() => changeTableColor("rose")}
        className="w-5 h-5 bg-rose-500"
        title="rose"
      ></button>
    </motion.div>
  );
};
