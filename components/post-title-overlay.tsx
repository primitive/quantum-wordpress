export default function PostTitle({ children }) {
  return (
    <h1
      className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
