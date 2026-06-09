interface TagProps {
  children: React.ReactNode;
  hot?: boolean;
}

export default function Tag({ children, hot = false }: TagProps) {
  return (
    <span
      className={`font-mono text-[11px] px-2 py-0.5 border transition-colors ${
        hot
          ? "bg-[rgba(57,255,133,0.07)] border-[rgba(57,255,133,0.3)] text-[#39ff85]"
          : "bg-[rgba(0,229,255,0.06)] border-[rgba(0,229,255,0.2)] text-[#8899bb]"
      }`}
    >
      {children}
    </span>
  );
}
