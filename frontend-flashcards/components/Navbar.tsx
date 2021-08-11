import styles from './navbar.module.css'
import Image from 'next/image';

type NavbarProps = {
    isSettingsOpen: boolean;
    setIsSettingsOpen: (arg: boolean) => void;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.container}>
      <div>
        <Image
          src="/logo/FrontendFlashcardsLogo.png"
          alt="Typescript Logo"
          className={styles.logo}
          width={20}
          height={20} />
      </div>
      <div onClick={() => props.setIsSettingsOpen(!props.isSettingsOpen)}>🔧</div>
    </nav>
  )
}
