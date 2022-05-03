import '../styles/globals.css'
import Dj from './Dj'
import React, {useEffect} from "react"
import Home from './index'
import Supermodel from './Supermodel'
import "bootstrap/dist/css/bootstrap.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
   <Component
   {...pageProps}
   />

   
  )
}

export default MyApp
