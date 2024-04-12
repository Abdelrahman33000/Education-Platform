
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './component'
import { About, Contact, Home, Partners } from './Pages'
import { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'

function App() {

  const [loading , setLoading]=useState (false);

  useEffect(() =>{
    setLoading (true);
    setTimeout(() => {
      setLoading (false);

    }, 3000);
  },[])
  return (
    <div style={{overflowX:"hidden"}}>
      
      {loading ? <SyncLoader color="#36d7b7" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"auto", minHeight:"100vh"}} /> :
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/partners' element={<Partners />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      }
    </div>
  )
}

export default App
