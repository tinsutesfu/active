import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className="App">
      <Header title="Your weekly free post" />
      <Nav  />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
