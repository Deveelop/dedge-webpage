import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import Services from "./Pages/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
 
  return (
    <>
    <BrowserRouter>
     <Header/>
     <div className="h-16 md:h-20"></div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={ <About/>} />
      <Route exact path="/services" element={ <Services/>} />
     
    
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
