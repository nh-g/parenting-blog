import React from 'react'

export default function MasonryPost({ post, tagsOnTop }) {
    const style = {backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`}
  return (
      <a className = 'masonry-post overlay' style = {style} href={post.link}>
          <div className ="image-text"></div>
      </a>
  );
}
