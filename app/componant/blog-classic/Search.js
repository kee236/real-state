import React from 'react'

export default function Search() {
  return (
    <>
  {/* Search */}
  <div className="sidebar-widget search-box">
    <form
      method="post"
      action="https://html.yogsthemes.com/demo/shina-realstate/contact.html"
    >
      <div className="form-group">
        <input
          type="search"
          name="search-field"
          defaultValue=""
          placeholder="Search"
          required=""
        />
        <button type="submit">
          <span className="icon fa fa-search" />
        </button>
      </div>
    </form>
  </div>
</>

  )
}
