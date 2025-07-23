import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Heart from './pages/Heart'
import Thoughts from './pages/Thoughts'
import History from './pages/History'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/heart" element={<Heart />} />
      <Route path="/thoughts" element={<Thoughts />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App