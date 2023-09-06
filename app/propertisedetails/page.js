import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import PropertiseDetails from '../componant/PropertiseDetails'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
   <>
   <Topbar></Topbar>
   <PageTitle name= 'Propertise Details' title= 'Propertise Details'/>
   <PropertiseDetails/>
   <Client/>
   <FooterTwo/>
   </>
  )
}
