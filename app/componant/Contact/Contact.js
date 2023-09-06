import React from 'react'

export default function Contact() {
  return (
    <>
  {/*Contact Page Section*/}
  <section className="contact-page-section">
    <div className="auto-container">
      {/*Sec Title*/}
      <div className="sec-title centered">
        <div className="title">Get in Touch</div>
        <h2>Contact Form</h2>
        <div className="separator" />
      </div>
      {/*Contact Form*/}
      <div className="contact-form">
        <form
          method="post"
          action="https://html.yogsthemes.com/demo/shina-realstate/sendemail.php"
          id="contact-form"
        >
          <div className="row clearfix">
            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="username"
                defaultValue=""
                placeholder="Name"
                required=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="email"
                defaultValue=""
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="subject"
                defaultValue=""
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="phone"
                defaultValue=""
                placeholder="Phone No."
                required=""
              />
            </div>
            <div className="form-group col-md-12 col-sm-12 col-xs-12">
              <textarea
                name="message"
                placeholder="Massage"
                defaultValue={""}
              />
            </div>
            <div className="form-group text-center col-md-12 col-sm-12 col-xs-12">
              <button type="submit" className="theme-btn btn-style-three">
                Send Now <span className="icon flaticon-send-message-button" />
              </button>
            </div>
          </div>
        </form>
      </div>
      {/*End Contact Form*/}
    </div>
  </section>
  {/*End Contact Page Section*/}
</>

  )
}
