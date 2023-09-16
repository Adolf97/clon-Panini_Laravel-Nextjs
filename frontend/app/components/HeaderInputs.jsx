import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

export default function HeaderInputs() {
  return (
    <header className='flex w-[100vw] h-auto bg-[#004280] py-4 px-6'>
      <div className='w-auto h-auto'>
        <img src="https://tiendapanini.com.mx/static/version1694654319/frontend/Panini/Mexico/es_MX/images/panini-logo.svg" alt="Logo" />
      </div>

      <div className='flex items-center w-[42%] pl-10'>
        <input 
          className='w-[100%] py-2 px-4 text-[12px] rounded-md input_header'
          placeholder='Buscar en toda la tienda...' 
          type="search" 
        />
      </div>

      <div className='flex items-center justify-around text-white font-medium w-[42%]'>
        <span className='text-sm'>Servicio al cliente</span>

        <AiOutlineHeart className='font-bold header_icons' />

        <div className='flex items-center'>
          <BsCart className='mr-1 header_icons' />
          <span className='text-sm'>$0.00</span>
        </div>

        <div className='flex items-center'>
          <BiUserCircle className='mr-1 header_icons' />
          <span className='text-sm'>Nombre</span>
        </div>
      </div>
    </header>
  )
}
