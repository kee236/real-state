import React from 'react'
import Topbar from '../componant/Topbar'
import PageTitle from '../componant/PageTitle'
import About from '../componant/About'
import Services from '../componant/Services'
import Team from '../componant/Team'
import Client from '../componant/Client'

import FooterTwo from '../componant/FooterTwo'

export default function page() {
  return (
    <>
<Topbar/>
<PageTitle title = 'About' name= 'About Us'/>
<About/>
<Services/>
<Team/>
<Client/>

<FooterTwo/>
    </>
  )
}
