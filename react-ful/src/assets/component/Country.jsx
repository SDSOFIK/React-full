import { useState } from "react"
/// app props received  
// const Country = (props)

const Country = ({name , capital} ) => {
  const [isOpen , setOpen] = useState(false)
  const [message, setMessage] = useState(false)
  return (
    <>
    {/* <h1>Country Name : {props.name}</h1> */}
    <h1>Country Name : {name}</h1>
   {/* <h3>Capital Name : {props.capital}</h3> */}
   <h3>Capital Name : {capital}</h3>


   {/* <button
   onClickCapture={()=>{
    alert(`Hello react `)
   }}
   
   >Country and Capital</button> */}

   <button
   onClick={()=>setOpen(true)}
   
   >Country and Capital</button>

    {
      isOpen && (
        <div style={
          {
            background : "red",
            margin: "auto",
            justifyContent: "center"
          }
        }>
          <h1>
           
            {name}
            </h1>
            <h4>
              {capital}
            </h4>
            <button
           
            onClick={()=>{setOpen(false)
            setMessage(true);
              setTimeout(() => {
                setMessage(false)
    
  }, 1000);
            }}>close</button>
        </div>
      )
    }
    {
      message &&(
            <div  style={{background: "green"}}>
              Closed
            </div>
      )
    }
    </>
   
  )
}

export default Country