import React from "react"
import { Component, useState } from "react"

import "../styles/header.css"
import Nav from "./nav"


const Header = () =>{
  return(
    <div className="header">
      <div className="logoContainer">
        <div className="logoText">
          FDLA.
        </div>
      </div>
      <Nav/>
    </div>
  )
}

export default Header;