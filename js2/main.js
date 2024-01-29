// Работа с && (и) и || (или)

let prov1 = [1, 0, -3];

prov1.forEach(function(a) {
	
	// 1

	// if (a == 0) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

	// 2

	// if (a > 0) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

	// 3

	// if (a < 0) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

	// 4

	// if (a >= 0) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

	// 5

	// if (a <= 0) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

	// 6

	// if (a != 0) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

});


// 7

// let prov2 = ['test', 'тест', 3];

// prov2.forEach(function(a) {
	
// 	if (a == 'test') {
// 		console.log('Верно');
// 	} else {
// 		console.log('Неверно');
// 	}

// });


// 8

// let prov2 = ['1', 1, 3];

// prov2.forEach(function(a) {
	
// 	if (a == '1' && typeof a == typeof '1') {
// 		console.log('Верно');
// 	} else {
// 		console.log('Неверно');
// 	}

// });



// Работа с && (и) и || (или)



let prov2 = [5, 0, -3, 2];

prov2.forEach(function(a) {

	// 1 

	// if (a > 0 && a < 5) {
	// 	console.log('Верно');
	// } else {
	// 	console.log('Неверно');
	// }

	// 2

	// if (a == 0 || a == 2) {
	// 	a += 7;
	// 	console.log(a);
	// } else {
	// 	a /= 10;
	// 	console.log(a);
	// }




});


let prov4 = [[1, 3], [0, 6], [3, 5]];

prov4.forEach(function(par) {
	// 3

	// a = par[0];
	// b = par[1];

	// if (a <= 1 && b >= 3) {
	// 	console.log(a + b);
	// } else {
	// 	console.log(a - b);
	// }


	// 4

	// a = par[0];
	// b = par[1];

	// if (a > 2 && a < 11 || b >= 6 && b < 14) {
	// 	console.log("Верно");
	// } else {
	// 	console.log("Неверно");
	// }

});


// Задачи на switch-case

// 1

// let a = prompt("Введите число", "");
// var result;
// switch (Number(a)) {
// 	case 1:
// 		result = 'Зима';
// 		break;
// 	case 2:
// 		result = 'Весна';
// 		break;
// 	case 3:
// 		result = 'Лето';
// 		break;
// 	case 4:
// 		result = 'Осень';
// 		break;
// 	default:
// 		alert("Введено неправильно значение");
// 		break;
// }
// if (result != undefined){
// 	alert(result);
// }


// Задачи

// 1

// let day = prompt("Введите число", "");

// if (day <= 10) {
// 	alert("1 декада");
// } else if (day <= 20) {
// 	alert("2 декада");
// } else if (day <= 31) {
// 	alert("3 декада");
// } else {
// 	alert("Введено не правильно число");
// }

// 2

// let month = prompt("Введите число", "");

// if (month == 12 || month == 1 || month == 2) {
// 	alert("Зима");
// } else if (month == 3 || month == 4 || month == 5) {
// 	alert("Весна");
// } else if (month == 6 || month == 7 || month == 8) {
// 	alert("Лето");
// } else if (month == 9 || month == 10 || month == 11) {
// 	alert("Осень");
// }

// 3

// let stroka = 'abcde';

// if (stroka[0] == 'a') {
// 	alert('Да');
// } else {
// 	alert('Нет');
// }

// 4

// let stroka = '12345';

// switch (stroka[0]) {
// 	case '1':
// 		alert('Да');
// 		break;

// 	case '2':
// 		alert('Да');
// 		break;

// 	case '3':
// 		alert('Да');
// 		break;

// 	default:
// 		alert('Нет')
// 		break;
// }

// 5

// let stroka = '128';

// alert(Number(stroka[0]) + Number(stroka[1]) + Number(stroka[2]));

// 6

// let stroka = '123222';

// if ((Number(stroka[0]) + Number(stroka[1]) + Number(stroka[2])) == (Number(stroka[3]) + Number(stroka[4]) + Number(stroka[5]))) {
// 	alert('Да');
// } else {
// 	alert('Нет');
// }