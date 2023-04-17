import React from 'react'
import MainMenu from './MainMenu'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div>
        <MainMenu />
        {children}
        <Footer />
    </div>
  )
}
