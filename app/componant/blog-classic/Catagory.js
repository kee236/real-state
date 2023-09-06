import React from 'react'

export default function Catagory() {
  return (
    <>
  {/* Popular Category */}
  <div className="sidebar-widget popular-category">
    <div className="sidebar-title">
      <h3>Popular Category</h3>
      <div className="separator" />
    </div>
    <ul className="popular-category-list">
      <li>
        <a href="#">
          Single Family<span>(45)</span>
        </a>
      </li>
      <li>
        <a href="#">
          Apartment<span>(21)</span>
        </a>
      </li>
      <li>
        <a href="#">
          Condo<span>(23)</span>
        </a>
      </li>
      <li>
        <a href="#">
          Multi Family<span>(19)</span>
        </a>
      </li>
      <li>
        <a href="#">
          Villa<span>(19)</span>
        </a>
      </li>
      <li>
        <a href="#">
          Other<span>(25)</span>
        </a>
      </li>
    </ul>
  </div>
</>

  )
}
