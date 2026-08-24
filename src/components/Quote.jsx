export default function Quote({ text, author }) {
  return (
    <blockquote className="quote">
      <p>“{text}”</p>
      <cite>— {author}</cite>
    </blockquote>
  )
}
