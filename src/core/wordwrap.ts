export function wordWrap(text:string, columns:number): string {
  const textIsShorterThanColumns = text.length <= columns

  // stop condition for recursivity
  if(textIsShorterThanColumns) {
    return text
  }

  var choppedWord:string, remainingText:string
  
  [choppedWord, remainingText] = chopAt(text, hasWhiteSpace(text) ? text.indexOf(' '): columns)

  return addNewLineCharAtTheEndOf(choppedWord) + wordWrap(remainingText,columns)
}

const chopAt = (text:string,position:number) => ([text.substring(0, position), text.substring(position).trim()])
const addNewLineCharAtTheEndOf = (word:string) => (word + "\n")
const hasWhiteSpace = (text:string) => (text.includes(' '))
