import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import SignelTeam from '../componant/SignelTeam'

import FeatureSection from '../componant/FeatureSection'
import ContactToAgent from '../componant/ContactToAgent'
import Client from '../componant/Client'
import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
    <>
    <Topbar/>
    <PageTitle title= 'Agent Details' name= 'JONE MICHAL'/>
    <SignelTeam/>
    <FeatureSection/>
    <ContactToAgent/>
    <Client/>
    <FooterTwo/>
    </>
  )
}
