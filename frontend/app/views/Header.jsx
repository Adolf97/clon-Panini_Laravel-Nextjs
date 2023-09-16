import React from 'react'
import HeaderInputs from '../components/HeaderInputs'
import Navbar from '../components/Navbar'

export default function Header() {
  return (
    <div className='fixed z-50'>
      <HeaderInputs />
      <Navbar />
    </div>
  )
}
