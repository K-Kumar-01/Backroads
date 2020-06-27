import React from "react"
import styles from "../../css/contact.module.css"
import Title from "../Title"

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/xrgyakkg"
          method="POST"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className={styles.formControl}
              rows="10"
              placeholder="Message for me"
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
