export default function PostTitle({ children }) {
  return (
    <h1
      className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left animate-fade-left animate-once animate-ease-out animate-duration-[1500ms]"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
