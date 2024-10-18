import React from 'react'
import img from '../assets/banner.jpg'

export default function Banner() {
  return (
    <div>
        <img src={img} alt="" className='w-4/6 mx-auto'/>
    </div>
  )
}
