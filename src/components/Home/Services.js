import React from "react"
import services from "../../constants/services"
import Title from "../Title"
import styles from "../../css/services.module.css"
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
