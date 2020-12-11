
var score;
		function checkAnswer(inputId, answers){
			var userAnswer = document.getElementById(inputId).value;
			userAnswer = userAnswer.toLowerCase();
			for(var i = 0; i < answers.length; i++){
				if(userAnswer == answers[i]){
					score++;
					break;
				}
			}
		}
		
		function checkAnswers() {
			score = 0;

			checkAnswer("userAnswer1", ["гитара", "фортепиано", "пианино"]);
			checkAnswer("userAnswer2", ["эминем", "маршал", "слим шейди", "маршал мэтэрс", "маршал брюс мэтэрс"]);
			checkAnswer("userAnswer3", ["наушники", "колонка", "колонки"]);
			checkAnswer("userAnswer4", ["электрогитара"]);
			if (score >= 3){
				alert("Вы успешно ответили на данные вопросы (ваш счет равен " + score + " из 4), спасибо за внимание и прочтение!");
			}
			else{
				alert("Вы ответили на данные вопросы неуспешно (ваш счет равен " + score + " из 4), спасибо за внимание, но я буду рад, если вы перечитаете и ответите лучше!");
			}

		}