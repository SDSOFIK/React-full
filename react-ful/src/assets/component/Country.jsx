
/// app props received  
// const Country = (props)
const Country = ({name , capital} ) => {
  return (
    <>
    {/* <h1>Country Name : {props.name}</h1> */}
    <h1>Country Name : {name}</h1>
   {/* <h3>Capital Name : {props.capital}</h3> */}
   <h3>Capital Name : {capital}</h3>
    
    </>
   
  )
}

export default Country