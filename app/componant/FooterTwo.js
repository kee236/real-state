import React from 'react'

export default function FooterTwo() {
  return (
    <>
    {/*Footer Style Two*/}
    <footer className="footer-style-two">
      <div className="auto-container">
        {/*Upper Box*/}
        <div className="upper-box">
          <div className="row clearfix">
            {/*Logo Column*/}
            <div className="logo-column col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="logo">
                <a href="/">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
            </div>
            {/*form Column*/}
            <div className="form-column col-lg-5 col-md-6 col-sm-6 col-xs-12">
              <form
                method="post"
                action="https://html.yogsthemes.com/demo/shina-realstate/contact.html"
              >
                <div className="form-group clearfix">
                  <input
                    type="email"
                    name="email"
                    defaultValue=""
                    placeholder="Enter Your Email"
                    required=""
                  />
                  <button type="submit" className="theme-btn">
                    <span className="fa fa-send" />
                  </button>
                </div>
              </form>
            </div>
            {/*Social Column*/}
            <div className="social-column col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <ul className="social-icon-two">
                <li>
                  <a href="#">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="row clearfix">
            {/*big column*/}
            <div className="big-column col-md-7 col-sm-12 col-xs-12">
              <div className="row clearfix">
                {/*Footer Column*/}
                <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                  <div className="footer-widget touch-widget">
                    <h2>Get In Touch</h2>
                    <div className="text">
                      Shina Real Estate brings wide range of choice, steadily
                      updated property list and market trend for you to figure out
                      your right decision.It is a premium WordPress theme for real
                      estate where modern aesthetics are combined with tasteful
                      simplicity.
                    </div>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                  <div className="footer-widget post-widget">
                    <h2>Popular Posts</h2>
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-1.jpg" alt="" />
                        <a className="overlay" href="/blog-details" />
                      </figure>
                      <div className="text">
                        <a href="/blog-details">Modern Design Building </a>
                      </div>
                      <div className="post-info">1 October, 2017</div>
                    </article>
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-2.jpg" alt="" />
                        <a className="overlay" href="/blog-details" />
                      </figure>
                      <div className="text">
                        <a href="/blog-details">Real Eatate Expo 2018</a>
                      </div>
                      <div className="post-info">10 October, 2017</div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            {/*big column*/}
            <div className="big-column col-md-5 col-sm-12 col-xs-12">
              <div className="row clearfix">
                {/*Footer Column*/}
                <div className="footer-column col-md-5 col-sm-6 col-xs-12">
                  <div className="footer-widget links-widget">
                    <h2>links</h2>
                    <ul className="links">
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="#">Blog Grid</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                      <li>
                        <a href="/agent">Our Agents</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-md-7 col-sm-6 col-xs-12">
                  <div className="footer-widget links-widget">
                    <h2>Contact info</h2>
                    <ul className="list-style-one style-two">
                      <li>
                        <span className="icon fa fa-phone" />
                        Call us 1-800-555-1234
                      </li>
                      <li>
                        <span className="icon fa fa-envelope-o" />
                        info@shinarealestate.com
                      </li>
                      <li>
                        <span className="icon fa fa-map-marker" />
                        121 King Street, Melbourne Victoria 3000 Turkey.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Bottom*/}
      <div className="footer-bottom">
        <div className="copyright">
          © Copyright 2018 All rights reserved – Design By Yogs Themes
        </div>
      </div>
    </footer>
    {/*End Main Footer*/}
  </>
  
  )
}
