import React from 'react'
import Blog from './Blog'
import Search from './Search'
import Catagory from './Catagory'
import Laxury from './Laxury'
import Archive from './Archive'
import Tag from './Tag'

export default function BlogClassic() {
  return (
    <>
    <div className="sidebar-page-container">
  <div className="auto-container">
    <div className="row clearfix">

<Blog/>

<div className="sidebar-side col-lg-4 col-md-4 col-sm-12 col-xs-12">
  <aside className="sidebar">
<Search/>
<Catagory/>
<Laxury/>
<Archive/>
<Tag/>
  </aside>
</div>
    </div>
  </div>
</div>



    </>
  )
}
