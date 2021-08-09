import { FlashcardDetails } from '../../components/FlashcardDetails';
import { flashcardList } from '../../types/flashcardList';

export default function TsNarrowingTypeOf() {
  const card = flashcardList.filter(card => card.name === "Narrowing with typeof")[0]
  return (
    <FlashcardDetails
      flashcard={card}
    />
  )
}
