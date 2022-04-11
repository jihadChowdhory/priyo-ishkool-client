import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../../imgs/about.jpg";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.halfPart}>
          <img src={aboutImg} alt="students-img" />
        </div>
        <div className={styles.halfPart}>
          <h1 className={styles.title}>Who we are</h1>
          <p className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            consequatur tempora reiciendis dolores tenetur impedit doloribus
            cumque voluptates ipsam perspiciatis aliquid harum veritatis labore
            sint adipisci inventore expedita! Temporibus quae provident
            accusantium vitae reprehenderit est, illo natus quod inventore
            ullam, adipisci, voluptatem repellendus? Cumque velit fuga error id
            cupiditate quia repudiandae impedit iusto debitis omnis, porro,
            ullam magnam amet quisquam, sapiente cum commodi dolore sunt numquam
            aperiam accusantium. Assumenda tempora tenetur rerum eos ea deleniti
            dolorem accusantium autem, explicabo esse eius quaerat aut mollitia
            saepe magni. Non rem, harum dolore nemo nam fugiat! Beatae illum
            laborum esse earum dicta dolorum!
          </p>
          <button className={styles.button}>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default About;
