import styles from './flashcardDetails.module.css'

import Head from "next/head";
import Image from "next/image";
import { Flashcard } from "../utils/types";
import Footer from './Footer';
import Navbar from './Navbar';
import { useCallback, useState } from 'react';
import { throttle } from '../utils/utils';
import { SandboxPanel } from './SandboxPanel';

const MIN_INSPECTOR_HEIGHT_THRESHOLD = 200;

export const FlashcardDetails = (props: {flashcard: Flashcard}) => {

  const {name, description, img, sandbox} = props.flashcard

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

      <h1 className={styles.title}>{name}</h1>
      <div className={styles.description}><p>{description}</p></div>

      <div className={styles.imageContainer}>
        <Image
          src={"/flashcards/"+img}
          alt="Your Name"
          layout="fill"
          className={styles.image}
        />
      </div>

      <SandboxPanel url={sandbox}/>
      <Footer/>
    </div>
  );
}