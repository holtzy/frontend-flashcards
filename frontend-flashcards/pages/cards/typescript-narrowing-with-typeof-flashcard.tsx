import { FlashcardDetails } from '../../components/FlashcardDetails';
import { flashcardList } from '../../utils/flashcardList';

export default function TsNarrowingTypeOf() {
  const card = flashcardList.filter(card => card.name === "Narrowing with typeof")[0]
  return (
    <FlashcardDetails
      flashcard={card}
    />
  )
}
