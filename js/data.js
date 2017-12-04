function defaultData () {

  questions = shuffle(listOfQuestions);

  return {
    questionCount: 1,
    answer: questions[0].answer,
    totalQuestions: questions.length,
    userAnswer:"",
    question: questions[0].question,
    showResult: false,
    wrongAnswer: false,
    CorrectAnswer: 0,
    results: [],
    countScore: 0,
  }

}
