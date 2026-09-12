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

