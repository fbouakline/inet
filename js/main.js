new Vue({
  el: '#app',
  data: defaultData,
  methods: {
    nextQuestion: function () {
      if(this.questionCount <= this.totalQuestions) {
        if(!this.wrongAnswer)
          this.addResult(this.question, this.answer[0], this.isCorrectAnswer());

        if (this.isCorrectAnswer()) {
          if(this.questionCount < this.totalQuestions){
            this.getNextQuestion();
          }
          else {
            this.showResult = true;
          }

          this.wrongAnswer = false;
        } else {
          this.wrongAnswer = true;
        }

        this.userAnswer = "";
      }
    },

    addResult: function (question, answer, isCorrect) {
      this.results.push({"question": question, "answer": answer, "isCorrect": isCorrect});
      this.countScore = this.countScore + isCorrect;
    },

    setQuestion: function(question) {
      this.question = question;
    },

    setAnswer: function (answer) {
      this.answer = answer;
    },

    isCorrectAnswer: function () {
      for (var i = 0; i < this.answer.length; i++)
          if (this.userAnswer.toLowerCase() == this.answer[i].toLowerCase()) return true;
      return false;
    },

    skipQuestion: function() {

      this.wrongAnswer = false;
      this.addResult(this.question, this.answer[0], false);

      if(this.questionCount < this.totalQuestions)
        this.getNextQuestion();
      else
        this.showResult = true;
    },

    getNextQuestion: function() {
      this.questionCount++;

      this.setQuestion(questions[this.questionCount - 1].question);
      this.setAnswer(questions[this.questionCount - 1].answer);
    },

    resetData: function () {
      Object.assign(this.$data, this.$options.data.call(this))
    }
  }
})
