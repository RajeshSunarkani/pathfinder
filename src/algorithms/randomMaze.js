

 function randomMaze(grid,startNode,finishNode){
	let yi=grid.length-5
	const newGrid = grid.slice();
	for(let i=0;i<7;i++)
	{ 
		let r1=Math.floor(grid[0].length/2)-i
		let r2=Math.floor(grid[0].length/2)+i

        
		const node1 = newGrid[r1][yi];
		const node2 = newGrid[r2][yi];
		
		if(grid[r1][yi]!==startNode&&grid[r1][yi]!==finishNode)
		{const newNode1 = {
			...node1,
			isWall:true
		  };
		  newGrid[r1][yi]=node1
		}
		  if(grid[r2][yi]!==startNode&&grid[r2][yi]!==finishNode)
		 { const newNode2 = {
			...node2,
			isWall: true
		  };
		  newGrid[r2][yi]=node2
		}
	}	  
 
 
  
  return newGrid;
      

	}

