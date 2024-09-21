import NavBar from "./Components/Navbar/NavBar"
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
