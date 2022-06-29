import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from '../../containers/blog/imports'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening. We are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="May 24, 2022>" title="Powering Next Generation Applications with OpenAI Codex"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Mar 16, 2022" title="New GPT-3 Capabilities: Edit and Insert"/>
          <Article imgUrl={blog03} date="Jan 25, 2022" title="Introducing Text and Code Embeddings in the OpenAI API"/>
          <Article imgUrl={blog04} date="Dec 14, 2021" title="Customizing GPT-3 For Your Application"/>
          <Article imgUrl={blog05} date="Nov 18, 2021" title="OpenAI's API Now Available with No Waitlist"/>
        </div>
      </div>
    </div>
  )
}

export default Blog