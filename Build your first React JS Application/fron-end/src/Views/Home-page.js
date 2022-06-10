import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Component/Loader'
import ProductCard from '../Component/ProductCard'
import useAxiosGet from '../Hooks/HttpRequests'

export default function Home_page() {
  const {id} = useParams()
  const url = `https://62a22f2ccd2e8da9b0043987.mockapi.io/api/v1/personal/${id}`

  
  let products = useAxiosGet(url)


  let content = null


  if(products.loading){
    content = <Loader />
  }
  if(products.error){
      content = <p>
          There was an error loading the product or try again later
      </p>
  }


  if(products.data){
      content = 
      products.data.map((product, key) => 
        <div>
           <ProductCard product={product} />
        </div>
      )
  }



  return (
    <div>
       <h1 className="font-bold text-2xl">
         Best Sellers
      </h1>
      {content}
    </div>
  )
}
