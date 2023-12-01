import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
function App() {
 
  return (
    <>
     <Header/>
     <div className="h-16 md:h-20"></div>
     <main>
     <HomePage />
     </main>

     <Footer/>
    </>
  )
}

export default App
