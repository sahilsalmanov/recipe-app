import { BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer"
import React from "react"


function App() {

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900">
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
