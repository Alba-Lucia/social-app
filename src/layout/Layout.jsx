import React, { useContext } from 'react'
import { Outlet } from "react-router-dom"
import { LeftBar, Navbar, RigthBar } from '../componets/navbars'
import { DarkModeContext } from '../context/DarkModeContext'
import "../styles/themes.scss"

export const Layout = () => {

  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RigthBar/>
        </div>
    </div>
  )
}
