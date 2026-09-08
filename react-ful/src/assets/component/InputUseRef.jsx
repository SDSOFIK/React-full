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


  return (
    <div>
        <input ref={inp} placeholder='type..........' />

        <button onClick={summitDate}> summit </button>

        <div>
            <ul ref={listValue}>

            </ul>
        </div>
    </div>
  )
}

export default InputUseRef