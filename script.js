//your code here
function minCost(event) {
	event.preventDefault();
	var input = document.querySelector("input").value;
	var arr = input.split(",");
	var cost=0;
	while(arr.length > 1){
		arr.sort(function (a,b) {return a-b});
		var temp=Number(arr[0]) + Number(arr[1]);
		cost+=temp;
		arr.push(temp);
		arr.splice(0,2);
		arr.sort(function (a,b) {return a-b});
		
	}
	document.querySelector("div").textContent=cost;
}
