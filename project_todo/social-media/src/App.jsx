import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css'
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';


const App = () => {
  useState("Home")
  return (
    <>
    <div className='app-container'>
    
      <Sidebar/>
      <div className='content'>

      <Header></Header>
      <CreatePost/>
      <PostList/>
      <Footer/>
      </div>
    </div>
   
    </>

  )
}

export default App
