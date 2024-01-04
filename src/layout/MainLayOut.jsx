import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const MainLayOut = () => {
  return (
    <>
       <Header/>
       <h1 className='headline'>Welcome to The Little Shop</h1>
          <Outlet/>  
       <Footer/>
    </>
  )
}

export default MainLayOut