import styles from './relatedSection.module.css'
import { flashcardList } from '../utils/flashcardList';
import Pill from './Pill';

export const RelatedSection = (props: {imgAndUrl: string}) => {

  const card = flashcardList.find(card => card.imgAndUrl === props.imgAndUrl)

  if(!card){
    return
  }

  const family = card.cardFamily
  const familyLabel = family === "ts" ?
    "Typescript" :
    family === "js" ?
      "Javascript" :
      "css"
  const chapter = card.chapter
  const allCardsInChapter = flashcardList
    .filter(card => card.chapter === chapter)
    .map((card,i) => {
      return(
        <span key={i} className={styles.cardUnit}>
          <span
            className={card.imgAndUrl === props.imgAndUrl
              ? styles.cardUnitMain
              : styles.cardUnit}
          >{card.name}</span>
          <span className={styles.separator}/>
        </span>
      )
    })

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Pill text={familyLabel} family={family}/>
        <span className={styles.separator}/>
        <p>{chapter}</p>
        <span className={styles.separator}/>
        <div className={styles.allCardUnits}>
          {allCardsInChapter}
        </div>
      </div>
    </div>
  );
}
