"use client";

import React, { useState, useEffect } from 'react'
import CardProduct from '../components/CardProduct'
import { Nunito } from 'next/font/google'
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

const nunito = Nunito({ subsets: ['latin'] });

export default function MangaPage() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async() => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  return (
    <div className='py-48 px-5'>
      <div className='px-10 py-0'>
        <h1 className={`${nunito.className} text-2xl text-[#0057a5] font-bold`}>Panini Manga</h1>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        {
          products.map((product) => (
            <React.Fragment key={product.id}>
              <CardProduct {...product} />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}
