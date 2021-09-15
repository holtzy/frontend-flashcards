import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.descriptionRow}>
        <p className={styles.title}>Frontend Flashcards</p>
        <p className={styles.description}>
          A set of 435 flashcards for frontend
          developers. They cover
          the most important concepts a web-developer should know, helping them
          to memorize and discover them.
        </p>
      </div>

      <hr className={styles.separator}/>

      <div className={styles.linksRow}>
        <div>
          <p className={styles.linksTitle}>Product</p>
          <a className={styles.link} href="">All cards</a>
          <a className={styles.link} href="">Random cards</a>
          <a className={styles.link} href="">Settings</a>
        </div>
        <div>
          <p className={styles.linksTitle}>Resources</p>
          <a className={styles.link} href="">MDN docs</a>
          <a className={styles.link} href="">Typescript docs</a>
        </div>
        <div>
          <p className={styles.linksTitle}>Other projects</p>
          <a className={styles.link} href="">Data To Viz</a>
          <a className={styles.link} href="">R Graph Gallery</a>
          <a className={styles.link} href="">Python Graph Gallery</a>
        </div>
        <div>
          <p className={styles.linksTitle}>Contact</p>
          <a className={styles.link} href="">Github</a>
          <a className={styles.link} href="">Twitter</a>
          <a className={styles.link} href="">Mail</a>
        </div>
      </div>

      <hr className={styles.separator}/>

      <div>
        <div className={styles.legalRow}>
          <p className={styles.legalText}>2021 | Frontend Flashcards | All Rights Reserved | Disclaimer</p>
        </div>
      </div>
    </footer>
  )
}
