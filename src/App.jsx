import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CanvasPage from './pages/CanvasPage/CanvasPage'
import About from './pages/About/About'

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/canvas" element={<CanvasPage />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App