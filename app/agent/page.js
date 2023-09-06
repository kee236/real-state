import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import Agents from '../componant/Agents'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
    <>
    <Topbar/>
    <PageTitle title = 'AGENTS' name= 'Our Agent'/>
    <Agents/>
    <Client/>
    <FooterTwo/>
    </>
  )
}
