import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
    <div>
    
      <Sidebar/>
      <Header/>
      <Footer/>
    </div>
   
    </>

  )
}

export default App
