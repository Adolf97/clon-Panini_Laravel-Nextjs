"use client";

import React, { useState, useEffect } from 'react';
import { BsCart, BsBell } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const endpoint = 'http://localhost:8000/api';

export default function CardProduct({ id, name, description, img, price, stock }) {
  const [ liked, setLiked ] = useState(false);
  const [ addToCart, setAddToCart ] = useState(false)

  const likedManga = () => {
    setLiked(!liked);

    if(liked) {
      localStorage.removeItem(id, name)
    } else {
      localStorage.setItem(id, name)
    }
  };

  const addMangaToCart = () => {
    setAddToCart(!addToCart)
  }

  return (
    <div className='relative border-solid border-2 shadow-md rounded py-4 px-3 mx-3 my-4 w-[220px] min-h-[350px] hover:shadow-2xl'>
      <button onClick={likedManga} className='absolute right-5 top-2 p-2 bg-slate-200/40 rounded-full'>
        {
          liked ?
          (<AiFillHeart className='text-red-500 text-2xl' />) :
          (<AiOutlineHeart className='text-2xl' />)
        }
      </button>
      <div className='w-[100%] h-[250px] mb-3 hover:cursor-pointer'>
        <img className='w-[100%] h-[100%] object-cover' src={img} alt={`imagen del manga ${description}`} />
      </div>
      <div className='mb-2 h-auto'>
        <div className='min-h-[50px] mb-3'>
          <h3 className='text-base font-bold uppercase'>{name}</h3>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-bold text-xs'>${price}.00</span>
            {
              stock > 0 ?
              (<button className='px-3 py-2 rounded bg-[#28c76f]'>
                <BsCart className='text-white text-lg' />
              </button>) :
              (<button className='px-3 py-2 rounded bg-[#f9e800]'>
                <BsBell className='text-white text-lg' />
              </button>)
            }
        </div>
      </div>
    </div>
  )
}
