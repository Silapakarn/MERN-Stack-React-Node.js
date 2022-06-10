import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Component/Loader'
import useAxiosGet from '../Hooks/HttpRequests'


export default function Product() {


    const {id} = useParams()
    const url = `https://62a22f2ccd2e8da9b0043987.mockapi.io/api/v1/personal/${id}`

    //Hook
    let product = useAxiosGet(url)

    let content = null


    if(product.loading){
        content = <Loader />
    }
    if(product.error){
        content = <p>
            There was an error loading the product or try again later
        </p>
    }

    if(product.data){
        content = <div>
            <h1>{product.data.name}</h1>
            <div>
                <img src={product.data.images} />
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
            <div>
                {product.data.createdAt}
            </div>
        </div>
    }


    
    return (
        <div>{content}</div>
    )

  
}
