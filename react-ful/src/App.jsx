import React from 'react'
import ContactFrom from './assets/component/ContactForm'
import Menu from './assets/component/Menu'
import Footer from "./assets/component/Footer"
import Country  from './assets/component/Country'


export default function App() {
  return (
  <>
    <Menu/>
  <ContactFrom/>
  <Country name="Bangladesh" capital="Dhaka"/>
  <Footer/>
  
  </>

  
    )
}


