import React from 'react'

export default function manu() {

  const manuItem = ["Home" , "About", "Contact Us", "My Skill" ]
  return (
   <>
   
    {manuItem.map((item , index)=>{
return <il key={index}> {item}</il>
    })}
   
    

   </>
  )
}
