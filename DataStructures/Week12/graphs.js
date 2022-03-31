// starting the graphs data structure

// Graphs are a way to represent relationships between objects.
// an adjacency matrix is a 2d array that represents the relationships of a graph
//^^ not the best as sparse graphs carry a lot of null data to represent absent edges

// the adjacency list is a 1d array that represents the relationships of a graph
// ^^ only contains info on the edges that exist
// ^^ can be stored as an array or linked list or a hash table

// incidence matrix is a 2d array that represents the relationships of a graph
//^^ used when we have more edges than vertices to save space

// creating the graph class

const Dictionary = require("../Week5/dictionary");
const Queue = require("../Week3/queue");
const Stack = require("../Week2/stack");

const Colors = {
  White: 0,
  Gray: 1,
  Black: 2,
};

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.White;
  }
  return color;
};

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjacencyList = new Dictionary.Dictionary();
  }
  addVertex(vertex) {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.adjacencyList.set(vertex, []);
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.get(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.get(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).push(vertex2);
    if (!this.isDirected) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjacencyList() {
    return this.adjacencyList;
  }
  toString() {
    let string = "";
    for (let i = 0; i < this.vertices.length; i++) {
      string += this.vertices[i] + " -> ";
      let neighbors = this.adjacencyList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        string += neighbors[j] + " ";
      }
      string += "\n";
    }
    return string;
  }
}

//testing
const graph = new Graph();

const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // {12}

for (let i = 0; i < myVertices.length; i++) {
  // {13}
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B"); // {14}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

// breadth first search implementation

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjacencyList = graph.getAdjacencyList();
  const color = initializeColor(vertices);
  const queue = new Queue.Queue();

  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    const neighbors = adjacencyList.get(currentVertex);
    for (let i = 0; i < neighbors.length; i++) {
      if (color[neighbors[i]] === Colors.White) {
        color[neighbors[i]] = Colors.Gray;
        queue.enqueue(neighbors[i]);
      }
    }
    color[currentVertex] = Colors.Black;
    if (callback) {
      callback(currentVertex);
    }
  }
};

//testing

const printVertex = (value) => console.log("Visited vertex: " + value); // {15}

breadthFirstSearch(graph, myVertices[0], printVertex);

// a modified breadth first search implementation to return distances and predecessors

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjacencyList = graph.getAdjacencyList();
  const color = initializeColor(vertices);
  const queue = new Queue.Queue();
  const distances = {}; // {1}
  const predecessors = {}; // {2}
  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    // {3}
    distances[vertices[i]] = 0; // {4}
    predecessors[vertices[i]] = null; // {5}
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjacencyList.get(u);
    //console.log(neighbors);
    color[u] = Colors.Grey;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.White) {
        color[w] = Colors.Grey;
        distances[w] = distances[u] + 1; // {6}
        predecessors[w] = u; // {7}
        queue.enqueue(w);
        //console.log("test");
      }
    }
    color[u] = Colors.Black;
  }
  return {
    // {8}
    distances,
    predecessors,
  };
};

//testing the above

const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);


// a path finding alogrythm that returns the shortest paths from a source to all other vertices

const fromVertex = myVertices[0]; // {9}

for (i = 1; i < myVertices.length; i++) {
  // {10}
  const toVertex = myVertices[i]; // {11}
  const path = new Stack.Stack(); // {12}
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    // {13}
    path.push(v); // {14}
  }
  path.push(fromVertex); // {15}
  let s = path.pop(); // {16}
  while (!path.isEmpty()) {
    // {17}
    s += " - " + path.pop(); // {18}
  }
  console.log(s); // {19}
}



//depth first search is next
