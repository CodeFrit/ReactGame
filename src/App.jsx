import Meme_site from "./Meme_site"
import Tenzies from "./Tenzies"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tenzies/>} />
      <Route path="/memes" element={<Meme_site/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
