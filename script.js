function calculateMinCost() {
  // Get the input value
  let input_str = document.getElementById("input").value;

  // Convert the input string to a list of integers
  let arr = input_str.split(",").map(x => parseInt(x.trim()));

  // Initialize a min-heap with the given array
  let heap = [...arr];
  heap.sort((a, b) => a - b);

  let cost = 0;

  // Repeat until only one rope remains in the heap
  while (heap.length > 1) {
    // Take the two smallest ropes from the heap
    let smallest1 = heap.shift();
    let smallest2 = heap.shift();

    // Connect the two ropes and add the cost to the heap
    let connected = smallest1 + smallest2;
    cost += connected;
    heap.push(connected);
    heap.sort((a, b) => a - b);
  }

  // Display the result in the div element
  document.getElementById("result").innerHTML = "Minimum cost: " + cost;
}
