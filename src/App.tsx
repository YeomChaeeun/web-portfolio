import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes/path'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter basename={ROUTES.ROOT}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
