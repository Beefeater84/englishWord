let array = [
		["lead",	"led",	"led",	"вести за собой, сопровождать, руководить"],
		["leave",	"left",	"left",	"покидать, уходить, уезжать, оставлять"],
		["lend",	"lent",	"lent",	"одалживать, давать взаймы (в долг)"],
		["let",	"let",	"let",	"позволять, разрешать"],
		["lie",	"lay",	"lain",	"лежать"],
		["light",	"lit",	"lit",	"зажигать, светиться, освещать"],
		["lose",	"lost",	"lost",	"терять, лишаться, утрачивать"],
		["make",	"made",	"made",	"делать, создавать, изготавливать"],
		["mean",	"meant",	"meant",	"значить, иметь в виду, подразумевать"],
		["meet",	"met",	"met",	"встречать, знакомиться"],
		["pay",	"paid",	"paid",	"платить, оплачивать, рассчитываться"],
		["put",	"put",	"put",	"ставить, помещать, класть"],
		["read",	"read",	"read",	"читать, прочитать"],
		["ride",	"rode",	"ridden",	"ехать верхом, кататься"],
		["ring",	"rang",	"rung",	"звенеть, звонить"],
		["rise",	"rose",	"risen",	"восходить, вставать, подниматься"],
		["run",	"ran",	"run",	"бежать, бегать"],
		["say",	"said",	"said",	"говорить, сказать, произносить"],
		["see",	"saw",	"seen",	"видеть"],
		["seek",	"sought",	"sought",	"искать, разыскивать"],
		["sell",	"sold",	"sold",	"продавать, торговать"],
		["send",	"sent",	"sent",	"посылать, отправлять, отсылать"],
		["set",	"set",	"set",	"устанавливать, задавать, назначать"],
		["shake",	"shook",	"shaken",	"трясти, встряхивать"],
		["shine",	"shone",	"shone",	"светить, сиять, озарять"],
		["shoot",	"shot",	"shot",	"стрелять"],
		["show",	"showed",	"shown, showed",	"показывать"],
		["shut",	"shut",	"shut",	"закрывать, запирать, затворять"],
		["sing",	"sang",	"sung",	"петь, напевать"],
		["sink",	"sank",	"sunk",	"тонуть, погружаться"],
		["sit",	"sat",	"sat",	"сидеть, садиться"],
		["sleep",	"slept",	"slept",	"спать"],
		["speak",	"spoke",	"spoken",	"говорить, разговаривать, высказываться"],
		["spend",	"spent",	"spent",	"тратить, расходовать, проводить (время)"],
		["stand",	"stood",	"stood",	"стоять"],
		["steal",	"stole",	"stolen",	"воровать, красть"],
		["stick",	"stuck",	"stuck",	"втыкать, приклеивать"],
		["strike",	"struck",	"struck, stricken",	"ударять, бить, поражать"],
		["swear",	"swore",	"sworn",	"клясться, присягать"],
		["sweep",	"swept",	"swept",	"мести, подметать, смахивать"],
		["swim",	"swam",	"swum",	"плавать, плыть"],
		["swing",	"swung",	"swung",	"качаться, вертеться"],
		["take",	"took",	"taken",	"брать, хватать, взять"],
		["teach",	"taught",	"taught",	"учить, обучать"],
		["tear",	"tore",	"torn",	"рвать, отрывать"],
		["tell",	"told",	"told",	"рассказывать"],
		["think",	"thought",	"thought",	"думать, мыслить, размышлять"],
		["throw",	"threw",	"thrown",	"бросать, кидать, метать"],
		["understand",	"understood",	"understood",	"понимать, постигать"],
		["wake",	"woke",	"woken",	"просыпаться, будить"],
		["wear",	"wore",	"worn",	"носить (одежду)"],
		["win",	"won",	"won",	"победить, выиграть"],
		["write",	"wrote",	"written",	"писать, записывать"]
]

let result = document.getElementById('result');

for (var i = array.length - 1; i >= 0; i--) {
	array[i].splice(0,0,array[i][3]);
	delete array[i][4];

	result.innerHTML = result.innerHTML + "['" + array[i][0] + "','" + array[i][1] + "','" + array[i][2]+ "','" + array[i][3] + "'], <br/>";	


	console.log(array);
}

	