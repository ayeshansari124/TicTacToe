import Cell from "./Cell";

interface BoardProps {
  cells: (string | null)[];
  onMove: (index: number) => void;
}

export default function Board({ cells, onMove }: BoardProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full max-w-[320px] sm:max-w-[280px] aspect-square">
      {cells.map((value, i) => (
        <Cell key={i} value={value} onClick={() => onMove(i)} />
      ))}
    </div>
  );
}
