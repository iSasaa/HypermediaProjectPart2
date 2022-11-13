function Game(round, number, correct, semicorrect) {
	this.round = round;
	this.number = number;
	this.correct = 0;
	this.semicorrect = 0;
	this.wins = 0;
	this.loses = 0;
}
var Game1 = new Game(0, 0, 0, 0);


//Creates the start page, and hides the html code referring to the second part
function load() {

	var title = document.getElementsByTagName("h1")[0];
	var title2 = document.getElementsByTagName("h2")[0];
	var titlename = "MASTERMIND"
	var name = "Player information"

	title.innerHTML = titlename;
	title2.innerHTML = name;

	document.getElementById("Part2").style.display = "none";

	document.getElementById("imgSecretNumber1").src = "./secretNumber.png";
	document.getElementById("imgSecretNumber2").src = "./secretNumber.png";
	document.getElementById("imgSecretNumber3").src = "./secretNumber.png";
	document.getElementById("imgSecretNumber4").src = "./secretNumber.png";
}


//Change title color
var color = 0;
async function changeMarqueeColor() {
	switch (color) {
		case 0:
			document.getElementById("title").style.color = "#7392b7";
			color = 1; await sleep(1000); break;
		case 1:
			document.getElementById("title").style.color = "#598ab3";
			color = 2; await sleep(1000); break;
		case 2:
			document.getElementById("title").style.color = "#78baf0";
			color = 3; await sleep(1000); break;
		case 3:
			document.getElementById("title").style.color = "#eeeee4";
			color = 0; await sleep(1000); break;
	}
}
setInterval(changeMarqueeColor, 1000);
const sleep = ms => new Promise(r => setTimeout(r, ms));


//Runs when Play button was clicked
//Hides the initial page, shows the part2 and start the game
function start() {

	var name = document.getElementById("Name").value;
	var title2 = document.getElementsByTagName("h2")[0];

	Game1.name = name;
	title2.innerHTML = name

	document.getElementById("Name").style.display = 'none';
	document.getElementById("Start").style.display = 'none';
	document.getElementById("NameSpan").style.display = 'none';

	random_number();
	play();
}


//Generates the random number which have to be guessed
function random_number() {

	var number = [];
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		ranNums = [],
		i = nums.length,
		j = 0;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		ranNums.push(nums[j]);
		nums.splice(j, 1);
	}

	number = ranNums.slice(0, 4);
	
	//S'ha de treure
	console.log(number);
	var secret_number = document.getElementById("Probes");


	//Set the number to guess
	secret_number.innerHTML = number;
	Game1.number = number
}


//Shows the part2
function play() {
	document.getElementById("Part2").style.display = "";
}


//Runs when Guess! button was clicked
function guess() {

	//If there are less than 10 rounds, can write again
	if (Game1.round != 10) {

		var round = document.getElementById("RoundNumber");

		Game1.round++;
		if (Game1.round > 10) {
			throw new Error("Something went badly wrong!");
		};

		round.innerHTML = Game1.round;

		var new_number = document.getElementById("Round").value;
		var roundinput = document.getElementById("Round");
		var wins = document.getElementById("wins");

		let secret_number = Game1.number;
		new_number = Array.from(new_number);
		var number_array = [];

		//Convert the number to integer
		for (var i = 0; i < new_number.length; i++) {
			number_array.push(parseInt(new_number[i]));
		}

		//compare if the numbers are equals to the secret number
		if (secret_number.toString() === number_array.toString()) {
			Game1.wins++
			var wins = document.getElementById("wins").innerHTML = Game1.wins;
			alert("Congratulations " + Game1.name + " you have won!");
			restart();
		} else {
			Game1.semicorrect = 0;
			Game1.correct = 0;
			for (var i = 0; i < new_number.length; i++) {
				if (secret_number.includes(number_array[i])) {
					Game1.semicorrect++;
					if (secret_number[i] == number_array[i]) {
						Game1.correct++;
						Game1.semicorrect--;
					}
				}
			}
			
			addTableRow(number_array[0], number_array[1], number_array[2], number_array[3], Game1.correct, Game1.semicorrect);
		}
		if (roundinput.value != "") {
			roundinput.value = "";
		}
	} else {
		Game1.loses++;
		var loses = document.getElementById("loses").innerHTML = Game1.loses;
		alert("Sorry, " + Game1.name + " you have lost!");
		restart();
		if (roundinput.value != "") {
			roundinput.value = "";
		}

	}
}

//Only accepts numbers
function onlyNumberKey(n) {
	var ASCIICode = (n.which) ? n.which : n.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}

//Restarts the game after a win or lose
function restart() {

	Game1 = new Game(0, 0, 0, 0);

	//delete the table rows
	var nRows = document.getElementById("tableOfNumbers").rows.length;
	for (let i = 1; i < nRows; i++) {
		document.getElementById("tableOfNumbers").deleteRow(nRows - i);
	}
	//document.getElementById("tableOfNumbers").deleteRow(document.getElementById("tableOfNumbers").rows.length);

	start();
}


function addTableRow(n1, n2, n3, n4, cor, semicor) {

	//Number entered
	var table = document.getElementById("tableOfNumbers");
	var row = table.insertRow(Game1.round);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = n1;
	cell2.innerHTML = n2;
	cell3.innerHTML = n3;
	cell4.innerHTML = n4;

	//Correct and semicorrect
	var corImg = row.insertCell(4);
	var corN = row.insertCell(5);
	var semicorImg = row.insertCell(6);
	var semicorN = row.insertCell(7);

	var imgCor = document.createElement("img");
	imgCor.src = "./correct.png";
	corImg.appendChild(imgCor);

	var imgSemicor = document.createElement("img");
	imgSemicor.src = "./semicorrect.png";
	semicorImg.appendChild(imgSemicor);

	corN.innerHTML = cor;
	semicorN.innerHTML = semicor;
}