import React from 'react'

import MasonryPost from  '../common/MasonryPost'

export default function PostMasonry({ posts, columns, tagsOnTop }) {
    return (
      <section
        className="masonry"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`
        }}>
        { posts.map(
          (post, index) => (
            <MasonryPost {...{ post, index, tagsOnTop, key: index }} />)
            /**
           * passing props(post,index, tagsOnTop) into component MasonryPost with the same variables names
           * by having an object inside an object then destructure that object
           *  */
        )}
      </section>
    );
}
