import React from 'react'

export default function GalleryGride() {
  return (
    <>
  {/*Gallery MixitUp Section*/}
  <section className="gallery-mixitup-section">
    <div className="auto-container">
      {/*MixitUp Galery*/}
      <div className="mixitup-gallery">
        {/*Filter*/}
        <div className="filters text-center clearfix">
          <ul className="filter-tabs filter-btns clearfix">
            <li className="active filter" data-role="button" data-filter="all">
              All
            </li>
            <li className="filter" data-role="button" data-filter=".apartment">
              Apartments
            </li>
            <li className="filter" data-role="button" data-filter=".loft">
              Loft
            </li>
            <li className="filter" data-role="button" data-filter=".villas">
              Villas
            </li>
            <li className="filter" data-role="button" data-filter=".home">
              Single home
            </li>
          </ul>
        </div>
        <div className="filter-list row clearfix">
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/6.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/6.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix loft villas home all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/7.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/7.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix villas all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/8.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/8.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/9.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/9.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix all apartment loft col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/10.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/10.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix apartment all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/11.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/11.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/12.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/12.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix apartment all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/13.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/13.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix villas all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/14.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/14.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix apartment all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/15.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/15.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix  villas all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/16.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/16.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Default Portfolio Item*/}
          <div className="default-portfolio-item mix apartment all col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <figure className="image-box">
                <img src="images/gallery/17.jpg" alt="" />
              </figure>
              {/*Overlay Box*/}
              <div className="overlay-box">
                <div className="overlay-inner">
                  <div className="content">
                    <a href="/propertisedetails" className="link">
                      <span className="fa fa-home" />
                    </a>
                    <a
                      href="images/gallery/17.jpg"
                      className="lightbox-image link"
                      data-fancybox="images"
                      data-caption=""
                      title=""
                    >
                      <span className="icon fa fa-search-plus" />
                    </a>
                    <h3>
                      <a href="/propertisedetails">Apartments</a>
                    </h3>
                    <div className="properties">5 Property</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Styled Pagination*/}
      <ul className="styled-pagination text-center">
        <li>
          <a href="#" className="active">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li className="next">
          <a href="#">Next</a>
        </li>
      </ul>
      {/*End Styled Pagination*/}
    </div>
  </section>
  {/*End Gallery MixitUp Section*/}
</>

  )
}
