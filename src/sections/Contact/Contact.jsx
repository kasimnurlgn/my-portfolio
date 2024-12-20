import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ContactStyles.module.css";
import Swal from "sweetalert2";
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once:true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        event.target.reset(); // Clear the form after submission
      });
    }
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle  " data-aos="fade-down" data-aos-delay="150">
        Contact
      </h1>
      <form
        action=""
        onSubmit={onSubmit}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
