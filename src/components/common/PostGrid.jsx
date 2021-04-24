import React, {useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import { Pagination } from "antd";

import {TagRow} from './'

export default function PostGrid({posts}) {
    const [pageSize, setPageSize] = useState(9)
    const [current, setCurrent] = useState(1)

    const paginatedPosts = useMemo(() => {
      const lastIndex = current * pageSize;
      const firstIndex = lastIndex - pageSize;

      return posts.slice(firstIndex, lastIndex);
    }, [current, pageSize]);
    
    return (
      <section className="grid-pagination-container">
        <section className="post-grid container">
            {paginatedPosts.map((post,index) =>
            <div className="post-container">
                <figure>
                    <Link to={post.link}>
                        <img src={require(`../../assets/images/${post.image}`).default} alt={post.image}/>
                    </Link>
                </figure>
                <TagRow tags = {post.categories}/>
                <h2>{post.title}</h2>
                <span className='author-text'>
                  By:
                  <Link to={`/authors/${post.author}`}>
                    {post.author}
                  </Link>
                </span>
                <span>{post.date}</span>
                <p className="description-text">
                  {post.description}
                </p>
                <Link to={post.link}>
                  Read More...
                </Link>
            </div>
            )}
          <Pagination
            simple
            showSizeChanger
            onShowSizeChange={setPageSize}
            pageSize={pageSize}
            total={posts.length}
            defaultCurrent={current}
            onChange={setCurrent}
          />
        </section>
      </section>
    );
}
