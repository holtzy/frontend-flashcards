import { FlashcardDetails } from '../../components/FlashcardDetails';
import { flashcardList } from '../../utils/flashcardList';

export default function Template() {
  const card = flashcardList.find(card => card.imgAndUrl === "ts-narrowing-typeof")

  if(!card){
    return
  }

  return (
    <FlashcardDetails
      flashcard={card}
    />
  )
}
