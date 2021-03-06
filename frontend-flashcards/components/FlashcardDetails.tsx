import styles from './flashcardDetails.module.css'

import Head from "next/head";
import Image from "next/image";
import { Flashcard } from "../utils/types";
import Footer from './Footer';
import Navbar from './Navbar';
import { SandboxSection } from './SandboxSection';
import { RelatedSection } from './RelatedSection';
import { getRandomCardUrl } from '../utils/utils';
import Link from 'next/link';
import Pill from './Pill';

export const FlashcardDetails = (props: {flashcard: Flashcard}) => {

  const {name, description, imgAndUrl, sandbox, cardFamily, level} = props.flashcard

  return (
    <div >
      <Head>
        <title className={styles.title}>{name}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        isSettingsOpen={false}
        setIsSettingsOpen={() => console.log("todo")}
      />

      {/* Content */}
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.descriptionContainer}>
            <Pill text={cardFamily} family={cardFamily}/>
            <Pill text={"easy"} family={cardFamily}/>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <div>
              <a href={getRandomCardUrl()} className={styles.arrow}>&larr;</a>
              <a href={getRandomCardUrl()} className={styles.arrow}>&rarr;</a>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={"/flashcards/"+imgAndUrl+".png"}
                alt="Your Name"
                layout="fill"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>

      <RelatedSection imgAndUrl={imgAndUrl}/>

      { sandbox && <SandboxSection url={sandbox}/>}

      <Footer/>
    </div >
  );
}
