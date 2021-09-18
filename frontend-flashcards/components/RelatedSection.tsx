import styles from './relatedSection.module.css'
import { flashcardList } from '../utils/flashcardList';

export const RelatedSection = (props: {imgAndUrl: string}) => {

  const card = flashcardList.find(card => card.imgAndUrl === props.imgAndUrl)

  if(!card){
    return
  }

  const family = card.cardFamily
  const chapter = card.chapter
  const allCardsInChapter = flashcardList
    .filter(card => card.chapter === chapter)
    .map((card,i) => {
      return(<p key={i}>{card.name}</p>)
    })

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p>{family}</p>
        <p>{chapter}</p>
        <div>
          {allCardsInChapter}
        </div>
      </div>
    </div>
  );
}
