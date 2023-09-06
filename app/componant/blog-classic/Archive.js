import React from 'react'

export default function Archive() {
  return (
    <>
    {/* Archive Category */}
    <div className="sidebar-widget archive-category">
      <div className="sidebar-title">
        <h3>Archives</h3>
        <div className="separator" />
      </div>
      <ul className="archive-list">
        <li>
          <a href="#">
            August <span>2017</span>
          </a>
        </li>
        <li>
          <a href="#">
            September<span>2017</span>
          </a>
        </li>
        <li>
          <a href="#">
            October<span>2017</span>
          </a>
        </li>
        <li>
          <a href="#">
            November<span>2017</span>
          </a>
        </li>
      </ul>
    </div>
  </>
  
  )
}
