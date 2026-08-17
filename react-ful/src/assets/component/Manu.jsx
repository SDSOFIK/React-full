import React from 'react'

export default function Manu() {
  // if else handle system 
  const isLogIn = true

  // IIFE je Function তৈরি → সাথে সাথে call হয়ে যায়

  const rol = "admin"

  const manuItem = ["Home" , "About", "Contact Us", "My Skill" ]
  return (
   <>
   <ul style={{justifyContent:"center", display:"flex", gap:"30px", listStyle:"none"}}>
    {manuItem.map((item , index)=>{
    return  <li key={index}>{item}</li>
    })}
    {/*   // if else handle system 
 */}
    <li>{isLogIn ? "login": "logout"}</li>
    <li style={{color: "red" , border: "1px solid blue", padding: "1px"}}>{
      (()=>{
        if(rol === "admin"){
          return "Admin"
        }
        else if(rol ==="super admin"){
          return "super admin"
        }
        else{
          return "view"
        }
      })()
      }</li>
   </ul>
    
   </>
  )
}
