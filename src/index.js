import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Handle GitHub Pages SPA redirect once (from /404.html)
(function () {
  try {
    const url = new URL(window.location.href);
    const p = url.searchParams.get('p');
    if (p) {
      // Rewrite /?p=/foo -> /foo BEFORE the router mounts (no re-loop)
      window.history.replaceState({}, '', p);
    }
  } catch (_) {}
})();


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
