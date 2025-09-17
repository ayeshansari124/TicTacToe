import Cell from "./Cell";

interface BoardProps {
  cells: (string | null)[];
  onMove: (index: number) => void;
}

export default function Board({ cells, onMove }: BoardProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-[70%] aspect-square max-w-[300px] sm:max-w-[250px]">
      {cells.map((value, i) => (
        <Cell key={i} value={value} onClick={() => onMove(i)} />
      ))}
    </div>
  );
}
