
   export function recursiveDivision(grid ,start,finish)
   {
         const Grid=grid.slice();
          
         Recursion(Grid,0,grid[0].length-1,0,grid.length-1,start,finish)
         return Grid;
       
   }

function Recursion(grid ,c1,c2,r1,r2,start,finish)
{
    //grid[0][0].isWall=true

    
    //const grid=Grid.slice()
  // Recursion Termination
     
    if(c1<0||c2>grid[0].length-1||r1<0||r2>grid.length-1)
       {console.log("im the bug")
       return
    }

  if ((c2-c1) < 2 || (r2-r1 )< 2)
     { return 
        console.log("reachedBaseCase")
     }

  // Randomly build the wall either horizontally or vertically
      let num=Math.floor(Math.random()*(2))+1;
     // console.log(num)
      
  
  if (num===1)
  {
    const rowIdx = Math.floor(Math.random()*(r2-r1))+r1
      
    let skip=Math.floor(Math.random()*(c2-c1+1))+c1
    console.log(c2-c1)
    for(let i=c1;i<=c2;i++)
      {  console.log("entered For1")
        console.log(!!grid[rowIdx][i]&&grid[rowIdx][i]!==start&&grid[rowIdx][i]!==finish)

          if(!!grid[rowIdx][i]&&grid[rowIdx][i]!==start&&grid[rowIdx][i]!==finish)
              grid[rowIdx][i].isWall=true
      }
      grid[rowIdx][skip].isWall=false

    //buildRowWall(grid,c1,c2,rowIdx,start,finish);
      // Recurse on sub areas
      if(rowIdx-1>=0)
       Recursion(grid, c1,c2,r1,rowIdx-2,start,finish);
       if(rowIdx+1<=grid.length-1)
        Recursion(grid, c1,c2,rowIdx+2,r2,start,finish);
  }
  else
  {
    const colIdx=Math.floor(Math.random()*(c2-c1))+c1
   // buildColWall(grid,r1,r2,colIdx,start,finish)
   let skip=Math.floor(Math.random()*(r2-r1+1))+r1
   for(let i=r1;i<=r2;i++)
     {
        console.log("entered For2")
        console.log(!!grid[i][colIdx]&&i!==skip&&grid[i][colIdx]!==start&&grid[i][colIdx]!==finish)
        if(!!grid[i][colIdx]&&grid[i][colIdx]!==start&&grid[i][colIdx]!==finish)
          grid[i][colIdx].isWall=true
     }
     grid[skip][colIdx].isWall=false

    if(colIdx-1>=0)
    Recursion(grid,c1,colIdx-2,r1,r2,start,finish);
    if(colIdx+1<=grid[0].length-1)
    Recursion(grid, colIdx+2,c2,r1,r2,start,finish);

  }

    

}


    
  // Randomly select the position to build the wall (disconnect cells along the line)
       
  // Randomly select the position to carve a unique path within this wall
  
/*
   function buildRowWall(Grid,c1,c2,rowIdx,start,finish)
   {     
        const grid=Grid.slice()
         let skip=Math.floor(Math.random()*(c2-c1+1))+c1
        for(let i=c1;i<=c2;i++)
          {if(i!==skip&&grid[rowIdx][i]!==start&&grid[rowIdx][i]!==finish)
               grid[rowIdx][i].isWall=true
          }
   }
   function buildColWall(Grid,r1,r2,colIdx,start,finish)
   {      const grid=Grid.slice()
         let skip=Math.floor(Math.random()*(r2-r1+1))+r1
        for(let i=r1;i<=r2;i++)
          {if(i!==skip&&grid[i][colIdx]!==start&&grid[i][colIdx]!==finish)
               grid[i][colIdx].isWall=true
          }
   }*/
