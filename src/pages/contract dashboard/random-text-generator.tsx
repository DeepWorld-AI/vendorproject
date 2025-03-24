export const generateRandomSentence = (): string => {
  const getRandomWord = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const length = Math.floor(Math.random() * 8) + 3;
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");
  };

  const wordCount = Math.floor(Math.random() * 10) + 5;
  const sentence = Array.from({ length: wordCount }, getRandomWord);

  let finalSentence = sentence.join(" ") + ".";
  return finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1);
};
