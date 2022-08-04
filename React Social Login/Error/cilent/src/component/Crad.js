import React from 'react'
import { Link } from "react-router-dom";
import './Crad.css'

export default function Crad({post}) {
  return (
    <div className='crad'>
        <Link className="link" to={`/post/${post.id}`}>
            <span className="title">{post.title}</span>
            <img src={post.img} alt=''  className='img' />
            <p className='desc'>{post.desc}</p>
            <button className='button-88'>Read More</button>
        </Link>
    </div>
  )
}
