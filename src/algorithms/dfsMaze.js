export function dfsMaze(grid,startNode,finishNode){
    
  //const newGrid=grid.slice();
  for(let i=0;i<grid.length;i++)
  {  for(let j=0;j<grid[0].length;j++)
     {
         
      grid[i][j].isWall=(grid[i][j]!==startNode&&grid[i][j]!==finishNode)?true:false
           
           

     }
     
  }
  
  
  
  const visitedNodesInOrder=[]
  const Grid=grid.slice()
     
   let randRow=Math.floor(Math.random()*(grid.length-1))
   let randCol=Math.floor(Math.random()*(grid[0].length-1))
     console.log(Grid)
    if(!(!!Grid))
       console.log(null)
    if(!!Grid)
      { Grid[randRow][randCol].isWall=false}
      
    recursion(Grid,randRow,randCol);
    return Grid;

}


  
   
       
     
    
  function recursion(grid,r,c) {
    // 4 random directions
    const randDirs = generateRandomDirections();
    // Examine each direction
    for (let i = 0; i < randDirs.length; i++) {

        switch(randDirs[i]){
        case 1: // Up
            //　Whether 2 cells up is out or not
            if (r - 2 <= 0)
                continue;
                
            if (grid[r - 2][c].isWall) {
                grid[r-2][c].isWall=false
                grid[r-1][c].isWall=false
                recursion(grid,r - 2, c);
            }
            break;
        case 2: // Right
            // Whether 2 cells to the right is out or not
            if (c + 2 >= grid[0].length - 1)
                continue;
                
            if (grid[r][c + 2].isWall) {
                grid[r][c + 2].isWall=false
                grid[r][c + 1].isWall=false
                recursion(grid,r, c + 2);
            }
            break;
        case 3: // Down
            // Whether 2 cells down is out or not
            if (r + 2 >= grid.length - 1)
                continue;
                
            if (grid[r + 2][c].isWall) {
                grid[r+2][c].isWall=false
                grid[r+1][c].isWall=false
                recursion(grid,r + 2, c);
            }
            break;
        case 4: // Left
            // Whether 2 cells to the left is out or not
            if (c - 2 <= 0)
                continue;
                
            if (grid[r][c - 2].isWall) {
                grid[r][c - 2].isWall=false
                grid[r][c - 1].isWall=false
                recursion(grid,r, c - 2);
            }
            break;
        }
    }

  }


  

  function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function generateRandomDirections() {
  const dir=[]
  for (let i = 0; i < 4; i++)
       dir.push(i + 1);
   
  
 return shuffle(dir)
  
}