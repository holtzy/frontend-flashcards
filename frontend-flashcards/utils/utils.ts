import { flashcardList } from "./flashcardList"

export const getRandomCardUrl = () => {
  const sampleSize = flashcardList.length
  const cardId = Math.floor(Math.random() * sampleSize)
  return "/cards/" + flashcardList[cardId].url
}
