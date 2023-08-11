import "./contact-us.css";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  const handleSubmit = () => {
    alert("Submitted");
  };
  return (
    <div
      className="contact-body"
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        // alignItems: "center",
        gap: "30px",
      }}
    >
      <div
        className="left-contact"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          // backgroundColor: "red",
          justifyContent: "space-between",
          height: "30%",
          marginTop: "100px",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>Want to Contact us?</h1>
        <h1 style={{ fontSize: "18px" }}>
          We're thrilled to hear from you! Whether you have questions, feedback,
          or simply want to say "Ciao!", we're here to connect. Reach out to us
          through any of the following channels:
        </h1>
      </div>
      <div
        className="right-contact"
        style={{ display: "flex", marginTop: "100px" }}
      >
        <form onSubmit={handleSubmit}>
          <div
            className="right-contact-form"
            style={{
              border: "2px solid gray",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              borderRadius: "5px",
            }}
          >
            <label style={{ marginBottom: "10px" }}>Name</label>
            <input
              type="text"
              style={{
                width: "400px",
                padding: "5px",
                borderBottom: "1px solid gray",
                outline: "none",
                marginBottom: "10px",
              }}
            />
            <label style={{ marginBottom: "10px" }}>Email</label>
            <input
              type="email"
              style={{
                width: "400px",
                padding: "5px",
                borderBottom: "1px solid gray",
                outline: "none",
                marginBottom: "10px",
              }}
            />
            <label style={{ marginBottom: "10px" }}>message</label>
            <input
              type="textarea"
              style={{
                width: "400px",
                padding: "5px",
                borderBottom: "1px solid gray",
                outline: "none",
                height: "220px",
                marginBottom: "10px",
              }}
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: "10px",
                border: "1px solid black",
                width: "30%",
                borderRadius: "5px",
              }}
            >
              Send
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
