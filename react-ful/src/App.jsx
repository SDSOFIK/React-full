import React from 'react'
import ContactFrom from './assets/component/ContactForm'
import Menu from './assets/component/Menu'
import Footer from "./assets/component/Footer"
import Country  from './assets/component/Country'
import ObjectCheck from './assets/component/ObjectCheck'
import InputUseRef from './assets/component/InputUseRef'


const data = {
  "Title": "React Course",
  "Description": "HTML CSS JavaScript React"
}


export default function App() {
  return (
  <>
    <Menu/>
  <ContactFrom/>
  <Country name="Bangladesh" capital="Dhaka"/>
  <ObjectCheck item={data}/>

  <InputUseRef/>
  <Footer/>
  
  </>

  
    )
}


