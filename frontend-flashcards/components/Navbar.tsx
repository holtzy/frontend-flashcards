import styles from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { getRandomCardUrl } from '../utils/utils';

type NavbarProps = {
    isSettingsOpen: boolean;
    setIsSettingsOpen: (arg: boolean) => void;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <p className={styles.title}>Frontend Flashcards</p>
      </Link>
      <div>
        <a className={styles.item} href="/">
          ALL
        </a>
        <a className={styles.item} href="/">
          ABOUT
        </a>
        <span className={styles.item} onClick={() => props.setIsSettingsOpen(!props.isSettingsOpen)}>
          SETTINGS
        </span>
        <span className={styles.item}>
          <Button onClick={() => console.log("toto")}>
            <Link href={getRandomCardUrl()}>
              Show me a card
            </Link>
          </Button>
        </span>
      </div>
    </nav>
  )
}

