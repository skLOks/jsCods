// 1

// let mas = ['Привет, ', 'мир', '!'];

// console.log(mas[0] + mas[1] + mas[2]);

// 2

// let mas = ['Привет, ', 'мир', '!'];
// let text = "";

// for (let i in mas) {
// 	text += mas[i];
// }

// console.log(text);

// 3

// let mas = ['Привет, ', 'мир', '!'];

// mas[0] = "Пока, "
// console.log(mas);

// 4

// let obj = {
// 	'Коля': 17900,
// 	'Пети': 7500,
// }

// for (let i in obj) {
// 	console.log(`${i} зарабатывает ${obj[i]}`);
// }

// 5

// var arr = {
// 	'ru': ['голубой', 'красный', 'зелёный'],
// 	'en': ['blue', 'red', 'green'],
// }

// console.log(arr['ru'][1]);

// Работа с массивами


// 1, 2

// let arr = ['a', 'b', 'c'];

// alert(arr);

// for (let i in arr) {
// 	alert(arr[i]);
// }

// 3

// let arr = ['a', 'b', 'c', 'd'];

// console.log(`${arr[0]}+${arr[1]},${arr[2]}+${arr[3]}`);

// 4

// let arr =  [2, 5, 3, 9];

// let result = arr[0] * arr[1] + arr[2] * arr[3]

// console.log(result)

// Объекты (ассоциативные массивы)

// 1

// var obj = {a: 1, b: 2, c: 3};

// console.log(obj["c"])
// console.log(obj.c)

// 2

// var obj = {Kolya: '1000', Vasya: '500', Petya: '200'};

// console.log(obj.Kolya, obj.Petya)

// 3

// let dnned = {
// 	1: "Поденельник",
// 	2: "Вторник",
// 	3: "Среда",
// 	4: "Четверг",
// 	5: "Пятница",
// 	6: "Субота",
// 	7: "Воскресенье",
// }

// let date = new Date();
// let xdate = date.getDay();
// if (xdate == 0) {
// 	xdate = 7;
// }

// console.log(dnned[`${xdate}`])

// 4

// let dnned = {
// 	1: "Поденельник",
// 	2: "Вторник",
// 	3: "Среда",
// 	4: "Четверг",
// 	5: "Пятница",
// 	6: "Субота",
// 	7: "Воскресенье",
// }

// let date = new Date();
// let day = date.getDay();
// if (day == 0) {
// 	day = 7;
// }

// console.log(dnned[`${day}`])


// Многомерные массивы

// 1

// let arr = [[1, 2, 3], [4, 5, 6], [7,8,9]];

// console.log(arr[1][0])

// 2

// let obj = {js:['jQuery', 'Angular'], 
// 			php: 'hello', 
// 			css: 'world'
// };

// console.log(obj.js[0])

// 3

// Как по фармулировке:
// let arr = [
// 	["Поденельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"],
// 	["Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// ]

// let ru = 0, en = 1;
// console.log(arr[ru][0], arr[en][2])

// Как по ГОСТу:

// let obj = {
// 	ru: ["Поденельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"],
// 	en: ["Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
// }

// console.log(obj.ru[0], obj.en[2])

// 4

// let lang = 'ru';
// let day = new Date().getDay()

// let obj = {
// 	ru: ["Поденельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"],
// 	en: ["Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
// }

// console.log(obj[lang][day]) // пофиг, что Воскресенье и понедельник наоборот
