import styles from './flashcardDetails.module.css'

import Head from "next/head";
import Image from "next/image";
import { Flashcard } from "../types/types";
import Footer from './Footer';

export const FlashcardDetails = (props: {flashcard: Flashcard}) => {

  const {name, description, img, sandbox} = props.flashcard

  console.log("/flashcards/"+img)

  return (
    <div >
      <Head>
        <title className={styles.title}>{name}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>{name}</h1>
        <p>{description}</p>

        <Image
          src={"/flashcards/"+img}
          alt="Your Name"
          width={400}
          height={300}
        />
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
