"use strict";

// Задачи

// 1

// let a = prompt("Введите имя", "Василий");

// alert(a)


// 2

// Пример из презентации:
// let a = 1, b = 1;

// let c = ++a; // вывод: 2
// let d = b++; // вывод: 1

// 3

// Пример из презентации:

// let a = 2;

// let x = 1 + (a *= 2); // x = 5, a = 4

// 4

// Пример из презентации:

// let e = ["" + 1 + 0, // 10
// "" - 1 + 0, // -1
// true + false, // 1
// 6 / "3", // 2
// "2" * "3", // 6
// 4 + 5 + "px", // 9px
// "$" + 4 + 5, // $45
// "4" - 2, // 2
// "4px" - 2, //NaN
// " -9 " + 5, // -9 5
// " -9 " - 5, // -14
// null + 1, // 1
// undefined + 1, // NaN
// " \t \n" - 2] // -2

// e.forEach(function(entry) {
// 	console.log(entry);
// });

// 5

// Пример из презентации:

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // не правильно

// alert(Number(a) + Number(b)) // привильно



// Работа с переменными

// 1

// let num = 3;

// alert(num);

// 2

// let a = 10, b = 2;

// alert('a + b = ' + (a + b))
// alert('a - b = ' + (a - b))
// alert('a * b = ' + (a * b))
// alert('a / b = ' + (a / b))

// 3

// let c = 15, 
// 	d = 2, 
// 	result = c + d;

// alert(result);

// 4

// let a = 10, 
// 	b = 2, 
// 	c = 5,
// 	res = a + b + c;

// alert(res);

// 5

// let a = 17,
// 	b = 10,
// 	c = a - b,
// 	d = 7,
// 	result = c + d;

// alert(result);



// Работа со строками

// 1

// let str = 'Привет, Мир!';

// alert(str);

// 2

// let str1 = 'Привет, ',
// 	str2 = 'Мир!';

// alert(str1 + str2);

// 3

// let name = "Илья";

// alert(`Привет, ${name}!`);

// 4

// let age = 16;

// alert(`Мне ${age} лет!`);



// Функция prompt

// 1 

// let name = prompt('Ваше имя?', '');
// alert(`Ваше имя ${name}`);

// 2

// let n = prompt('Введите число', 1);
// alert(n**2);



// Обращение к символам строки

// 1

// let str = "abcde";

// for (let i = 0; i < str.length; i++) {
// 	if (i % 2 != 1) {
// 		alert(str[i]);
// 	}
// }

// 2

// let num = '12345', s = 1;
// for (let i = 0; i < num.length; i++) {
// 	s *= num[i];
// }

// alert(s)



// Практика

// 1

// let sek = 1,
// 	min = 60 * sek,
// 	hour = 60 * min,
// 	day = 24 * hour,
// 	mounth_March_dopustim = 31 * day;

// alert(hour);
// alert(day);
// alert(mounth_March_dopustim);

// 2

// let date = new Date();
// let sek = date.getSeconds(),
// 	min = date.getMinutes(),
// 	hour = date.getHours();


// alert(`${hour}:${min}:${sek}`);

// 3

// let a = 12;

// a **= 2

// alert(a)



// Работа с присваиванием и декрементами

// 1

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// 2

// var num = 10;
// num++;
// num++;
// num--;
// alert(num);