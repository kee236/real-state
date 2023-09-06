import React from 'react'

export default function Services() {
  return (
    <>
    {/*Services Section*/}
    <section className="services-section style-two">
      <div className="auto-container">
        {/*Sec Title*/}
        <div className="sec-title centered">
          <div className="title">We are Offering the Best Real Estate</div>
          <h2>Property Services</h2>
          <div className="separator" />
        </div>
        <div className="row clearfix">
          {/*Services Block*/}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-house-1" />
              </div>
              <h3>
                <a href="/propertisedetails">Homes For Sale</a>
              </h3>
              <div className="text">
                Here are the beautiful homes that are <br /> available for sale.
              </div>
            </div>
          </div>
          {/*Services Block*/}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-house-2" />
              </div>
              <h3>
                <a href="/propertisedetails">Homes For Rent</a>
              </h3>
              <div className="text">
                Comfortable &amp; Luxury homes are <br /> available for rent.
              </div>
            </div>
          </div>
          {/*Services Block*/}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-internet" />
              </div>
              <h3>
                <a href="/propertisedetails">Homes For Mortgage</a>
              </h3>
              <div className="text">
                Homes at the point of using normal <br /> distribution of letters.
              </div>
            </div>
          </div>
          {/*Services Block*/}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-hand-shake" />
              </div>
              <h3>
                <a href="/propertisedetails">Matching Buyer</a>
              </h3>
              <div className="text">
                Buyers of the Properties are available <br /> with us.
              </div>
            </div>
          </div>
          {/*Services Block*/}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-analytics" />
              </div>
              <h3>
                <a href="/propertisedetails">Price Analysis</a>
              </h3>
              <div className="text">
                Buyers of the Properties are available <br /> with us.
              </div>
            </div>
          </div>
          {/*Services Block*/}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-house-3" />
              </div>
              <h3>
                <a href="/propertisedetails">Homes On Lease</a>
              </h3>
              <div className="text">
                Buyers of the Properties are available <br /> with us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Services Section*/}
  </>
  
  )
}
