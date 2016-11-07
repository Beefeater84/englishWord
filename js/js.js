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
		['держать, удерживать, задерживать', 'hold', 'held',	'held'],
		["ранить", "hurt",	"hurt",	"hurt"],
		["хранить, сохранять", "keep",	"kept",	"kept"],
		["знать", "know",	"knew",	"known"],
		["класть, положить, покрывать", "lay",	"laid",	"laid"],
		['писать, записывать','write','wrote','written'], 
		['победить, выиграть','win','won','won'], 
		['носить (одежду)','wear','wore','worn'], 
		['просыпаться, будить','wake','woke','woken'], 
		['понимать, постигать','understand','understood','understood'], 
		['бросать, кидать, метать','throw','threw','thrown'], 
		['думать, мыслить, размышлять','think','thought','thought'], 
		['рассказывать','tell','told','told'], 
		['рвать, отрывать','tear','tore','torn'], 
		['учить, обучать','teach','taught','taught'], 
		['брать, хватать, взять','take','took','taken'], 
		['качаться, вертеться','swing','swung','swung'], 
		['плавать, плыть','swim','swam','swum'], 
		['мести, подметать, смахивать','sweep','swept','swept'], 
		['клясться, присягать','swear','swore','sworn'], 
		['ударять, бить, поражать','strike','struck','struck, stricken'], 
		['втыкать, приклеивать','stick','stuck','stuck'], 
		['воровать, красть','steal','stole','stolen'], 
		['стоять','stand','stood','stood'], 
		['тратить, расходовать, проводить (время)','spend','spent','spent'], 
		['говорить, разговаривать, высказываться','speak','spoke','spoken'], 
		['спать','sleep','slept','slept'], 
		['сидеть, садиться','sit','sat','sat'], 
		['тонуть, погружаться','sink','sank','sunk'], 
		['петь, напевать','sing','sang','sung'], 
		['закрывать, запирать, затворять','shut','shut','shut'], 
		['показывать','show','showed','shown, showed'], 
		['стрелять','shoot','shot','shot'], 
		['светить, сиять, озарять','shine','shone','shone'], 
		['трясти, встряхивать','shake','shook','shaken'], 
		['устанавливать, задавать, назначать','set','set','set'], 
		['посылать, отправлять, отсылать','send','sent','sent'], 
		['продавать, торговать','sell','sold','sold'], 
		['искать, разыскивать','seek','sought','sought'], 
		['видеть','see','saw','seen'], 
		['говорить, сказать, произносить','say','said','said'], 
		['бежать, бегать','run','ran','run'], 
		['восходить, вставать, подниматься','rise','rose','risen'], 
		['звенеть, звонить','ring','rang','rung'], 
		['ехать верхом, кататься','ride','rode','ridden'], 
		['читать, прочитать','read','read','read'], 
		['ставить, помещать, класть','put','put','put'], 
		['платить, оплачивать, рассчитываться','pay','paid','paid'], 
		['встречать, знакомиться','meet','met','met'], 
		['значить, иметь в виду, подразумевать','mean','meant','meant'], 
		['делать, создавать, изготавливать','make','made','made'], 
		['терять, лишаться, утрачивать','lose','lost','lost'], 
		['зажигать, светиться, освещать','light','lit','lit'], 
		['лежать','lie','lay','lain'], 
		['позволять, разрешать','let','let','let'], 
		['одалживать, давать взаймы (в долг)','lend','lent','lent'], 
		['покидать, уходить, уезжать, оставлять','leave','left','left'], 
		['вести за собой, сопровождать, руководить','lead','led','led']
	];

	// Все слова с переводом - это массивы из 4-х элементов, где 0 элемент слово на русском, остальные 3 формы глагола
	// Режим перевод с русского: 
	// Выбираем случайное слово и показываем первый элемент, отвечающий должен написать 3 формы


	var englishWord = document.querySelectorAll('.englishWord'), // все input с английскими словами 
			worldContainer = document.querySelector('.worldContainer'), // контейнер для слова на русском
			resultContainer = document.querySelector('.resultContainer'), // контейнер для вывода хвалебного отзыва о превильном ответе
			checkingWorld, // проверяемое слово, в случае неправильных глаголов у это массив из 3-х элементов
			withHelpFlag = false, // Флаг "Была ли подсказка", если true, то не заносим правильный ответ в localstorage
			toLocalStorage = JSON.parse(localStorage.getItem("irregularVerb")) || {}, //Парсим наш объект
			randomWorld; // Номер проверяемого слова в массиве, записываем его как ключ в localStorage


	/* Выбираем случайное слово, 
	засовываем в контейнер русское слово из первой ячейки в массиве
	сохраняем весь массив - русский перевод/все формы глагола */
	function takeWorld(){
		randomWorld = randomInteger(0, irregularVerb.length-1);

		if(toLocalStorage[randomWorld] > 10){
			takeWorld();
		}else{
			checkingWorld = irregularVerb[randomWorld]; // берем весь массив
			worldContainer.innerHTML = checkingWorld[0];

			withHelpFlag = false; // при появлении нового слова обнуляем флаг

			return [checkingWorld, randomWorld];
		}
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

		withHelpFlag = true; // если показана подсказка, то ставим флаг, что ответил не сам
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

	 	
	 		if( withHelpFlag == false){
	 			if( toLocalStorage[randomWorld] == undefined ){
	 				toLocalStorage[randomWorld] = 1;
	 				putToLocalstorage();
	 			}else{
	 				toLocalStorage[randomWorld] = toLocalStorage[randomWorld] + 1;
	 				putToLocalstorage();
	 			}
	 		}

	 	 showResult();
	 	 getNextWorld();
	 }

	}

// Создаем новый объект, в него записываем номер строки в массиве как ключ и количество правильно ответивших как значение
// Помещаем их в localstorage и перезаписываем при каждом правильном ответе
// Делаем withHelpFlag который срабатывает при нажатии подсказки и сбрасывается при появлении нового слова +

	function putToLocalstorage(){
		var serialObj = JSON.stringify(toLocalStorage);
		localStorage.setItem("irregularVerb", serialObj);
	}

	takeWorld(); // Запускаем все это при первом запуске

})(); 

// Реализовать несколько наборов карточек





	


