import React from 'react'

export default function manu() {
  const isLonIn = true

  const manuItem = ["Home" , "About", "Contact Us", "My Skill" ]
  return (
   <>
   
    {manuItem.map((item , index)=>{
return <ul>
  <il key={index}> {item}</il>
  <li>{isLonIn ? "logIn": "logout"}</li>
</ul>
li
    })}
   
    

   </>
  )
}
