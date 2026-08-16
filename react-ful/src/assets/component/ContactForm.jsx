export default function ContactForm() {
  return (
    <form
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Contact Us
      </h2>

      <label>Name</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          boxSizing: "border-box",
        }}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter Your Email"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          boxSizing: "border-box",
        }}
      />

      <label>Message</label>
      <textarea
        rows="5"
        placeholder="Write your message..."
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          resize: "none",
          boxSizing: "border-box",
        }}
      ></textarea>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Submit
      </button>
    </form>
  );
}