import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'


function layout() {
  return (
    <div className='bg-[#e9e1de] p-5'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default layout