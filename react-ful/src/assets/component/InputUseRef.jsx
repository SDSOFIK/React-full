import { useRef } from "react"

const InputUseRef = () => {
const inp = useRef();
const listValue = useRef();
const summitDate =()=>{
    const input = inp.current.value.trim();
    const li = document.createElement("li");
    li.textContent = input

listValue.current.appendChild(li)
inp.current.value = "";
}
 const image = useRef();
 const profileImage =useRef();
 const handleImage = ()=>{

  const profile = image.current.files[0];
  const imageUrl = URL.createObjectURL(profile);
  
  profileImage.current.innerHTML ="";
  const data= document.createElement("img");
  data.src = imageUrl;

profileImage.current.appendChild(data);

 }

  return (

    <>
    
    
    <div>
        <input ref={inp} placeholder='type..........' />

        <button onClick={summitDate}> summit </button>

        <div>
            <ul ref={listValue}>

            </ul>
        </div>
    </div>

    <div>
      <label htmlFor=""> Choose picture</label>
      <br />
      <input ref={image}  type="file" />
      <br />
      <button className="" onClick={handleImage}>summit</button>

      <div ref={profileImage} className="h-400 w-100">


      </div>
    </div>
    
    </>
  )
}

export default InputUseRef