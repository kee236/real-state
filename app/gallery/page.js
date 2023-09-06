import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import GalleryGride from '../componant/GalleryGride'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
    <>
    <Topbar/>
    <PageTitle name = 'Gallery' title='Gallery'/>
    <GalleryGride/>
    <Client/>
    <FooterTwo/>
    </>
  )
}
