import { HiOutlineTrash } from "react-icons/hi";
import { motion } from "framer-motion";
import { useBoardContext } from "../context/board-context";
import { twMerge } from "tailwind-merge";
import { TableColor } from "../types";

type ItemProps = {
  tableId: number;
  content: string;
  itemId: number;
  color?: TableColor;
};

export const Item = ({ tableId, content, itemId, color }: ItemProps) => {
  const { board, setBoard } = useBoardContext();
  const changeItemContent = (newValue: string) => {
    const newData = board?.map((table) => {
      if(table.id === tableId) {
        table.items = table.items.map(item => {
          if(item.id === itemId) {
            item = { id: itemId, content: newValue }
          }
          return item
        })
      }
      return table;
    });
    setBoard(newData);
  };
  const deleteItem = () => {
    const newData = board?.map(table => {
      if(table.id === tableId) {
        table.items = table.items.filter(item => item.id !== itemId)
      }
      return table
    })
    setBoard(newData)
  }
  return (
    <motion.li
      className={twMerge("py-1 px-3 rounded border flex justify-between items-center group gap-10 relative", color ?? "neutral")}
      initial={{ scale: "0%" }}
      animate={{ scale: "100%" }}
    >
      <input
        type="text"
        defaultValue={content}
        className="bg-transparent text-lg w-full caret-white outline-none"
        onChange={(e) => changeItemContent(e.target.value)}
      />
      <button
        className="text-neutral-400 hover:text-red-400 transition-all absolute right-2"
        onClick={deleteItem}
      >
        <HiOutlineTrash size={17} />
      </button>
    </motion.li>
  );
};
