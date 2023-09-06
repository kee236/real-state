import React from 'react'

export default function Houses() {
  return (
    <>
    {/*Houses Section*/}
    <section className="houses-section">
      <div className="auto-container">
        {/*Sec Title*/}
        <div className="sec-title centered">
          <div className="title">We are Offering the Best Real Estate</div>
          <h2>Best House to Purchase</h2>
          <div className="separator" />
        </div>
        <div className="row clearfix">
          {/*House Block*/}
          <div className="house-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="image">
                <img src="images/resource/house-1.jpg" alt="" />
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="content">
                      <h3>HOUSE</h3>
                    </div>
                    <a className="purchased" href="/propertisedetails">
                      Make Best House to Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*House Block*/}
          <div className="house-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="image">
                <img src="images/resource/house-2.jpg" alt="" />
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="content">
                      <h3>HOUSE</h3>
                    </div>
                    <a className="purchased" href="/propertisedetails">
                      Make Best House to Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*House Block*/}
          <div className="house-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="image">
                <img src="images/resource/house-3.jpg" alt="" />
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="content">
                      <h3>HOUSE</h3>
                    </div>
                    <a className="purchased" href="/propertisedetails">
                      Make Best House to Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Houses Section*/}
  </>
  
  )
}
