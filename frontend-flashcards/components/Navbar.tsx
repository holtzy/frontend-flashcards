import styles from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {
    isSettingsOpen: boolean;
    setIsSettingsOpen: (arg: boolean) => void;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.container}>
      <div className={styles.element}>
        <Link href="/">
          <Image
            src="/logo/FrontendFlashcardsLogo.png"
            alt="Typescript Logo"
            className={styles.logo}
            width={20}
            height={20} />
        </Link>
      </div >
      <div
        className={styles.element}
        onClick={() => props.setIsSettingsOpen(!props.isSettingsOpen)}
      >
          🔧
      </div>
    </nav>
  )
}

