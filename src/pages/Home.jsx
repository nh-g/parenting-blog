import React from 'react'

import trending from '../assets/data/trending'
import featured from '../assets/data/feature.jsx'

import {PostMasonry, MasonryPost, PostGrid} from '../components/common'

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
        post.author = 'N.H.G'
        post.description =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis erat a purus ullamcorper, rhoncus sodales ligula auctor. Fusce convallis metus ut dolor ultrices, ut accumsan quam consectetur. Quisque at eleifend arcu. Fusce finibus imperdiet elit, vitae bibendum eros lobortis nec. Sed a libero porttitor, bibendum mi ac, vestibulum ipsum. Vestibulum non tincidunt nibh. Morbi posuere leo nisl, non aliquam erat finibus vitae. Maecenas pretium, mauris vel ultricies vestibulum, augue metus ultricies mi, a fermentum erat nisl accumsan nibh. Vivamus at rutrum mi. Etiam sem orci, bibendum ac tristique quis, auctor ut nunc. Integer et pharetra nisl. Aenean a finibus sapien. Nullam felis arcu, pulvinar eu interdum in, cursus ac lacus."
    })
}
mergeStyles(trending, trendingConfig)
mergeStyles(featured, featureConfig)

const lastFeatured = featured.pop()
const recentPosts = {...trending, ...featured, ...featured}
export default function Home() {
    return (
      <main className="home">
        <section className="container">
          <div className="row">
            <h1>Featured Posts</h1>
            <section className="featured-posts-container">
              <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
              <MasonryPost post={lastFeatured} tagsOnTop={true} />
            </section>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h1>Recent Posts</h1>
            <PostGrid posts = {recentPosts}/>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h1>Trending Posts</h1>
            <PostMasonry posts={trending} columns={3} />
          </div>
        </section>
      </main>
    );
}
