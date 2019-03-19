import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Pagination } from "antd"
import PostCard from "../postcard"

const config = require('../../utils/site_config')

class PostList extends Component {
  render() {
    const { edges, index } = this.props;
    const total_post = edges.length;
    const page_index = Number(index);

    const num_per_page = config.postNumberPerPage;
    const total_page = Math.ceil(total_post / num_per_page);
    const post_begin = (page_index - 1) * num_per_page;
    var post_end = page_index * num_per_page;
    if (post_end > total_post){
      post_end = total_post;
    }

    return (
      <div>
        {
          edges.slice(post_begin, post_end).map(({ node }) => (
            <PostCard node={node} />
          ))
        }
        <Pagination total={total_page * 10} defaultCurrent={page_index} />
      </div>
    )
  }
}

export default PostList
