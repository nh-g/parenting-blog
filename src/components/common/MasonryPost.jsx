import React from 'react'
import {TagRow} from './'

export default function MasonryPost({ post, tagsOnTop }) {
    const background_image = {
      backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")`};

    const windowWidth = window.innerWidth;
    const style = windowWidth > 900 ? { ... background_image, ...post.style}: { ...background_image}
  
      return (
        <a className="masonry-post overlay" style={style} href={post.link}>
          <div
            className="image-text"
            style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
          >
            <TagRow tags ={post.categories} />
            <div>
              <h2 className="image-title">{post.title}</h2>
              <span className="image-date">{post.date}</span>
            </div>
          </div>
        </a>
      );
}
