import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className="App">
      <Header title="Tinsu weekly post" />
      <Nav  />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
