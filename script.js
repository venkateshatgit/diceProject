function result(box, arr){

	if(box==1)
		var d = document.querySelectorAll(".box1 .dot");
	else
		var d = document.querySelectorAll(".box2 .dot");

	for(var i=0; i<arr.length; i++){
		var y = arr[i];
		d[y].classList.add("invisible");
	}
}

function hide(box, x){
	/*
	1 2 3
	4 5 6
	7 8 9
	*/

	var arr;
	switch(x){
		case 1:
			arr=[0, 1, 2, 3, 5, 6, 7, 8];
			result(box, arr);
		 	/*0 0 0
			0 5 0
		   	0 0 0*/ 
			break;

		case 2:
			arr=[1, 2, 3, 4, 5, 6, 7];
			result(box, arr);
			/*1 0 0
			0 0 0	
			0 0 9*/
			break;

		case 3:
			arr=[1, 2, 3, 5, 6, 7];
			result(box, arr);
			/*1 0 0
			0 5 0
			0 0 9*/
			break;

		case 4:
			arr=[1, 3, 4, 5, 7];
			result(box, arr);
			/*1 0 3
			0 0 0
			7 0 9*/
			break;

		case 5:
			arr=[1, 3, 5, 7];
			result(box, arr);
			/*1 0 3		
			0 5 0
			7 0 9*/
			break;

		case 6:
			arr=[1, 4, 7];
			result(box, arr);
			/*1 0 3
			4 0 6
			7 0 9*/
			break;
	}

}

function refresh(x){
	if(x==1)
		var d = document.querySelectorAll(".box1 .dot");
	else
		var d = document.querySelectorAll(".box2 .dot");

	for(i=0; i<9; ++i){
		d[i].classList.remove("invisible");
	}
}

function generate(){

	refresh(1);
	refresh(2);

	var ran1 = Math.random();
	var x = Math.floor(ran1*6 + 1); //1 to 6 generation

	var ran2 = Math.random();
	var y = Math.floor(ran2*6 + 1); //1 to 6 generation
	
	hide(1, x);
	hide(2, y);

	var head = document.querySelector("#head");
	if(x > y){
		head.innerHTML ="Player 1 wins";
		document.querySelector("#flag1").classList.remove("invisible");
		document.querySelector("#flag2").classList.add("invisible");
	}
	else if(y > x){
		head.innerHTML ="Player 2 wins";
		document.querySelector("#flag2").classList.remove("invisible");
		document.querySelector("#flag1").classList.add("invisible");
	}
	else{
		head.innerHTML ="Draw!";
		document.querySelector("#flag2").classList.add("invisible");
		document.querySelector("#flag1").classList.add("invisible");
	}

}

function timedelay(){

}




