const wordMap = {
  'вопрос': ['вопрос', 'вопроса', 'вопросов'],
  'ошибка': ['ошибку', 'ошибки', 'ошибок']
};

const declension = (number, titles) => {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod10 === 1 && mod100 !== 11) return titles[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return titles[1];
  return titles[2];
}

export const formatPhrase = (input) => {
  const [numberStr, word] = input.split(' ');
  const number = parseInt(numberStr, 10);

  return `${number} ${declension(number, wordMap[word])}`;
}