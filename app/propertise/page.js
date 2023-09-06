import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import PropertiseGride from '../componant/PropertiseGride'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
    <>
    <Topbar></Topbar>
    <PageTitle title= 'Propertiise' name= 'Propertiise'/>
    <PropertiseGride/>
    <Client/>
    <FooterTwo/>
    </>
  )
}
