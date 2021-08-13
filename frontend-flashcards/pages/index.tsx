import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Settings from '../components/Settings';
import styles from '../styles/Home.module.css';
import { getRandomCardUrl } from '../utils/utils';

export default function Home() {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <div >
      <Head>
        <link
          rel="preload"
          href="/fonts/virgil/Virgil.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
          rel="stylesheet"
        />
        <title>Frontend Flashcards</title>
        <meta name="description" content="A set of flashcards to memorize all the core frontend development concepts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />
      {isSettingsOpen &&
        <Settings
          isSettingsOpen={isSettingsOpen}
          setIsSettingsOpen={setIsSettingsOpen}
        />
      }
      <Footer/>

      <div className={styles.landingContainer}>
        <h1 className={styles.title}>
          Learn & Memorize the core frontend dev concepts
        </h1>

        <p className={styles.description}>
          Read a few flashcards a day, and stop forgetting all the basics again and again
        </p>

        <div className={styles.optionsContainer}>
          <Image
            src="/logo/typescript-logo.png"
            alt="Typescript Logo"
            className={styles.logo}
            width={30}
            height={30} />
          <Image
            src="/logo/javascript-logo.png"
            alt="Javascript Logo"
            className={styles.logo}
            width={30}
            height={30} />
          <Image
            src="/logo/CSS-logo.png"
            alt="Javascript Logo"
            className={styles.logo}
            width={30}
            height={30} />
          <p> | </p>
          <Link href={getRandomCardUrl()}>
            <div className={styles.button}>
              Random
            </div>
          </Link>
        </div>


        <div className={styles.annotationTopLeft}>
          <p>132 flashcards currently available!</p>
        </div>
        <div className={styles.skateboard}>
          <Image
            src="/drawing/skateboard.png"
            alt="Javascript Logo"
            className={styles.logo}
            width={200}
            height={200} />
        </div>
      </div>
    </div>
  );
}
