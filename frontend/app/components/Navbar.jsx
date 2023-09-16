import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-[100vw] bg-[#003567]'>
      <ul className='flex w-auto m-auto items-center justify-center text-white text-sm px-0 font-semibold list-navbar'>
        <li>Estampas y Tarjetas</li>
        <li>Estampas Faltantes</li>
        <li>Marvel Comics</li>
        <li>Panini Comics</li>
        <li>Panini Manga</li>
        <li>Libros y Revistas</li>
        <li>Coleccionables</li>
        <li>Checklist</li>
      </ul>
    </nav>
  )
}
