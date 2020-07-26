 let grid=[]
export function recursiveDivMaze(Grid,bias,start,finish){
	 

      grid=Grid.slice()
	   
	for (var i = 0; i < grid.length; i++){
		for (var j = 0; j < grid[0].length; j++){
			if (i == 0 || j == 0 || i == (grid.length - 1) || j == (grid[0].length - 1)){ 
				grid[i][j].isWall=true
			}
		}
	}

	var walls = createVisited(grid);
	var passages = createVisited(grid);
	recursiveDivMazeHelper(1, (grid.length - 2), 1, (grid[0].length - 2), 2, (grid.length - 3), 2, (grid[0].length - 3), walls, passages, bias,start,finish);
	 
	 grid[start.row][start.col].isWall=false;
	 grid[finish.row][finish.col].isWall=false;
	 
	return grid
	
}



function recursiveDivMazeHelper(iStart, iEnd, jStart, jEnd, horzStart, horzEnd, vertStart, vertEnd, walls, passages, bias,start,finish){
	var height = iEnd - iStart + 1;
	var width = jEnd - jStart + 1;
	var canMakeVertWall = (vertEnd - vertStart) >= 0;
	var canMakeHorzWall = (horzEnd - horzStart) >= 0;
 	if (height < 3 || width < 3 || !canMakeVertWall | !canMakeHorzWall) { 
		return; 
	}
	// Choose line orientation
	var x = Math.floor(Math.random() * 10);
	if (bias == "VERTICAL"){
		var lineOrientation = x < 8 ? "VERTICAL" : "HORIZONTAL"; // weighting: 90/10 (V/H)
	} else if (bias == "HORIZONTAL"){
		var lineOrientation = x < 1 ? "VERTICAL" : "HORIZONTAL"; // weighting: 10/90 (V/H)
	} else { 
		var lineOrientation = x < 5 ? "VERTICAL" : "HORIZONTAL"; // weighting: 50/50 (V/H)
	}

	// Draw line and create random passage
	if (lineOrientation == "VERTICAL"){
		var vertWidth = vertEnd - vertStart + 1;
		var randCol = Math.floor(Math.random() * vertWidth) + vertStart;
		if (passages[iStart][randCol]){
			var randRow = iStart;
		} else if (passages[iEnd][randCol]){
			var randRow = iEnd;
		} else {
			var randRow = (Math.floor(Math.random() * 2) == 0) ? iStart: iEnd; // random end assignment
			//var randRow = Math.floor(Math.random() * height) + iStart; // random parition
		}
		for (var i = iStart; i <= iEnd; i++){
			if ( passages[i][randCol] ){ continue; }
			if (i == randRow){
				// Make passages
				for (var j = randCol - 1; j <= randCol + 1; j++){
					passages[i][j] = true;
				}
			} else { 

				if(!grid)
				   console.log("null "+i+" "+randCol)
				//walls[i][randCol] = true;
				if( grid[i][randCol]!==start|| grid[i][randCol]!==finish)
				 grid[i][randCol].isWall=true
			}
		}
		recursiveDivMazeHelper(iStart, iEnd, jStart, (randCol - 1), horzStart, horzEnd, vertStart, (randCol - 2), walls, passages,start,finish); //left
		recursiveDivMazeHelper(iStart, iEnd, (randCol + 1), jEnd, horzStart, horzEnd, (randCol + 2), vertEnd, walls, passages,start,finish); //right
    }
    
    else {
		var horzHeight = horzEnd - horzStart + 1;
		var randRow = Math.floor(Math.random() * horzHeight) + horzStart;
		if (passages[randRow][jStart]){
			var randCol = jStart;
		} else if (passages[randRow][jEnd]){
			var randCol = jEnd;
		} else {
			var randCol = (Math.floor(Math.random() * 2) == 0) ? jStart: jEnd; // random end assignment
			//var randCol = Math.floor(Math.random() * width) + jStart; // random parition
		}
		for (var j = jStart; j <= jEnd; j++){
			if ( passages[randRow][j] ){ continue; }
			if (j == randCol){
				// Make passages
				for (var i = randRow - 1; i <= randRow + 1; i++){
					passages[i][j] = true;
				}
			} else { 

				   if(!grid)
				   console.log("null ")
                if( grid[randRow][j]!==start|| grid[randRow][j]!==finish)
				 grid[randRow][j].isWall=true
                
                
			}
		}
		recursiveDivMazeHelper(iStart, (randRow - 1), jStart, jEnd, horzStart, (randRow - 2), vertStart, vertEnd, walls, passages,start,finish); //up
		recursiveDivMazeHelper((randRow + 1), iEnd, jStart, jEnd, (randRow + 2), horzEnd, vertStart, vertEnd, walls, passages,start,finish); //down
	}
	return

}

function createVisited(grid){
	var visited = [];
	
	for (var i = 0; i < grid.length; i++){
		var row = [];
		for (var j = 0; j < grid[0].length; j++){
			if (grid[i][j].isWall){
				row.push(true);
			} else {
				row.push(false);
			}
		}
		visited.push(row);
	}
	return visited;
}
        







    








