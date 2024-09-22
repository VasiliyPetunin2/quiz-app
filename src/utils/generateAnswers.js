export const generateAnswers = (correctAnswer, countries) => {
  const answers = [];
  while (answers.length < 3) {
    const randomIndex = Math.floor(Math.random() * (countries.length));
    if (!answers.includes(countries[randomIndex])) answers.push(countries[randomIndex]);
  }
  const randomIndex = Math.floor(Math.random() * (answers.length + 1));
  answers.splice(randomIndex, 0, correctAnswer);
  return answers;
}