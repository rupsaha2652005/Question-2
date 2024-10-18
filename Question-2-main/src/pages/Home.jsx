import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Product from '../components/Product'

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Product/>
        <Footer/>
    </div>
  )
}
