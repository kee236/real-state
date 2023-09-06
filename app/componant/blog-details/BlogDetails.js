import React from 'react'
import BlogArea from './BlogArea'
import Search from '../blog-classic/Search'
import Catagory from '../blog-classic/Catagory'
import Laxury from '../blog-classic/Laxury'
import Archive from '../blog-classic/Archive'
import Tag from '../blog-classic/Tag'


export default function BlogDetails() {
  return (
    <>
    {/*Sidebar Page Container*/}
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
<BlogArea/>
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
