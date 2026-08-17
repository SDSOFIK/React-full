=============================  Primary Understanding On Component ================================

ReactJS functional components are JavaScript functions that return a JSX element

Return JSX: Functional components return JSX (a syntax extension that allows HTML-
like code inside JavaScript).

JSX looks similar to HTML, but it has a special syntax that lets it be converted into
JavaScript code.

They are simple, lightweight, and powerful tools for rendering UI and handling logic

Stateless (before hooks): Originally, functional components were stateless and used only
for rendering UI based on props.

No, this keyword: Unlike class components, functional components do not have a this
context.

I
Hooks: With hooks, functional components can manage state and side effects, making
them just as powerful as class components.

Component কী? 

component হল ছোট ছোট করে ভাগ করে নিয়ে বার বার use kora 
যেমন navber একটা componet, hero selider akta , contract akta, and fooder akta componet aive vag kore ak akta componet 


কেন Component ব্যবহার করা হয়?

Reusable – একই Component বারবার ব্যবহার করা যায়।
Maintainable – কোড ছোট ছোট অংশে ভাগ থাকে, তাই পরিচালনা করা সহজ।
Readable – কোড বুঝতে সুবিধা হয়।
Scalable – বড় অ্যাপ তৈরি করা সহজ হয়।

component 2 প্রকার


1. class commponent
example 
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

2. function component 

হল একটি arro function based function 

retrun এর ভিতর রে যা যা থাকে তা আমরা ভিউ তে দেখতে পারি বা fondend এ দেখতে পাই 
কেন কিছু পরিবতন করতে আমদের সাথে সাথে fondend পরিবতন হয়ে যায় এইটা vite er akta hot component relod 

example 

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}


======================= component create src>component>মanu.jex>hader.jsx>footer.js ===============
আমরা যদি কোন component onk gula div rakhte cai thle <> </> এর মাঝখানে লিখব সব code 
Component লিখার নিয়াম সব সময় ১ম অক্ষর বড় হাতের হবে 

what is a jsx ?

jsx হলো React-এর একটি syntax যার মাধ্যমে JavaScript-এর ভিতরে HTML-এর মতো কোড লেখা যায়। আমরা যদি কেন কন calass likhe চাই তাহলে camalCase করে সব লিখতে হবে like className 

আমরা যদি কেন string print korte চাই থালকে 
const name = "sofik"
{ name} viwe dakhbe 

> style লিখার নিয়ম  java scrip er 1st bondoni pore ta veribal liser jnni {{}}
Example: style ={{color:"read"}}


=========================== array =========================

যদি আমরা কেন array list এ নিতে চাই তাহলে আমরা মাপ করে বডিতে নিয়ে আসব 
example : 

const food = ["apple" , "orang", "banana" ]


food.map((item , index)=>{
  return <li key={index}> item<li/> })  এইখানে key হলইও একটা unicek value যেটা দেই আমরা array value টা ধরি

  সব গুলা { এর মাঝখানে রাখতে হবে }

  jsx js code করতে চাইলে অনল এক লাইনে এর কোড করে জায় যদি আমরা inline ba ak line na kori তাহলে আমরা exprestion ba functon kore korbe 

  eximple:
  const islogIn = trune

  {isLongIn ? logout : login}





JSX JAVASCRIPT XML
>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code

>It is commonly used in React applications to define the structure and content of UI components.

>JSX is not a separate language, but a preprocessor that conts the HTML-like code into plain JavaScript.
>It enables you to use JavaScript expressions within your HTML-like code, making it easier to dynamically generate content.

>JSX can improve code readability and maintainability by allowing developers to write declarative, intuitive code.

>jsx এ html code 


===================== short jsx if else handle =========================

jsx a if else বা এক লাইন ছারা js likha jay na তাই আমরা একটা ভেরিয়াবে তৈরি করে নিব 
examole 

let login = true 

login ? yes : no 

==================== JSX Immediately invoked function =====================
Immediately invoked function হইল  function টি create হয়ের সাথে সাথে  execute বা  সাথে সাথে run করবে 

jsx er ভিতর if else if else চালানর জন্য 

{ javasecrip expretion er vitor 
2 টা () দিয়ে দিব অ্যান্ড আকেতে ভিতরে operation calabo 1 এর ভিতর এ একটা arro funtion diye logic dibo 
(()=>{
  if(){
    retrun
  }
  else if(){
    retun 
  }
}
)()

}

================== jsx loop ========================

যদি আমেদের অনেক গুলা ডাটা বার বার প্রিন্ট করতে হয় বা কন গানাতিক কিছু করতে হয়ে তাহলে আমরা loop use করি 
example : 

coant cuntry = [bd , uk , usa , ind , pk napel]


map এর ভিতর আমরা একটা arro function dibo ২ টা পারেমাটার দিব ১ টা ভালু বা আইটেম ২ টা ইন্দেক্স যে array tar কোন index a ace oita diya unick kora jay 
cuntry.map((item , index)=>{
  <li key = {index}> {item}<li>
})


কেন আমরা JSX Map use করি অন্য কিছু কেন use kori na 

১এ হইতেতে jsx a loop use করা যায় না সুধু expretion use করা যায়  r for loop akta state no a exptetion map হলিও exprestion tai র map ber ber view retrun korta pare loop return দেয় না code ta execution kore

=========================== JSX Conditional Rendering Using If Else================

code shor and re ues করার জন্য আমরা যদি একটা function upor delecer 
jex a call kore 

আমরা যদি if else condition diye return korte pari 

const isLogin = (ststus)=>{
  if(ststus){
    retun "your a logied"
  }else {
    retrun "please login fest"
  }
}

<>
retun
<div>
<p> {isLogin(status: true)} </p>

</div>

============= JSX Conditional Rendering Using Switch Statement ==================

 const rol = "admin"

 {
      (()=>{
        switch(rol){
          case "admin":
            return "Admin"
            case "super admin":
        return "Super Admin";
        default:
        return "Viewer";
        }
      })()
      }


      