import React from 'react'

import trending from '../assets/data/trending'
import PostMasonry from '../components/common/PostMasonry'
export default function Home() {
    return (
        <section className ="container home">
            <div className ="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts ={trending} columns={3}/>
            </div>

        </section>
    )
}
