import React from 'react'

export default function Tag() {
  return (
    <>
    {/* Popular Tags */}
    <div className="sidebar-widget popular-tags">
      <div className="sidebar-title">
        <h3>Tags</h3>
        <div className="separator" />
      </div>
      <a href="/blog-details">Apartment</a>
      <a href="/blog-details">Condo</a>
      <a href="/blog-details">House</a>
      <a href="/blog-details">Single Family</a>
      <a href="/blog-details">Plaza</a>
      <a href="/blog-details">Home</a>
      <a href="/blog-details">Villas</a>
      <a href="/blog-details">Market</a>
    </div>
  </>
  
  )
}
