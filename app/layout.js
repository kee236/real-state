import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css'
import '../public/css/responsive.css'
import '../public/plugins/revolution/css/settings.css'
import '../public/plugins/revolution/css/layers.css'
import '../public/plugins/revolution/css/navigation.css'

import '../public/css/color-switcher-design.css'
import '../public/css/color-themes/default-theme.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'



import 'font-awesome/css/font-awesome.min.css';
import Navtail from './componant/Navtail';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  deScription: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Script src="js/jquery.js"></Script> 

<Script  src="plugins/revolution/js/jquery.themepunch.revolution.min.js"></Script>
<Script  src="plugins/revolution/js/jquery.themepunch.tools.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.actions.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.migration.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></Script>
<Script  src="plugins/revolution/js/extensions/revolution.extension.video.min.js"></Script>
<Script  src="js/main-slider-Script.js"></Script>
<Script src="js/mixitup.js"></Script>
<Script  src="js/bootstrap.min.js"></Script>
<Script  src="js/jquery.fancybox.js"></Script>
<Script  src="js/owl.js"></Script>
<Script  src="js/jquery-ui.js"></Script>
<Script  src="js/wow.js"></Script>
<Script  src="js/appear.js"></Script>
<Script  src="js/Script.js"></Script>

<Script  src="http://maps.google.com/maps/api/js?key=AIzaSyBKS14AnP3HCIVlUpPKtGp7CbYuMtcXE2o"></Script>
<Script  src="js/map-script-2.js"></Script>

<Script src="../js/color-settings.js"></Script>
      <body className={inter.className}>
      
        {children}
          {/*Scroll to top*/}
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <span className="fa fa-angle-double-up" />
  </div>
        
        </body>
      <Script src=''></Script>
    </html>
  )
}
