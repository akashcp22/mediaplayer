import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import History from './Pages/History'
import './bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  

  return (
    <>
       
       <Header/>
       <Routes>
         <Route path='/' element={<Landing/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/history' element={<History/>}/>
       </Routes>
       <ToastContainer/>
       <Footer></Footer>
    </>
  )
}
 
export default App
