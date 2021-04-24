import React, {useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import { Pagination } from "antd";

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
