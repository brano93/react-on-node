import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [serverStatus, setServerStatus] = useState<string>()

  fetch("/api")
    .then((res) => res.json())
    .then((res) => setServerStatus(res.status))
    .catch(() => setServerStatus("inactive"))

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://nodejs.org" target="_blank">
          <img src="/nodejs_logo.svg" className="logo node" alt="Node logo" />
        </a>
      </div>
      <h1>Vite + React + Node</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p hidden={!serverStatus}>
          Server status <code>{serverStatus}</code>
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite, React or NodeJS logos to learn more</p>
    </div>
  )
}

export default App
