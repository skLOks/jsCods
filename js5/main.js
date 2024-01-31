r =  Math.round(Math.random() * (10 - 1) + 1);
console.log(r)
let winNum = [r];
var a = 0;

function sravn(num) {
	if (a == -1) {
		alert("Вы уже победили, куда вам ещё?");
	} else if (a < 3) {
		a++;
		vizov(num);
	}
	else {
		var audio = new Audio('proigral.mp3');
		audio.play();
	}
}

function vizov(num) {
	for (let i in winNum) {
		if (winNum[i] == num) {
			var audio = new Audio('krasavchik.mp3');
			audio.play();
			alert("Вы выиграли!");
			a = -1;
		} else {
			var audio = new Audio('loh.mp3');
			audio.play();
		}
	}
}