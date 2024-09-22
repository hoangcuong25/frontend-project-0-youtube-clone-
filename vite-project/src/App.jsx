import NavBar from "./Components/Navbar/NavBar"
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useState } from "react"

const App = () => {
  
  const[sidebar, setSidebar] = useState(true);
  
  return (
    <div>
      <NavBar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
