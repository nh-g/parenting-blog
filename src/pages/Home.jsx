import React from 'react'

import trending from '../assets/data/trending'
import featured from '../assets/data/feature.jsx'

import PostMasonry from '../components/common/PostMasonry'
import MasonryPost from '../components/common/MasonryPost'

const trendingConfig = {
    1: {
        gridArea: '1 / 2/ span 2/ span 1'
                // gridArea: '1 / 2/ 3/ 3'
    }
}

const featureConfig = {
    0: {
        gridArea: '1 / 1 / 2/ 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px', // set gap between other post
        width: '630px'
    }
}

const mergeStyles = (posts, config) => {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}
mergeStyles(trending, trendingConfig)
mergeStyles(featured, featureConfig)

const lastFeatured = featured.pop()
export default function Home() {
    return (
      <section className="container home">
        <div className="row">
          <h1>Featured Posts</h1>
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
          <h1>Trending Posts</h1>
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    );
}
