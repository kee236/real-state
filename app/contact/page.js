import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import Contact from '../componant/Contact/Contact'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
    <>
    <Topbar/>
    <PageTitle name ='Contact' title='Contact'/>
    <Contact/>
    <Client/>
    <FooterTwo/>
    </>
  )
}
