import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found-label">HU / PAGE NOT FOUND</p>

      <h1>404<span>.</span></h1>

      <h2>Lost your way?</h2>

      <p>
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <a href="/" className="not-found-button">
        Return Home ↗
      </a>
    </main>
  )
}

export default NotFound