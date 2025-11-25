import Cell from "./Cell";

export default function Board({ cells, onMove }: { cells: (string | null)[]; onMove: (i: number) => void }) {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-[320px] aspect-square">
      {cells.map((v, i) => (
        <Cell key={i} value={v} onClick={() => onMove(i)} />
      ))}
    </div>
  );
}
