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






