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
  data.className = "w-full h-full object-cover";

profileImage.current.appendChild(data);

 }
 let fname , lname , email , message = useRef();
let result = useRef();
const ShowSummitDate =()=>{

  let name = fname.value;
  let lastName = lname.value;
  let Email = email.value;
  let Message = message.value;

result.current.classList.remove("hidden");

result.current.querySelector("#name").textContent = name+ " " + lastName;
result.current.querySelector("#email").textContent =Email;
result.current.querySelector("#message").textContent =Message;
  


  
}

  return (

    <>
    
    
    <div className="max-w-5xl mx-auto w-full md:w-1/2 min-h-24 border border-amber-200 p-5">
  <h1 className="text-4xl">
    Input Value Li Tag Listing
  </h1>

  <input
    ref={inp}
    placeholder="type.........."
    className="border p-2"
  />

  <button
    onClick={summitDate}
    className="bg-blue-500 text-white px-4 py-2 ml-2"
  >
    Submit
  </button>

  <div>
    <ul ref={listValue}
    className="list-disc"
    ></ul>
  </div>
</div>

<div className="max-w-5xl mx-auto mt-5 p-5 border">

  <h1>image upload use useRef</h1>
 

  <br />
<label
  htmlFor="imageUpload"
  className="inline-block bg-blue-500 text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-blue-600"
> <img src="data:image/jpeg;base64,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" alt="" /> </label>
  <input ref={image} type="file"
  id="imageUpload"
  accept="image/*"
  className="hidden"/>

  <br />

  <button
    onClick={handleImage}
    className="bg-green-500 text-white px-4 py-2 mt-3"
  >
    Submit
  </button>

  <div
    ref={profileImage}
    className="h-[400px] w-full mt-5 border"
  ></div>
</div>



<div  className="max-w-5xl mx-auto mt-5 p-5 border">

  <h1>
    name email select 
  </h1>

  <div>
   <label>First Name</label>

  <input
  ref={(fn)=>fname =fn}
    type="text"
    placeholder="Enter Your Name"
    className="w-full p-2.5 mt-1 mb-[15px] border border-gray-300 rounded-md box-border"
  />
     <label>Last Name</label>

  <input
  ref={(ln)=>lname = ln}
    type="text"
    placeholder="Enter Your Name"
    className="w-full p-2.5 mt-1 mb-[15px] border border-gray-300 rounded-md box-border"
  />

  <label>Email</label>

  <input
  ref={(e)=>email=e}
    type="email"
    placeholder="Enter Your Email"
    className="w-full p-2.5 mt-1 mb-[15px] border border-gray-300 rounded-md box-border"
  />

  <label>Message</label>

  <textarea
  ref={(m)=>message =m}
    rows="5"
    placeholder="Write your message..."
    className="w-full p-2.5 mt-1 mb-5 border border-gray-300 rounded-md resize-none box-border"
  ></textarea>

  <button
    onClick={ShowSummitDate}
    className="w-full p-3 border-0 rounded-md cursor-pointer text-base"
  >
    Submit
  </button>
  </div>


</div>


<div ref={result} className="max-w-5xl mx-auto mt-5 p-5 border gap-3 hidden" >

  <p className="flex">Name:<p id="name"></p></p>
  <p className="flex" >Email:<p id="email"></p></p>
 <div>
  <p className="flex" >Message</p><span id="message"></span>
 </div>
  

</div>

    </>
  )
}

export default InputUseRef