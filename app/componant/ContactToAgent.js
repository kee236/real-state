import React from 'react'

export default function ContactToAgent() {
  return (
    <>
    {/*Agent Form Section*/}
    <section className="agent-form-section">
      <div className="auto-container">
        {/*Sec Title*/}
        <div className="sec-title centered">
          <div className="title">Meet Our Agents</div>
          <h2>Contact To Agent</h2>
          <div className="separator" />
        </div>
        {/*Team Form Section*/}
        <div className="team-form">
          <form
            method="post"
            action="https://html.yogsthemes.com/demo/shina-realstate/contact.html"
          >
            <div className="row clearfix">
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="username"
                  defaultValue=""
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="username"
                  defaultValue=""
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="username"
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
        {/*End Team Form Section*/}
      </div>
    </section>
    {/*End Agent Form Section*/}
  </>
  
  )
}
