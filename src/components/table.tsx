import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { Item } from "./item";
import { useBoardContext } from "../context/board-context";
import { type Table as TableType } from "../types";
import Draggable from "react-draggable";
import { AnimatePresence } from "framer-motion";
import { IoColorPaletteOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { ColorPalette } from "./color-palette";
import { useState } from "react";

export const Table = ({ data }: { data: TableType }) => {
  const { board, setBoard } = useBoardContext();
  const [collorPaletteVisible, setColorPaletteVisible] = useState(false);
  const addItem = () => {
    const newData = board?.map((table) => {
      if (table.id === data.id) {
        table.items.push({
          id: Math.floor(Math.random() * 1_000_000),
          content: `New item ${table.items.length + 1}`,
        });
      }
      return table;
    });
    setBoard(newData);
  };
  const changeTableTitle = (title: string) => {
    const newData = board?.map((table) => {
      if (table.id === data.id) {
        table.title = title;
      }
      return table;
    });
    setBoard(newData);
  };
  const deleteTable = () => {
    const newData = board?.filter((table) => table.id !== data.id);
    setBoard(newData);
  };
  return (
    <Draggable
      defaultPosition={{
        x: data.coordinates?.x ?? 0,
        y: data.coordinates?.y ?? 0,
      }}
      onStop={(_, coordinates) => {
        const newData = board?.map((table) => {
          if (table.id === data.id) {
            table.coordinates = { x: coordinates.x, y: coordinates.y };
          }
          return table;
        });
        setBoard(newData);
      }}
    >
      <div
        className={twMerge(
          "p-5 rounded-md border w-[300px] absolute left-10 top-10",
          data.color ?? "neutral"
        )}
      >
        <div className="flex items-center justify-between">
          <input
            type="text"
            defaultValue={data.title}
            className="bg-transparent font-bold text-2xl w-full caret-white outline-none"
            onChange={(e) => changeTableTitle(e.target.value)}
          />
          <div className="absolute right-5 flex items-center gap-1">
            <button onClick={addItem}>
              <HiOutlinePlus size={20} />
            </button>
            <button
              className="relative color-palette-button"
              onClick={() => setColorPaletteVisible((prev) => !prev)}
            >
              <IoColorPaletteOutline size={20} className="color-palette-button" />
              <AnimatePresence>
                {collorPaletteVisible ? (
                  <ColorPalette tableId={data.id!} setColorPaletteVisible={setColorPaletteVisible} />
                ) : null}
              </AnimatePresence>
            </button>
            <button onClick={deleteTable}>
              <HiOutlineTrash size={20} />
            </button>
          </div>
        </div>
        <ul className="space-y-2 mt-3">
          <AnimatePresence>
            {data.items.map((item) => (
              <Item
                tableId={data.id!}
                content={item.content}
                itemId={item.id}
                color={data.color}
                key={data.id}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </Draggable>
  );
};

/*
<Draggable
      defaultPosition={{
        x: data.coordinates?.x ?? 0,
        y: data.coordinates?.y ?? 0,
      }}
      onStop={(_, coordinates) => {
        const newData = board?.map((table) => {
          if (table.id === data.id) {
            table.coordinates = { x: coordinates.x, y: coordinates.y };
          }
          return table;
        });
        setBoard(newData);
      }}
    >
</Draggable>
*/
