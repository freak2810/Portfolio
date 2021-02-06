import styles from "../../styles/About.module.scss";
import contactStyles from "../../styles/Contact.module.scss";
import { useState } from "react";

async function sendEmail(name, from, message) {
  const APIKEY =
    "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";
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name != "" && message != "" && emailRegex.test(from)) {
    fetch("/api/contactEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, from: from, message: message }),
    }).then((res) => {
      if (res.status == 200) {
        alert("Submitted Successfully!");
      } else {
        alert("An error occurred while submitting your form...");
      }
    });
  } else {
    alert("Kindly Check all your fields before submitting");
  }
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className={styles.about}>
      <div className={styles.heading}>Contact</div>
      <div className={styles.details}>
        <div className={contactStyles.container}>
          <div className={contactStyles.contact}>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
              className={contactStyles.contactTextStyle}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
              className={contactStyles.contactTextStyle}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Type your message here...."
              tabindex="5"
              required
              className={contactStyles.contactTextStyle}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              className={contactStyles.contactTextStyle}
              onClick={() => sendEmail(name, email, message)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
