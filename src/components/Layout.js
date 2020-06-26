import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "./layout.css"

const Layout = props => {
  return (
    <main>
      <Navbar />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout
