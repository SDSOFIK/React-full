================== react Hooks =====================

What is a hook ?

hook সরাসরি কেনো function ba class এর নাম না hook হইল react laibray একটা feature   

Hook হলো React-এর একটি বিশেষ ফিচার, যা Functional Component-এর ভিতরে state, lifecycle, context ইত্যাদি ব্যবহার করতে দেয়।

সহজভাবে বললে, Hook = React-এর built-in function যা component-এ অতিরিক্ত ক্ষমতা যোগ করে।

অনেক hook bult-in থাকে আবার custom hook o বানানো যায় 

hook লেখার rules 

hook function er নিছেই লেখা হয় অ্যান্ড কোনো লুব বা condition এর মধে হুক দেওয়া যায় না 

যে সব হুক বেশি উসে হয় 

1. useState()

2. useEffect()

3. useContext()

4. useRef()

5. useMemo()

6. useCallback()
7. useReducer()


=========== useRef() =================

useRef() হইল একটা react er bull-in function 
useRef() দিয়ে সরাসরি DOM moulton করা যায় এবং  render hoy na বা রেলড হয়ে না 

আমরা যদি কেন কিছু জমা বা stor করতে চাই তাহলে আমরা তাহলে useRef() korte pari 

Code example 

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


useRef() ak kothay storage kora jay 

custom css o design kora jay like class change 
আমরা যদি কেন div বা element এর ডিজাইন পরিবতন করতে চাই তাহলে আমরা useRef diye DOM menulaption korte পারি 

উদাহারন

*{
const text = useRef();

let complete =() =>{
  text.current.classList.add("line-through");
  }

  let uncomplete =()=>{
    text.current.classList.remove("line-through")
  }



div className="max-w-5xl m-auto">
<h1 ref={text} className="text-black text-3xl">
  task one complete and landing use useRef class change 
</h1>

  <button onClick={complete} className="text-white bg-green-400 rounded-lg m-2 p-2 hover:bg-green-200 ">Complete</button>
  <button onClick={uncomplete} className="text-white bg-green-400 rounded-lg m-2 p-2 hover:bg-green-200 ">UnComplete</button>


</div>

}*


=============== hook useRef() mutable property ========================

আমরা যদি কেন ভালু বা ডাটা পরিবতন করতে চাই কিন্তু component কোনো রে-রেন্ডার করতে না চাই তাহলে আমরা এই mutable property use kori 

=============== useRef Caching Expensive Computation ===================

যে Calculation করতে অনেক সময় লাগে তাকে Expensive Computation বলে।
যদি অনেক বড় একটা Calculation করি বার বার লুপ চালাই তাহলে বার বার পেজ লোড নেয় তাহলে  Performance Slow করে তাই  useRef দিয়ে Cache করা kora hoy 

code Examle 

import { useRef } from "react";

function App() {
  const resultRef = useRef(null);

  if (resultRef.current === null) {
    resultRef.current = calculateTotal();
  }

  return (
    <h1>{resultRef.current}</h1>
  );
}



================ useState ===============

useState() হইল react এর একটা হুক  

