function Game(round, number, correct, semicorrect){
	this.round = round;
	this.number = number;
	this.correct = correct;
	this.semicorrect = correct;
}
var Game1 = new Game(0, 0, 0, 0);

	function load()
	{
			var title = document.getElementsByTagName("h1")[0];
			var title2 = document.getElementsByTagName("h2")[0];
			var titlename = "Mastermind"
			var name = "Player information"
			//var titlename = "Today's match: "+Team1.name + " - "+Team2.name;
			title.innerHTML = titlename;
			title2.innerHTML = name;
			document.getElementById("Part2").style.display = "none";
			//document.getElementById("imgLogo1").src = Team1.logoFile;
			//document.getElementById("imgLogo1").alt = "Logo of "+Team1.name;
			//document.getElementById("imgLogo2").src = Team2.logoFile;
			//document.getElementById("imgLogo2").alt = "Logo of "+Team2.name;

	}

	function start()
	{
		var name = document.getElementById("Name").value;
		var title2 = document.getElementsByTagName("h2")[0];
		title2.innerHTML = name
		document.getElementById("Name").style.display = 'none';
		document.getElementById("Start").style.display = 'none';
		document.getElementById("NameSpan").style.display = 'none';
		random_number();
		play();
		//var min = document.getElementById("Minute").value;
		//var com = document.getElementById("Comment").value;
		//var msg = "<strong>GOOOLLL del "+Team1.name+"!!!</strong> "+com;
		//addTableRow(min, msg);
		//Team1.score ++;
		//document.getElementById("pScore1").innerHTML = Team1.score;
	}

	function random_number(){
		var number = [];
		var nums = [0,1,2,3,4,5,6,7,8,9],
    ranNums = [],
    i = nums.length,
    j = 0;

		while (i--) {
		    j = Math.floor(Math.random() * (i+1));
		    ranNums.push(nums[j]);
		    nums.splice(j,1);
		}
		number = ranNums.slice(0, 4);;
		console.log(number);
		var secret_number = document.getElementById("Probes");
		//number = ('0000'+number).slice(-4);
		secret_number.innerHTML = number;
	}

	function play(){
		document.getElementById("Part2").style.display = "";

	}

	function guess(){
		var round = document.getElementById("RoundNumber");
		Game1.round ++;
		round.innerHTML = Game1.round;
		}


	function addTableRow(min, com)
	{
		var table = document.getElementById("tableOfComments");
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = min;
		cell2.innerHTML = com;
	}
