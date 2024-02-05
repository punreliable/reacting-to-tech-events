import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TechEvent } from './types/TechEventBase'
import { Talk, TechEvent, Webinar, Conference, Meetup } from './types/Types'
import printEvent from './utilities/printEvent'
// import Talk from './types/Talk'
// import Conference from './types/Conference'
// import Meetup from './types/Meetup'

function App() {
  const [count, setCount] = useState(0)
  const event: TechEvent = {
    title: 'Vite + React',
    description: 'Vite and React are awesome!',
    date: new Date(),
  }

  return (
    <>
      {printEvent(event)}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
