import React from 'react'
import Brand from '../Navbar/Brand'
import Navigation from '../Navbar/Navigation'
import ResumeButton from '../Navbar/ResumeButton'

const Navbar = () => {
  return (
    <header className="flex flex-col gap-4 px-8 py-4">
      <Brand/>

      <div className="flex justify-between items-center">
        <Navigation/>

        <ResumeButton/>
      </div>
    </header>
  )
}

export default Navbar
