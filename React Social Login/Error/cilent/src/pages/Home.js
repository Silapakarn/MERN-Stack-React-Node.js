import React from 'react'
import {posts} from '../data.js'
import Crad from '../component/Crad.js'
import '../component/Crad.css'

export default function Home() {
  return (
    <div className="home">
        {posts.map(post=>(
            <Crad key={post.id} post={post}/>
        ))}
    </div>
  )
}
