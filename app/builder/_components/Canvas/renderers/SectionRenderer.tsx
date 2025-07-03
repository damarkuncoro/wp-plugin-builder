export function SectionRenderer({ text, color }: { text: string, color?: string }) {
  return (
    <div className="p-4 rounded" style={{ backgroundColor: color }}>
      {text}
    </div>
  )
}
