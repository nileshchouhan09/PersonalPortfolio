import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const formRef = useRef();

  
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
 

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
        await emailjs.send("service_cqo50dp", "template_p3g1svo", {
            from_name: form.name,
            to_name: "Nilesh",
            from_email: "form.email",
            to_email: "chauhannilesh251@gmail.com",
            message: form.message,
        },"_KUvNmZWWa73VCL1_")
        setLoading(false);
        toast.success("Message sent successfully");
        setForm({ name: "", email: "", message: "" });
    } catch (error) {
        setLoading(false);
        toast.error("something went wrong");
        console.log(error);
    } finally {
      setLoading(false);
    }

    
  };
  return (
    <section className="c-space my-20" id="contact">
      <p className="head-text"> Contact Me </p>

      <div className={` ${isMobile ? "bg-none flex justify-center items-center": isTablet ? "bg-none flex justify-center items-center" : "relative min-h-screen flex items-center justify-center flex-col p-10 m-5 bg-[url('/assets/terminal.png')]  bg-cover " }`}>
       

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col space-y-8 "
          >
            <label htmlFor="name">
              <span className="field-label">Full Name</span>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="field-input mt-2"
              />
            </label>
            <label htmlFor="email">
              <span className="field-label">Email</span>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="field-input mt-2"
              />
            </label>
            <label htmlFor="message">
              <span className="field-label">Message</span>
              <textarea
                required
                rows={5}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="field-input mt-2"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>


            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
