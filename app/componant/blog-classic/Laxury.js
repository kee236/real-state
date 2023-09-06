import React from 'react'

export default function Laxury() {
  return (
    <>
    {/* Properties Posts */}
    <div className="sidebar-widget properties-posts">
      <div className="sidebar-title">
        <h3>Laxury Properties</h3>
        <div className="separator" />
      </div>
      <article className="post">
        <figure className="post-thumb">
          <a href="/blog-details">
            <img src="images/resource/post-thumb-6.jpg" alt="" />
          </a>
        </figure>
        <h4>
          <a href="/blog-details">401 Biscayne Boulevard</a>
        </h4>
        <div className="address">Unit 4/Street 14 Indus Street </div>
        <div className="post-info">Price: 11,412</div>
      </article>
      <article className="post">
        <figure className="post-thumb">
          <a href="/blog-details">
            <img src="images/resource/post-thumb-7.jpg" alt="" />
          </a>
        </figure>
        <h4>
          <a href="#">10 Romain St, Twin Peaks</a>
        </h4>
        <div className="address">Unit 4/Street 14 Indus Street </div>
        <div className="post-info">Price: 11,412</div>
      </article>
      <article className="post">
        <figure className="post-thumb">
          <a href="/blog-details">
            <img src="images/resource/post-thumb-8.jpg" alt="" />
          </a>
        </figure>
        <h4>
          <a href="/blog-details">Gorgeous Farm in Myrtle</a>
        </h4>
        <div className="address">Unit 4/Street 14 Indus Street </div>
        <div className="post-info">Price: 11,412</div>
      </article>
    </div>
  </>
  
  )
}
