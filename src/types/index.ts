export type TableColor =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type Item = {
  id: number;
  content: string;
};

export type Table = {
  id?: number;
  title: string;
  items: Item[];
  coordinates?: {
    x: number;
    y: number;
  };
  color: TableColor;
};

export type Board = Table[];
