function minCost(event) {
  event.preventDefault();
  
  const input = document.querySelector("input[type=text]");
  const result = document.getElementById("result");
  
  const arr = input.value.split(",").map(Number);
  
  const cost = calculateMinCost(arr);
  
  result.innerHTML = "Minimum cost: " + cost;
}

function calculateMinCost(arr) {
  // Using a priority queue to keep track of the smallest ropes
  const pq = new MinPriorityQueue();
  
  // Insert all ropes into the priority queue
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i], arr[i]);
  }
  
  let cost = 0;
  
  // Repeatedly extract the two smallest ropes, join them, and insert the result back into the priority queue
  while (pq.size() > 1) {
    const rope1 = pq.dequeue().element;
    const rope2 = pq.dequeue().element;
    const newRope = rope1 + rope2;
    cost += newRope;
    pq.enqueue(newRope, newRope);
  }
  
  return cost;
}
