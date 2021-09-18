import { Flashcard } from "./types";

export const flashcardList: Flashcard[] = [
  {
    imgAndUrl: "ts-narrowing-typeof",
    name: "Narrowing with typeof",
    keyWords: ["narrowing", "typeof", "coercion"],
    description: "The typeof javascript operator allows to determine the nature of a value. It can be used to determine...",
    cardFamily: "ts",
    sandbox: "https://codesandbox.io/s/github/holtzy/frontend-flashcards/tree/main?file=/Sandbox/typescript/narrowing.ts",
    chapter: "narrowing",
    level: 2,
    documentation: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
    related: ["Narrowing with instanceof"]
  },
  {
    imgAndUrl: "ts-narrowing-instanceof",
    name: "Narrowing with instanceof",
    keyWords: ["narrowing", "instanceof", "coercion"],
    description: "The instanceof javascript operator allows to determine the nature of a value. It can be used to determine...",
    cardFamily: "ts",
    sandbox: "https://codesandbox.io/s/dank-leaf-57se1?file=/Sandbox/typescript/narrowing.ts",
    chapter: "narrowing",
    level: 2,
    documentation: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
    related: ["Narrowing with typeof"]
  },
  {
    imgAndUrl: "css-definition",
    name: "CSS definition",
    keyWords: ["css", "vocabulary"],
    description: "CSS stands for Cascading Style Sheet. It's a markup language allowing to style web pages using a set of rules.",
    cardFamily: "css",
    sandbox: undefined,
    chapter: "introduction",
    level: 1,
    documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    related: ["css-syntax"]
  },
  {
    imgAndUrl: "css-syntax",
    name: "CSS Syntax",
    keyWords: ["css", "vocabulary"],
    description: "CSS allows to style a web-page thanks to a set of rules. Each part of a rule has a specific denomination. It's important to remember this vocabulary to efficiently understand documentation.",
    cardFamily: "css",
    sandbox: undefined,
    chapter: "introduction",
    level: 1,
    documentation: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
    related: ["css-definition"]
  },
  {
    imgAndUrl: "css-position",
    name: "The position property",
    keyWords: ["css", "property", "position"],
    description: "The position property is a crucial property allowing to control where a html element is displayed on a webpage.",
    cardFamily: "css",
    sandbox: undefined,
    chapter: "position",
    level: 2,
    documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
    related: [],
  }
]

