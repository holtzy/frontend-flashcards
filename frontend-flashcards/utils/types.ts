export type TsChapters = "narrowing" | "generic"

export type JsChapters = "operator" | "array"

export type CssChapters = "introduction" | "flex" | "size" | "animation" | "pseudo-element" | "position"

export type CardFamily = "css" | "ts" | "js"

export type Flashcard = {
    name: string;
    keyWords: string[];
    description: string;
    cardFamily: CardFamily;
    sandbox?: string;
    chapter: TsChapters | JsChapters | CssChapters
    level: 1 | 2 | 3 | 4 | 5
    documentation: string;
    related: string[];
    imgAndUrl: string; // img name, also used to build the URL
}
