import React from 'react'

export default function MasonryPost({ post, tagsOnTop }) {
    const background_style = {
      backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")`};
  return (
      <a className = 'masonry-post overlay' style = {background_style} href={post.link}>
          <div className ="image-text">
              <div>
                  <h2 className="image-title">
                      {post.title}
                  </h2>
                  <span className="image-date">{post.date}</span>
              </div>
          </div>
      </a>
  );
}
