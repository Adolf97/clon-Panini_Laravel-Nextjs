"use client";

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link';

const endpoint = 'http://localhost:8000/api'

export default function ShowProducts() {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async() => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  }

  const deleteProduct = async(id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  }

  return (
    <div>
      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link className='btn btn-warning' href={`/edit/${product.id}`}>Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    
  )
}
