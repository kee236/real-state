import React from 'react'

export default function Calltoaction() {
  return (
    <section
    className="call-to-action"
    style={{ backgroundImage: "url(images/background/1.jpg)" }}
  >
    <div className="auto-container">
      <div className="row clearfix">
        <div className="content-column col-md-8 col-sm-12 col-xs-12">
          <h2>Find Best Place For Living</h2>
          <div className="text">
            Spend vacations in best hotels and resorts find the great place of
            your <br /> choice using different searching options.
          </div>
        </div>
        <div className="btn-column col-md-4 col-sm-12 col-xs-12">
          <a href="/contact" className="theme-btn btn-style-two">
            Contact Now <span className="icon flaticon-send-message-button" />
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}
