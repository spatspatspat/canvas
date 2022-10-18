var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var pickWord = function () {
      var words = [
      "сонный",
      "паралич",
      "батюшка",
      "картошка"
    ];
    return words[Math.floor(Math.random() * words.length)];//  рандомное слово//
    };

    var setupAnswerArray = function (word) {
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }

      return answerArray;
    };
    var setupAnswerArray = function (word) {
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
          answerArray[i] = "_";
        }
  
        return answerArray;
      };
  
      var showPlayerProgress = function (answerArray) {
        alert(answerArray.join(" "));
      };
  
      var getGuess = function () {
        return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
      };
      var updateGameState = function (guess, word, answerArray) {
        var appearances = 0;
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
          }
        }
  
        return appearances;
      };
  
      var showAnswerAndCongratulatePlayer = function (answerArray) {
        showPlayerProgress(answerArray);
        alert("Отлично! Было загадано слово " + answerArray.join(""));
      };
  
      var drawSegment = function (incorrectGuesses) {
        ctx.lineWidth = 4;
  
        if (incorrectGuesses === 0) {             // части дела в зависимости от букв//
          ctx.strokeRect(20, 20, 20, 20);
        } else if (incorrectGuesses === 1) {
          ctx.beginPath();
          ctx.moveTo(30, 40);
          ctx.lineTo(30, 80);
          ctx.stroke();
        } else if (incorrectGuesses === 2) {
          ctx.beginPath();
          ctx.moveTo(30, 80);
          ctx.lineTo(10, 110);
          ctx.stroke();
        } else if (incorrectGuesses === 3) {
          ctx.beginPath();
          ctx.moveTo(30, 80);
          ctx.lineTo(50, 110);
          ctx.stroke();
        } else if (incorrectGuesses === 4) {
          ctx.beginPath();
          ctx.moveTo(30, 60);
          ctx.lineTo(10, 50);
          ctx.stroke();
        } else if (incorrectGuesses === 5) {
          ctx.beginPath();
          ctx.moveTo(30, 60);
          ctx.lineTo(50, 50);
          ctx.stroke();
        }
      };
  
      var word = pickWord();
      var answerArray = setupAnswerArray(word);
      var remainingLetters = word.length;
      var incorrectGuesses = 0;
  
      while (remainingLetters > 0) {
        showPlayerProgress(answerArray);
        var guess = getGuess();
        if (guess === null) {
          break;
        } else if (guess.length !== 1) {
          alert("Пожалуйста, введите одиночную букву.");
        } else {
          var correctGuesses = updateGameState(guess, word, answerArray);
  
          remainingLetters -= correctGuesses;
  
          if (correctGuesses === 0) {
            drawSegment(incorrectGuesses);
            incorrectGuesses++;
          }
        }
      }
  
      showAnswerAndCongratulatePlayer(answerArray);
      