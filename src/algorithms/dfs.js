export function DFS(grid,startNode,finishNode){
    const visitedNodesInOrder=[]
     let Isfound=false 
   const q=[];
   q.push(startNode);
   startNode.isVisited=true
   visitedNodesInOrder.push(startNode)
   while(q.length!==0)
   {  
       let qNode=q.pop();
       if(qNode===finishNode)
       {    Isfound=true
           return visitedNodesInOrder
       }
       if(Isfound)
        break  

       const unVisitedNeighbors=getUnvisitedNeighbors(qNode,grid)
          for(let i=0;i<unVisitedNeighbors.length;i++)
          {  const neighbor=unVisitedNeighbors[i]
              neighbor.isVisited=true
              neighbor.previousNode=qNode
              visitedNodesInOrder.push(neighbor)
              q.push(neighbor)

          }


   }
   return visitedNodesInOrder

}
function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    
    
    return neighbors.filter(neighbor => !neighbor.isVisited&&!neighbor.isWall);
  }
  export function getNodesInShortestPathOrderDFS(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    if(!finishNode.previousNode)
      return nodesInShortestPathOrder
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
  