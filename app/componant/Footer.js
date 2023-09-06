import React from 'react'

export default function Footer() {
  return (
    <footer
    className="main-footer"
    style={{ backgroundImage: "url(images/background/2.jpg)" }}
  >
    <div className="auto-container">
      {/*Widgets Section*/}
      <div className="widgets-section">
        <div className="row clearfix">
          {/*Info column*/}
          <div className="info-column col-md-5 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="title-box">
                <div className="title">Contact us</div>
                <h2>Get in Touch</h2>
                <div className="separator" />
              </div>
              <div className="text">
                Shina Real Estate brings wide range of choice, steadily updated
                property list and market trend for you to figure out your right
                decision.It is a premium WordPress theme for real estate where
                modern aesthetics are combined with tasteful simplicity.
              </div>
              <ul className="list-style-one">
                <li>
                  <span className="icon fa fa-phone" />
                  Call us 1-800-555-1234{" "}
                </li>
                <li>
                  <span className="icon fa fa-envelope-o" />
                  info@shinarealestate.com
                </li>
                <li>
                  <span className="icon fa fa-clock-o" />
                  Open House on the 24th, – 12 mid day to 5 pm.
                </li>
              </ul>
              <a href="/contact" className="theme-btn btn-style-two">
                Schedule a Visit <span className="icon fa fa-edit" />
              </a>
            </div>
          </div>
          {/*Map column*/}
          <div className="map-column col-md-7 col-sm-12 col-xs-12">
            <div className="inner-column">
              {/*Map Outer*/}
              <div className="map-outer">
                <div className="map-info-box">
                  <h3>Office Address</h3>
                  <div className="text">
                    121 King Street, Melbourne Victoria 3000 Turkey ABN 11 119 159
                    741
                  </div>
                </div>
                {/*Map Canvas*/}
                <div
                  className="map-canvas"
                  data-zoom={12}
                  data-lat="-37.817085"
                  data-lng="144.955631"
                  data-type="roadmap"
                  data-hue="#ffc400"
                  data-title="Envato"
                  data-icon-path="images/icons/map-marker.png"
                  data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@nextdevagency.com'>info@nextdevagency.com</a>"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="column col-md-6 col-sm-12 col-xs-12">
            <div className="copyright">
              © Copyright 2018 All rights reserved – Design By Yogs Themes
            </div>
          </div>
          <div className="column col-md-6 col-sm-12 col-xs-12">
            <ul className="footer-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
