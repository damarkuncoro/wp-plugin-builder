export function HeaderRenderer({ text, color }: { text: string, color?: string }) {
  return (
    <h2 className="text-2xl font-bold" style={{ color }}>
      {text}
    </h2>
  )
}
