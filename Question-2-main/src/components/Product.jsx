import React from 'react'
import './product.css'
import data from './products.json'

export default function Product() {
  return (
    <div className='pdct'>
        {data.map((Products) => {
            const {name , description, price, category,} = Products;
            
            return (
                <div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
                </div>
            );
        }
    )}
    </div>
  )
}
