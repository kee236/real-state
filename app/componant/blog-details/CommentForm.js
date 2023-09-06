import React from 'react'

export default function CommentForm() {
  return (
    <>
    {/* Comment Form */}
    <div className="comment-form">
      <div className="group-title">
        <h2>Leave a Reply</h2>
        <div className="separator" />
      </div>
      {/*Comment Form*/}
      <form
        method="post"
        action="https://html.yogsthemes.com/demo/shina-realstate/blog.html"
      >
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 col-xs-12 form-group">
            <input type="text" name="username" placeholder="Name" required="" />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 form-group">
            <input type="email" name="email" placeholder="Email" required="" />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 form-group">
            <input type="text" name="text" placeholder="Subject" required="" />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <textarea
              name="message"
              placeholder="Yout Comments"
              defaultValue={""}
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <button
              className="theme-btn btn-style-two"
              type="submit"
              name="submit-form"
            >
              Post Comments <span className="icon flaticon-send-message-button" />
            </button>
          </div>
        </div>
      </form>
    </div>
    {/*End Comment Form */}
  </>
  
  )
}
