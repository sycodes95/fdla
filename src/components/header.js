import React from "react"
import { Component, useState } from "react"
import { Link } from "react-router-dom";
import "../styles/header.css"
import Nav from "./nav"
import Menu from "./menu";

const Header = () =>{
  return(
    
    <div className="header">
      <div className="logoContainer">
      <Link className="link" to="/">
        <div className="logoText">
          FDLA.
        </div>
      </Link>
      </div>
      <Nav/>
    </div>
      
    
  )
}

export default Header;