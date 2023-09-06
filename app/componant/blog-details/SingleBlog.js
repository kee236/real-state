import React from 'react'

export default function SingleBlog() {
  return (
    <div className="blog-detail">
  <div className="inner-box">
    <div className="image">
      <img src="images/resource/news-24.jpg" alt="" />
    </div>
    <div className="lower-content">
      <ul className="post-meta">
        <li>
          <span className="icon fa fa-user-md" />
          Rento Admin
        </li>
        <li>
          <span className="icon fa fa-calendar-check-o" />
          21 Feb, 2018
        </li>
        <li>
          <span className="icon fa fa-comments-o" />
          Comments 05
        </li>
      </ul>
      <h2>Resources that we thought you may find useful</h2>
      <div className="text">
        <p>
          When it comes to real estate, it’s all about location. But when it
          comes to staging a home to sell the highest possible price, the
          importance of location applies to more than just the street.
        </p>
        <p>
          The placement of your furniture and accessories can make or break a
          room and potentially even a sale.
        </p>
        <h3>Why it matter?</h3>
        <p>
          The look and feel of a space is created by the way the various items
          in that room are positioned. If you put them in the wrong place you
          can instantly diminish the overall appearance of the area, regardless
          of whether the items individually are stylish and on-trend.
        </p>
        <p>
          Good placement, however, will have the opposite effect, to the point
          where even less attractive furniture located correctly around the room
          can produce amazing results.
        </p>
        <blockquote>
          To be successful in real estate, you must always and consistently put
          your clients’ best interests first. When you do, your personal needs
          will be realized beyond your greatest expectations.
        </blockquote>
        <div className="row clearfix">
          <div className="column col-md-6 col-sm-6 col-xs-12">
            <div className="image">
              <img src="images/resource/news-25.jpg" alt="" />
            </div>
          </div>
          <div className="column col-md-6 col-sm-6 col-xs-12">
            <p className="margin">
              We do what is best for our clients, in order to get full
              satisfaction and perfection. Our primary goal is to make thing
              work and make them happy on the eve of a Nantucket voyage, I
              regarded those marble tablets, and by the murky light of that
              darkened, doleful day read the fate of the whalemen who had gone
              before me.
            </p>
          </div>
        </div>
      </div>
      {/*post-share-options*/}
      <div className="post-share-options clearfix">
        <div className="pull-left tags">
          <span className="fa fa-tags" />
          <a href="/blog-details">Apartment,</a> <a href="/blog-details">Condo,</a>{" "}
          <a href="/blog-details">Multi Family,</a> <a href="/blog-details">Villa</a>
          <a href="/blog-details">Multi Family,</a> <a href="/blog-details">Villa</a>
        </div>
        <div className="pull-right">
          <ul className="social-icon-three">
            <li>
              <a href="#">
                <span className="fa fa-facebook-f" />
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
      </div>
    </div>
  </div>
</div>

  )
}
