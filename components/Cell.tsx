export default function Cell({ value, onClick }: { value: string | null; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center rounded-lg shadow-md cursor-pointer text-4xl sm:text-3xl transition-all duration-150
        bg-[rgba(137,43,226,0.55)] hover:bg-[rgba(137,43,226,0.75)] 
        ${value ? "pointer-events-none opacity-90" : ""}`}
    >
      {value}
    </div>
  );
}
