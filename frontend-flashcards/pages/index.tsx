import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Settings from '../components/Settings';
import styles from '../styles/Home.module.css';
import { getRandomCardUrl } from '../utils/utils';
import flashcardOverview from '../public/misc/flashcard-overview.png'
import Button from '../components/Button';

export default function Home() {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <div >
      <Head>
        <link
          rel="preload"
          href="fonts/virgil/fg-virgil.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100@400@900&display=swap"
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

      <div className={styles.landingSection}>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
          Learn & Memorize the core frontend dev concepts
          </h1>
          <p className={styles.description}>
          Read a few flashcards a day, and stop forgetting all the basics again and again
          </p>
          <div className={styles.buttonWide}>
            <Button onClick={() => {}}>
              <Link href={getRandomCardUrl()}>
              Show me a card
              </Link>
            </Button>
          </div>
        </div>

        <div className={styles.flashcardOverview}>
          <Image
            src={flashcardOverview}
            alt="Overview of the flashcards"
            className={""}
          />
          <div className={styles.buttonNarrow}>
            <Button onClick={() => {}}>
              <Link href={getRandomCardUrl()}>
                Show me a card
              </Link>
            </Button>
          </div>
        </div>

        <div className={styles.signature}>
          A project by <a href="https://www.yan-holtz.com">Yan Holtz</a>
        </div>

        {/* <div className={styles.optionsContainer}>
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
        </div> */}

        {/* <div className={styles.annotationTopLeft}>
          <p>132 flashcards currently available!</p>
        </div> */}
        {/* <div className={styles.skateboard}>
          <Image
            src="/drawing/skateboard.png"
            alt="Javascript Logo"
            className={styles.logo}
            width={200}
            height={200} />
        </div> */}
      </div>

      <div className={styles.languageSection}>
        <h2>Flashcards are about developing for the web</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            <h3>CSS</h3>
            <p>234 flashcards</p>
            <p>CSS controls the style of a webpage. The flashcards cover basic
              concepts like the position property to harder ones like animation.
            </p>
            <Button onClick={() => {}}>
              <Link href="/">Browse</Link>
            </Button>
          </div>

          <div className={styles.cards}>
            <h3>Javascript</h3>
            <p>34 flashcards</p>
            <p>
              Javascript makes the web an interactive place. Learn what a ternary operator is,
              remember the various arrays methods and more.
            </p>
            <Button onClick={() => {}}>
              <Link href="/">Browse</Link>
            </Button>
          </div>

          <div className={styles.cards}>
            <h3>Typescript</h3>
            <p>131 flashcards</p>
            <p>
              Typescript makes your life easier by checking heaps of errors for you. It can be
              seen as a struggle at the beginning, but mastering its core concepts will make your code
              more error-prone.
            </p>
            <Button onClick={() => {}}>
              <Link href="/">Browse</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
