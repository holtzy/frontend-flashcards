import styles from './flashcardDetails.module.css'

import Head from "next/head";
import Image from "next/image";
import { Flashcard } from "../types/types";
import Footer from './Footer';

export const FlashcardDetails = (props: {flashcard: Flashcard}) => {

  const {name, description, img, sandbox} = props.flashcard

  return (
    <div >
      <Head>
        <title className={styles.title}>{name}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
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
      </main>

      <iframe src={sandbox}
        style={{
          width: '100%',
          height: '500px',
          border: "solid",
          borderWidth: 2,
          borderRadius: '4px',
          overflow: 'hidden'
        }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      ></iframe>

      <Footer/>
    </div>
  );
}
