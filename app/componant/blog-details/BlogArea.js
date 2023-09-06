import React from 'react'
import SingleBlog from './SingleBlog'
import CommentArea from './CommentArea'
import CommentForm from './CommentForm'

export default function BlogArea() {
  return (
    <div className="content-side col-lg-8 col-md-8 col-sm-12 col-xs-12">

        <SingleBlog/>
        <CommentArea/>
        <CommentForm/>

    </div>

  )
}
