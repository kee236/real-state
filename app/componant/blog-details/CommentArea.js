import React from 'react'

export default function CommentArea() {
  return (
    <>
    {/*Comments Area*/}
    <div className="comments-area">
      <div className="group-title">
        <h2>Comments 02</h2>
        <div className="separator" />
      </div>
      {/*Comment Box*/}
      <div className="comment-box">
        <div className="comment">
          <div className="author-thumb">
            <img src="images/resource/author-6.jpg" alt="" />
          </div>
          <div className="comment-inner">
            <div className="comment-info clearfix">
              <strong>Paul Jones</strong>
              <div className="comment-time">August 29, 2017</div>
            </div>
            <div className="text">
              Cosmic ocean science Tunguska event the only home we’ve ever known
              Orion’s sword, concept of the one billions upon billions paroxysm of
              global death.
            </div>
            <a className="comment-reply" href="#">
              Reply
            </a>
          </div>
        </div>
      </div>
      {/*Comment Box*/}
      <div className="comment-box reply-comment">
        <div className="comment">
          <div className="author-thumb">
            <img src="images/resource/author-7.jpg" alt="" />
          </div>
          <div className="comment-inner">
            <div className="comment-info clearfix">
              <strong>Catherine Brown</strong>
              <div className="comment-time">August 29, 2017</div>
            </div>
            <div className="text">
              Cosmic ocean science Tunguska event the only home we’ve ever known
              Orion’s sword, concept of the one billions upon billions paroxysm of
              global death.
            </div>
            <a className="comment-reply" href="#">
              Reply
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}
