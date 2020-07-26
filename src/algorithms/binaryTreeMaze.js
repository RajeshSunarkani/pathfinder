export function binaryTreeMaze(grid,startNode,finishNode){
   let height=grid.length
   let width=grid[0].length
   const newGrid=grid.slice()
   
   for(let i=0;i<height;i=i+2)
   {  for(let j=0;j<width;j=j+2)
      {     
           
           const node=newGrid[i][j]
           const n1={
               ...node,
               isWall:grid[i][j]!==startNode&&grid[i][j]!==finishNode?true:false,
           };
           newGrid[i][j]=n1


            let prob=Math.random()
            
           if((i-1>=0&&prob>0.5)||(i-1>=0&&j-1<0))
             {
                const node1=newGrid[i-1][j]
             
                const n2={
                    ...node1,
                    isWall:grid[i-1][j]!==startNode&&grid[i-1][j]!==finishNode?true:false,
                };
                newGrid[i-1][j]=n2

             }
            if((j-1>=0&&prob<=0.5)||i-1<0&&j-1>=0)
                {  
                    const node2=newGrid[i][j-1]

                    const n3={
                        ...node2,
                        isWall:grid[i][j-1]!==startNode&&grid[i][j-1]!==finishNode?true:false,
                    };
                    newGrid[i][j-1]=n3

                }

                

           
      }

   }
   return newGrid;

}

