

let nodesInShortestPathOrder = [];
export function biDirectional(grid,startNode,finishNode){
    const visitedNodesInOrder=[]
     nodesInShortestPathOrder=[]
   const q1=[];
   const q2=[];
   
   q1.push(startNode);
   q2.push(finishNode);
   
   startNode.isVisited=true
   startNode.otherVisited=false
   finishNode.isVisited=false
   finishNode.otherVisited=true

   
   visitedNodesInOrder.push(startNode)
   visitedNodesInOrder.push(finishNode)
   

   while(q1.length!==0||q2.length!==0)
   {  
       let qNode1=q1.shift();
       let qNode2=q2.shift();
       if(qNode1===null&&qNode2===null)
        {  console.log("both null")
          return visitedNodesInOrder}
          
         if(!!qNode1)
       {
         
        if(!!qNode1&&qNode1.otherVisited)
       {   
        let currentNode1 = qNode1;
        let currentNode2 = qNode1;
        while (currentNode1 !== null) {
          nodesInShortestPathOrder.unshift(currentNode1);
          currentNode1 = currentNode1.previousNodeStart;}
        while (currentNode2 !== null) {
           nodesInShortestPathOrder.unshift(currentNode2);
            currentNode2 = currentNode2.previousNodeEnd;
        }
          console.log("q1 is null")
           return visitedNodesInOrder}
      
       const unVisitedNeighborsStart=getUnvisitedNeighborsStart(qNode1,grid)
          console.log(unVisitedNeighborsStart.length+"  start len")

          for(let i=0;!!unVisitedNeighborsStart&&i<unVisitedNeighborsStart.length;i++)
          {  const neighborS=unVisitedNeighborsStart[i]
            

              neighborS.isVisited=true
             
              neighborS.previousNodeStart=qNode1
              
              visitedNodesInOrder.push(neighborS)
              
              q1.push(neighborS)
             

          }
       }
      
          if(!!qNode2)
        {
          
          if(!!qNode2&&qNode2.isVisited)
        {   
         let currentNode1 = qNode2;
         let currentNode2 = qNode2;
         while (currentNode1 !== null) {
           nodesInShortestPathOrder.unshift(currentNode1);
           currentNode1 = currentNode1.previousNodeEnd;
         }
         while (currentNode2 !== null) {
             nodesInShortestPathOrder.unshift(currentNode2);
             currentNode2 = currentNode2.previousNodeStart;
         }
         console.log("q2 is null")
         return visitedNodesInOrder}
        

       const unVisitedNeighborsEnd=getUnvisitedNeighborsEnd(qNode2,grid)
       console.log(unVisitedNeighborsEnd.length+"   endNlen")
          for(let j=0;!!unVisitedNeighborsEnd&&j<unVisitedNeighborsEnd.length;j++)
          {  
            const neighborE=unVisitedNeighborsEnd[j]

             
              neighborE.otherVisited=true
              
              neighborE.previousNodeEnd=qNode2
              
              visitedNodesInOrder.push(neighborE)
              
              q2.push(neighborE)

          }
       
        }
   }
   return visitedNodesInOrder
     

}
function getUnvisitedNeighborsStart(node, grid) {
     //if(!node)
       //return 
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    
    return neighbors.filter(neighbor => !neighbor.isVisited&&!neighbor.isWall);
  }
  function getUnvisitedNeighborsEnd(node, grid) {
    // if(!node)
     // return
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    
    return neighbors.filter(neighbor => !neighbor.otherVisited&&!neighbor.isWall);
  }
  export function getNodesInShortestPathOrderBiDi(finishNode) {
   
    return nodesInShortestPathOrder;
  }
  