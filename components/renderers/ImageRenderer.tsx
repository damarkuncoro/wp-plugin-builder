export function ImageRenderer({ src }: { src: string }) {
  return (
    <img src={src} alt="" className="max-w-full rounded" />
  )
}
