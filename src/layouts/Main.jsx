// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../pages/Home/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Home/Shared/Footer/Footer'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Main