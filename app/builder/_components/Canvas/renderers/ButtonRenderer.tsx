export function ButtonRenderer({ text, color }: { text: string, color?: string }) {
  return (
    <button className="py-2 px-4 rounded text-white" style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}
