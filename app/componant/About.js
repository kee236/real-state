import React from 'react'

export default function About() {
  return (
    <>
  {/*About Section*/}
  <section
    className="about-section"
    style={{ backgroundImage: "url(images/background/7.jpg)" }}
  >
    <div className="auto-container">
      <div className="row clearfix">
        {/*Content Column*/}
        <div className="content-column col-md-6 col-sm-12 col-xs-12">
          <div className="inner-column">
            {/*Sec Title*/}
            <div className="sec-title">
              <div className="title">About Shina</div>
              <h2>Who We Are</h2>
              <div className="separator" />
            </div>
            <div className="bold-text">
              Shina is a premium WordPress theme for real estate agents where
              modern aesthetics are combined with tasteful simplicity and where
              the ease of use is achieved without compromise in your ability to
              customise the design.
            </div>
            <div className="text">
              <p>
                Whether you are a real estate agent looking to build a website
                for your company or a web developer seeking a perfect WordPress
                theme for your next project, you are certain to appreciate the
                numerous features and benefits that our theme provides.
              </p>
              <p>
                This is not a theme that only takes care of the front of a real
                estate business. This is also a WordPress-based property
                management system which allows you to own and maintain a real
                estate marketplace, coordinate your agents, accept submissions
                and offer membership packages.
              </p>
            </div>
          </div>
        </div>
        {/*Image Column*/}
        <div className="image-column col-md-6 col-sm-12 col-xs-12">
          <div className="image">
            <img src="images/resource/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End About Section*/}
</>

  )
}
