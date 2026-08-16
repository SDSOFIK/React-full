
export default function ContactForm() {
  return (
  <>
  <from >

    <label htmlFor="name"> Name</label>
    
    <input type="text" id='name' placeholder='Enter Your Name' />
    <br />
    <br />
    <label htmlFor="email"> Email</label>
    
    <input type="email" id='email' placeholder='Enter Your mail ' />
    <br />
<textarea
id="message"
  rows="5"
  cols="40"
  placeholder="Write something..."
></textarea>

<button type="submit">Submit</button>
  </from>
  
  </>
  )
}
