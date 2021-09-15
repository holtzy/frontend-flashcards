import styles from './fullWidthImage.module.css'
import Image from "next/image";
import next from 'next';

// This component allows to use the next.js Image component with an image that
// will fill the available width and keeping its aspect ratio

type FullWidthImageProps = {
    src: string;
    alt: string;
}

export default function FullWidthImage(props: FullWidthImageProps) {
  return (
    // This div is necessary, which is super weird.
    // Otherwise image will fit its available height, not width.
    <div>
      <div className={styles.imageContainer}>
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          className={styles.image}
        />
      </div>
    </div>
  )
}
