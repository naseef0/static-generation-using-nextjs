import React from 'react';
// Custom components
import AppHead from "../src/components/Header/AppHead"
// Styles
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div id="myApp00000001">
      <AppHead />
      <div >
        <Component {...pageProps} />
      </div>
    </div >
  )
}

export default MyApp
