(function(){
	var irregularVerb = [
		['быть, являться','be','was, were','been'],
		['бить, колотить','beat','beat','beaten'],
		['становиться','become','became','become'],
		['начинать','begin','began','begun'],
		['гнуть','bend','bent','bent'],
		['держать пари','bet',	'bet',	'bet'],
		['кусать','bite',	'bit',	'bitten'],
		['дуть, выдыхать','blow',	'blew',	'blown'],
		['ломать, разбивать, разрушать', 'break',	'broke',	'broken'],
		['приносить, привозить, доставлять','bring',	'brought',	'brought'],
		['строить, сооружать','build',	'built',	'built'],
		['покупать, приобретать', 'buy',	'bought',	'bought'],
		['ловить, поймать, схватить', 'catch',	'caught',	'caught'],
		['выбирать, избирать', 'choose',	'chose',	'chosen'],
		['приходить, подходить', 'come',	'came',	'come'],
		['стоить, обходиться', 'cost',	'cost',	'cost'],
		['резать, разрезать', 'cut', 'cut','cut'],
		['иметь дело, распределять', 'deal',	'dealt', 'dealt'],	
		['копать, рыть', 'dig',	'dug',	'dug'],
		['делать, выполнять', 'do',	'did',	'done'],
		['рисовать, чертить', 'draw',	'drew',	'drawn'],
		['пить', 'drink',	'drank',	'drunk'],
		['ездить, подвозить', 'drive', 'drove',	'driven'],
		['есть, поглощать, поедать', 'eat',	'ate',	'eaten'],
		['падать', 'fall',	'fell',	'fallen'],
		['кормить', 'feed',	'fed', 'fed'],
		['чувствовать, ощущать', 'feel',	'felt',	'felt'],
		['драться, сражаться, воевать', 'fight',	'fought',	'fought'],
		['находить, обнаруживать', 'find',	'found', 'found'],
		['летать', 'fly',	'flew',	'flown'],
		['забывать о (чём-либо)', 'forget',	'forgot',	'forgotten'],
		['прощать', 'forgive',	'forgave',	'forgiven'],
		['замерзать, замирать', 'freeze',	'froze',	'frozen'],
		['получать, добираться', 'get',	'got',	'got'],
		['дать, подать, дарить', 'give',	'gave',	'given'],
		['идти, двигаться', 'go',	'went',	'gone'],
		['расти, вырастать', 'grow',	'grew',	'grown'],
		['вешать, развешивать, висеть', 'hang',	'hung',	'hung'],
		['иметь, обладать', 'have',	'had',	'had'],
		['слышать, услышать', 'hear',	'heard',	'heard'],
		['прятать, скрывать', 'hide',	'hid',	'hidden'],
		['ударять, поражать', 'hit', 'hit',	'hit'],
		['держать, удерживать, задерживать', 'hold', 'held',	'held']
	];

	// Все слова с переводом - это массивы из 4-х элементов, где 0 элемент слово на русском, остальные 3 формы глагола
	// Режим перевод с русского: 
	// Выбираем случайное слово и показываем первый элемент, отвечающий должен написать 3 формы


	var englishWord = document.querySelectorAll('.englishWord'), // все input с английскими словами 
			worldContainer = document.querySelector('.worldContainer'), // контейнер для слова на русском
			resultContainer = document.querySelector('.resultContainer'), // контейнер для вывода хвалебного отзыва о превильном ответе
			checkingWorld; // проверяемое слово, в случае неправильных глаголов у это массив из 3-х элементов

	/* Выбираем случайное слово, 
	засовываем в контейнер русское слово из первой ячейки в массиве
	сохраняем весь массив - русский перевод/все формы глагола */
	function takeWorld(){
		var randomWorld = randomInteger(0, irregularVerb.length-1);
		checkingWorld = irregularVerb[randomWorld]; // берем весь массив
		worldContainer.innerHTML = checkingWorld[0];

		return checkingWorld;
	}

	/* Функция случайного значения
	Нужна для нахождения случайного слова для проверки */
	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	} 

  /* Пишем что ответивший умница, если все хорошо */
	function showResult(){
		var success = [
		'Молодец, так держать',
		'Все правильно, давай еще одно слово',
		'Ты гений английского'
		];

		var successMessage = document.createElement('DIV');
		successMessage.style.transition = 'all 0.5s ease';
		successMessage.innerHTML = '<div class="alert alert-success" role="alert">' + success[randomInteger(0, success.length-1)] +'</div>';

		var messageContainner = document.querySelector('.resultContainer');
		messageContainner.innerHTML = '';
		messageContainner.appendChild(successMessage);

		setTimeout(function(){ successMessage.style.opacity = '0' }, 1000);
	}

	/* Следующее слово, предварительно отчистив результаты */
	function getNextWorld(){
		for (var i = englishWord.length - 1; i >= 0; i--) {
			englishWord[i].value = '';
		}

	 takeWorld();
	 englishWord[0].focus(); // Переключаем фокус в первый input
	}

	/* Если слово незнакомое, то показываем результаты*/
	function tipWorld(){
		for (var i = englishWord.length - 1; i >= 0; i--) {
			englishWord[i].value = checkingWorld[i+1];
		}
	}

	/* Управление с кнопок*/
	document.querySelector('.checkResult').onclick = checkWorld;
	document.querySelector('.tipWorld').onclick = tipWorld;
	document.querySelector('.nextWorld').onclick = getNextWorld;
	document.querySelector('.clearWorld').onclick = clearWorld;
	
	/* Управление с клавиатуры*/
	document.onkeyup = function(event){
		if (event.keyCode == 13){
			checkWorld();
		}
		if (event.keyCode == 80 && event.shiftKey){
			tipWorld();
		}
		if (event.keyCode == 32 && event.shiftKey){
			getNextWorld();
		}
		if (event.keyCode == 67 && event.shiftKey){
			clearWorld();
		}
	}

	function clearWorld(){
		for (var i = englishWord.length - 1; i >= 0; i--) {
			englishWord[i].value = '';
		}
	}

	/*Проверяем результаты введенных фраз*/
	function checkWorld(){

	 var counter = true; // Изменится, если хоть одно слово не правильно

		for (var i = englishWord.length - 1; i >= 0; i--) {

			var englishWordString = englishWord[i].value.toString();

			englishWordString.replace(/(^\s+|\s+$)/g,''); // Удаляем случайные пробелы в начали и конце слова

			if (englishWordString.toLowerCase() != checkingWorld[i+1].toLowerCase()){
				englishWord[i].value = '';
		 	 	counter = false;
			}
		}

	 if(counter){
	 	 showResult();
	 	 getNextWorld();
	 }

	}


	takeWorld();

})(); 

	
