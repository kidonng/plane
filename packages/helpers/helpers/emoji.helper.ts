export const convertHexEmojiToDecimal = (emojiUnified: string): string => {
  if (!emojiUnified) return "";

  return emojiUnified
    .split("-")
    .map((e) => parseInt(e, 16))
    .join("-");
};

export const emojiCodeToUnicode = (emoji: string) => {
  if (!emoji) return "";

  // convert emoji code to unicode
  const uniCodeEmoji = emoji
    .split("-")
    .map((emoji) => parseInt(emoji, 10).toString(16))
    .join("-");

  return uniCodeEmoji;
};