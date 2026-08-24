export default function Controls({ onNext, quote }) {
  return (
    <div className="controls">
      <button className="btn btn-primary" onClick={onNext}>New quote</button>
      {/* BUG (issue #9): the copy button has no onClick handler wired, so it does nothing. */}
      <button className="btn btn-primary" id="copy-btn">Copy</button>
    </div>
  )
}
