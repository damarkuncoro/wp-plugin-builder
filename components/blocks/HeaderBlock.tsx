export default function HeaderBlock({ text, color }: { text: string, color: string }) {
    return <h2 style={{ color }} className="text-2xl font-bold">{text}</h2>;
}