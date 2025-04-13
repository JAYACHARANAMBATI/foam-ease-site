function Contact() {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  