import styles from './settings.module.css'
import Image from 'next/image';

const LOGO_SIZE = "30px"

type SettingsProps = {
    isSettingsOpen: boolean;
    setIsSettingsOpen: (arg: boolean) => void;
}

export default function Settings(props: SettingsProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.closeButton}
        onClick={() => props.setIsSettingsOpen(!props.isSettingsOpen)}
      >
          &times;
      </div>
      <div className={styles.languageContainer}>

        <p>Language:</p>

        <div className={styles.logoContainer}>
          <Image
            src="/logo/typescript-logo.png"
            alt="Typescript Logo"
            className={styles.logo}
            width={LOGO_SIZE}
            height={LOGO_SIZE} />
          <Image
            src="/logo/javascript-logo.png"
            alt="Javascript Logo"
            className={styles.logo}
            width={LOGO_SIZE}
            height={LOGO_SIZE} />
          <Image
            src="/logo/CSS-logo.png"
            alt="Javascript Logo"
            className={styles.logo}
            width={LOGO_SIZE}
            height={LOGO_SIZE} />
        </div>
      </div>

      <div className={styles.levelContainer}>
        <p>Level:</p>
        <div className={styles.numberContainer}>
          <span className={styles.number}>1️⃣</span>
          <span className={styles.number}>2️⃣</span>
          <span className={styles.number}>3️⃣</span>
          <span className={styles.number}>4️⃣</span>
          <span className={styles.number}>5️⃣</span>
        </div>
      </div>

    </div>
  )
}
