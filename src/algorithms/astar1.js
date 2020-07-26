// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.
export function astar(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
     startNode.g=0
     startNode.h=heuristic(startNode,finishNode)
     startNode.f=startNode.g+startNode.h
     console.log("in a star")
    const unvisitedNodes = getAllNodes(grid);
    console.log(unvisitedNodes.length)
    while (!!unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();
      // If we encounter a wall, we skip it.
      if (closestNode.isWall) continue;
      // If the closest node is at a distance of infinity,
      // we must be trapped and should therefore stop.
         console.log(closestNode.f+" "+closestNode.g+" "+closestNode.h)
      if (closestNode.f === Infinity) 
        {   console.log(visitedNodesInOrder.length)
          return visitedNodesInOrder;}
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      updateUnvisitedNeighbors(closestNode, grid,finishNode);
    }
    return visitedNodesInOrder
  }
  
  function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) =>{
         if((nodeA.f===nodeB.f))
        return nodeA.h - nodeB.h;
        return nodeA.f-nodeB.f;
        });
  }
  
  function updateUnvisitedNeighbors(node, grid,finishNode) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      if(neighbor.f>=node.f+1)
      {neighbor.g=node.g+1;
      neighbor.h=heuristic(neighbor,finishNode)
      neighbor.f=neighbor.g+neighbor.h;
      neighbor.previousNode = node;
     }
    }
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    /*if(row>0&&col>0)neighbors.push(grid[row - 1][col-1]);
    if(row>0&&col < grid[0].length - 1)neighbors.push(grid[row - 1][col+1]);
    if((row < grid.length - 1)&&col < grid[0].length - 1)neighbors.push(grid[row+1][col+1]);
    if((row < grid.length - 1)&&col>0)neighbors.push(grid[row+1][col-1]);*/
    return neighbors.filter(neighbor => !neighbor.isVisited&&!neighbor.isWall);
  }
  
  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }


  function heuristic(a,b)
{
    let d=Math.abs(a.row-b.row)+Math.abs(a.col-b.col)
    return d;
}
  
  // Backtracks from the finishNode to find the shortest path.
  // Only works when called *after* the dijkstra method above.
  export function getNodesInShortestPathOrderAstar(finishNode) {
    const nodesInShortestPathOrder = [];
      if(!finishNode.previousNode)
        return nodesInShortestPathOrder
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
  