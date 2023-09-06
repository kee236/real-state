import Image from 'next/image'
import Topbar from './componant/Topbar'
import Menubar from './componant/Menubar'
import Property from './componant/Property'
import Houses from './componant/Houses'
import Heo from './componant/Heo'
import Property2 from './componant/Property2'
import Calltoaction from './componant/Calltoaction'
import Team from './componant/Team'
import Deafult from './componant/Deafult'
import Client from './componant/Client'
import Footer from './componant/Footer'
import Navtail from './componant/Navtail'
import SliderArea from './componant/SliderArea'
import ColorPlate from './componant/ColorPlate'




export default function Home() {
  return (
  <>
 
 <Topbar/>
<SliderArea/>
 <Property/>
 <Houses/>
 <Property2/>
 <Calltoaction/>
 <Team/>
 <Deafult/>
 <Client/>

 <Footer/>
 


<ColorPlate/>

  </>
  )
}
