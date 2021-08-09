export type TsChapters = "narrowing" | "generic"

export type JsChapters = "operator" | "array"

export type CssChapters = "flex" | "size" | "animation" | "pseudo-element"

export type CardFamily = "css" | "ts" | "js"

export type Flashcard = {
    name: string;
    url: string;
    keyWords: string[];
    description: string;
    cardFamily: CardFamily;
    sandbox: string;
    chapter: TsChapters | JsChapters | CssChapters
    level: 1 | 2 | 3 | 4 | 5
    documentation: string;
    related: string[];
    img: string;
}
