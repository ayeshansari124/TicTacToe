interface CellProps {
  value: string | null;
  onClick: () => void;
}

export default function Cell({ value, onClick }: CellProps) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center bg-[rgba(137,43,226,0.51)] text-crimson text-4xl sm:text-3xl rounded-lg shadow-md cursor-pointer transition-all duration-150 hover:bg-[rgba(137,43,226,0.7)] ${
        value ? "pointer-events-none opacity-90" : ""
      }`}
    >
      {value}
    </div>
  );
}
