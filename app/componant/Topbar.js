'use client'

import React from 'react'

import Navtail from './Navtail';

export default function Topbar() {
  return (
    <>
    {/* Main Header*/}
    <header className="main-header">
      {/* Header Top One */}
      <div className="header-top-one">
        <div className="auto-container">
          <div className="inner-container clearfix">
            {/*Top Left*/}
            <div className="top-left">
              <ul className="links clearfix">
                <li>
                  <a href="#">
                    <span className="icon flaticon-message" />
                    Email us at : sales@yourwebsite.com
                  </a>
                </li>
              </ul>
            </div>
            {/*Top Right*/}
            <div className="top-right clearfix">
              {/*social-icon*/}
              <div className="social-icon">
                <ul className="clearfix">
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
                      <span className="fa fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="number">
                <li>
                  <span className="icon fa fa-phone" /> 1-800-555-1234{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header Top One End */}
      {/* Main Box */}
      <Navtail/>
      {/*Sticky Header*/}
      <div className="sticky-header">
     
        
         <Navtail/>
           
     
      </div>
      {/*End Sticky Header*/}
    </header>
    {/*End Main Header */}

    {/*Main Slider*/}
  

  {/*End Main Slider*/}
  </>
  
  

   
  )
}
