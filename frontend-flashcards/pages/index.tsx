import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Flashcards</title>
        <meta name="description" content="A set of flashcards to memorize all the core frontend development concepts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn & Memorize the core frontend dev concepts
        </h1>

        <p className={styles.description}>
          Read a few flashcards a day, and stop forgetting all the basics again and again
        </p>

        <div>
          <Image src="/typescript-logo.png" alt="Typescript Logo" className="logo"                 width={30}
            height={30} />
          <Image src="/javascript-logo.png" alt="Javascript Logo" className="logo" width={30}
            height={30} />
        </div>

        <div className={styles.grid}>
          <Link href="cards/typescript-narrowing-with-typeof-flashcard">
            <Image
              src="/flashcards/ts_narrowing_typeof.png" // Route of the image file
              alt="Your Name"
              width={400}
              height={300}
            />
          </Link>
          <Image
            src="/flashcards/ts_narrowing_typeof.png" // Route of the image file
            alt="Your Name"
            width={400}
            height={300}
          />
          <Image
            src="/flashcards/ts_narrowing_typeof.png" // Route of the image file
            alt="Your Name"
            width={400}
            height={300}
          />
          <Image
            src="/flashcards/ts_narrowing_typeof.png" // Route of the image file
            alt="Your Name"
            width={400}
            height={300}
          />
        </div>
      </main>

      <Footer/>
    </div>
  );
}
