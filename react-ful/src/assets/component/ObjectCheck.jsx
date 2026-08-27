import React from 'react'

const ObjectCheck = (props) => {
  return (

   <>
   
      <div style={{justifyContent: "center", alignItems: "center"}}>
    <h1>{props.item.Title}</h1>
    <p>{props.item.Description}</p>
   </div>

   {/* <div>
<form onSubmit={submitDate}>

  <input type="text" name="" id=""  placeholder='typing...........'/>
  <button type='submit'> Submit </button>
</form>
   </div> */}
   </>
  )
}

export default ObjectCheck