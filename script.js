function minimumCost() {
    
    var res = 0;
    var cost = 0;
    var inputArray = document.getElementById("inputArr").value;
    inputArray = inputArray.split(',').map(Number);
    for (let i = 0; i < inputArray.length - 1; i += 0) {
        if (inputArray.length == 0) break;
		// sort by decreasing order
        inputArray = inputArray.sort((a,b) => b-a);
        res = inputArray.pop() + inputArray.pop();
        cost += res;
		// adding res to arrayy
        inputArray[inputArray.length] = res;   
    }  
    document.getElementById("result").innerHTML = cost;
}
