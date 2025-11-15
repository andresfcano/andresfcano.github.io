import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  const handleSkipToContent = () => {
    const main = document.getElementById('main')
    if (main) {
      // Make sure it's focusable, then focus & scroll to it
      main.setAttribute('tabindex', '-1')
      main.focus()
      main.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <div className="App">
      <button
        type="button"
        className="skip-link"
        onClick={handleSkipToContent}
      >
        Skip to content
      </button>
      <a href="#main" className="skip-link">Skip to content</a>
      <Sidebar />
      <div className="page">
        <main id="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
