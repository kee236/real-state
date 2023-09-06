import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import Blog from '../componant/Blog'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'
import BlogClassic from '../componant/blog-classic/BlogClassic'
export default function page() {
  return (
    <>
     <Topbar/>
    <PageTitle name ='Blog' title= 'Blog'/>
 <BlogClassic/>
    <Client/>
    <FooterTwo/>
    </>
  )
}
