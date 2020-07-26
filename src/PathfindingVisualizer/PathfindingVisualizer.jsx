import React, {Component} from 'react';
import Node from './Node/Node';
import Select from 'react-select'
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {astar, getNodesInShortestPathOrderAstar} from '../algorithms/astar1.js';
import {BFS,getNodesInShortestPathOrderBFS} from '../algorithms/bfs.js';
import {DFS,getNodesInShortestPathOrderDFS} from '../algorithms/dfs.js';
import {biDirectional,getNodesInShortestPathOrderBiDi} from '../algorithms/bidirectional.js';


import './PathfindingVisualizer.css';
import { binaryTreeMaze } from '../algorithms/binaryTreeMaze';
import { dfsMaze } from '../algorithms/dfsMaze';
//import {recursiveDivision} from '../algorithms/recursiveDivision.js';
import {recursiveDivMaze} from '../algorithms/RecursiveDivisionMaze.js';

let START_NODE_ROW = 10;
let START_NODE_COL = 15;
let FINISH_NODE_ROW = 10;
let FINISH_NODE_COL = 35;
let visited=[]
let path=[]
let t1=0

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      moveStart: false,
      moveEnd: false,
      mazeType: "selectMaze",
      algo:"",
      algoInfo:"",
      log:"Please select a maze and/or algorithm"
    };
    this.resetGrid=this.resetGrid.bind(this)
    this.visualizeDijkstra=this.visualizeDijkstra.bind(this)
    this.handleMazeChange=this.handleMazeChange.bind(this)
     this.handleAlgoChange=this.handleAlgoChange.bind(this) 
     this.clearPath=this.clearPath.bind(this)
     //this.visualizeDijkstra=this.visualizeAlgo.bind(this)
  }

  componentDidMount() {
    
    
    const grid = getInitialGrid();
    this.setState({grid});
    /*const g=randomMaze(grid,grid[10][15],grid[10][35]);
    this.setState({grid:g});*/
  }

  handleMouseDown(row, col) {
    
    if((START_NODE_ROW===row&&START_NODE_COL===col))
      {
        const newGrid = this.state.grid.slice();
        const node = newGrid[row][col];
        const newNode = {
          ...node,

          isStart: false
          
        };
        
        newGrid[row][col] = newNode;
        
         this.setState({grid: newGrid,moveStart: true,mouseIsPressed: true})
         
         return
      }
       if(FINISH_NODE_ROW===row&&FINISH_NODE_COL===col)
       {  

        const newGrid = this.state.grid.slice();
        const node = newGrid[row][col];
        const newNode = {
          ...node,

          isFinish: false
          
        };
        
        newGrid[row][col] = newNode;

         this.setState({moveEnd: true,mouseIsPressed: true})
         return
       }
    
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
    
     
  }

  handleMouseEnter(row, col) {
    
    if (this.state.moveStart||this.state.moveEnd||!this.state.mouseIsPressed) return;
    
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp(row,col) {
    
    if(this.state.moveStart)
      {  
          
          const newGrid = getNewGridMovingStart(this.state.grid, row, col);
           this.setState({grid: newGrid});
           

      }
      if(this.state.moveEnd)
      {   
          
          const newGrid = getNewGridMovingEnd(this.state.grid, row, col);
            this.setState({grid: newGrid});
            

      }


    this.setState({moveStart:false,moveEnd:false,mouseIsPressed: false});
  }
    
   handleAlgoChange(event)
   {   
        this.clearPath();
        
       let string=""
       switch(event.target.value)
    {
      case "Dijkstra's Algorithm":{  
          string="Dijkstra's Algorithm is weighted and guarantees the shortest path."
          break;
      }
      case "A* Search":{
           string="At each step,A* uses Heuristic distance to move on."
        break;
       }
      case "Breadth First Search":{
          string="Explores the nodes ,layer by layer.It Guarantees the shortest path. "
        break;
       }
      case "Depth First Search":{
        string="Explores the node branch as far as possible prior to backtrack ."
        break;
      }
      case "BiDirectional Search":{
        string="Simply,BFS from both directions.Does not guarantee shortest path"
        break;
      }
      default :{}
    }

        
        this.setState({algo:event.target.value,algoInfo:string})
        

   }
   visualizeAlgo()
   {  
    let d=new Date();
    t1=d.getTime();
    
    switch(this.state.algo)
    {
      case "Dijkstra's Algorithm":{  
          this.visualizeDijkstra()
          break;
      }
      case "A* Search":{
        this.visualizeAstar()
        break;
       }
      case "Breadth First Search":{
        this.visualizeBFS()
        break;
       }
      case "Depth First Search":{
        this.visualizeDFS();
        break;
      }
      case "BiDirectional Search":{
        this.visualizeBiDi()
        break;
      }
      default :{}

    }
    


   }


  handleMazeChange(event){
    
    
    console.log(event.target.value)
    this.resetGrid();
       
    const Grid=getInitialGrid()
     
    
      const {grid}=this.state
     switch(event.target.value)
     {
       
          case "binaryTreeMaze":{
            
            
            const newGrid=binaryTreeMaze(Grid,Grid[START_NODE_ROW][START_NODE_COL],Grid[FINISH_NODE_ROW][FINISH_NODE_COL])
            this.setState({grid:newGrid,mazeType:"binaryTreeMaze"})
            break;
          }
          case "dfsMaze":{const newGrid=dfsMaze(Grid,Grid[START_NODE_ROW][START_NODE_COL],Grid[FINISH_NODE_ROW][FINISH_NODE_COL])
            this.setState({grid:newGrid,mazeType:"dfsMaze"})
            break;}

           case "recursiveDivision":{  
             const newGrid=recursiveDivMaze(Grid,null,Grid[START_NODE_ROW][START_NODE_COL],Grid[FINISH_NODE_ROW][FINISH_NODE_COL])
            this.setState({grid:newGrid,mazeType:"recursiveDivision"})
            break;}
            case "recursiveDivisionVerticalSkew":{  
              const newGrid=recursiveDivMaze(Grid,"VERTICAL",Grid[START_NODE_ROW][START_NODE_COL],Grid[FINISH_NODE_ROW][FINISH_NODE_COL])
             this.setState({grid:newGrid,mazeType:"recursiveDivision"})
             break;}
             case "recursiveDivisionHorizontalSkew":{  
              const newGrid=recursiveDivMaze(Grid,"HORIZONTAL",Grid[START_NODE_ROW][START_NODE_COL],Grid[FINISH_NODE_ROW][FINISH_NODE_COL])
             this.setState({grid:newGrid,mazeType:"recursiveDivision"})
             break;} 
             
            
            default: {}


     }

  }


  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
        if(!visitedNodesInOrder||visitedNodesInOrder.length===0)
          {
            var d1=new Date();
        var t2=d1.getTime();
        
        var dur=t2-t1;
        var c1="Duration:"+dur+"ms.Path not found"; 
        this.setState({log:c1});
           return
          }

         
    for (let i = 0; !!visitedNodesInOrder&&i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length&&nodesInShortestPathOrder.length>=2) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
          
        var d1=new Date();
        var t2=d1.getTime();
        var p=nodesInShortestPathOrder.length===0?"Path not found":nodesInShortestPathOrder.length
        var dur=t2-t1;
        var c1="Duration:"+dur+"ms.Path: "+p; 
        this.setState({log:c1});
        
        
        
        
        return;
      

      }
      setTimeout(() => {

           
        const node = visitedNodesInOrder[i];
        if(!node)
          return
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
          
          
          //visitedNodesInOrder[i].isExplored=true
      }, 10 * i);


      var d1=new Date();
      var t2=d1.getTime();
      var p=(nodesInShortestPathOrder.length===0)?"Path not found":nodesInShortestPathOrder.length
      var dur=t2-t1;
      var c1="Duration:"+dur+"ms.Path: "+p; 
      this.setState({log:c1});



    }
    

  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
          //nodesInShortestPathOrder[i].isPath=true
      }, 50 * i);
    }
  }

  clearPath(){
    
    const {grid}=this.state;
    const g=JSON.parse(JSON.stringify(grid));
    for(let i=0;i<grid.length;i++)
    for(let j=0;j<grid[0].length;j++)
    {  
      document.getElementById(`node-${i}-${j}`).classList.remove('node-visited')
      document.getElementById(`node-${i}-${j}`).classList.remove('node-shortest-path')
    }
      
   /* for(let i=0;i<grid.length;i++)
    for(let j=0;j<grid[0].length;j++)
    {   
      if(grid[i][j].isStart)
      {g[i][j].isStart=true
        g[i][j].isWall=false
        continue
      }
      if(grid[i][j].isFinish)
      {g[i][j].isfinish=true
        g[i][j].isWall=false
        continue
      }
      
      if(grid[i][j].isWall)
          g[i][j].isWall=true

    } */


    document.getElementById(`node-${START_NODE_ROW}-${START_NODE_COL}`).className='node node-start'
      document.getElementById(`node-${FINISH_NODE_ROW}-${FINISH_NODE_COL}`).className='node node-finish'

         //g[START_NODE_ROW][START_NODE_COL].isStart=true
         //g[FINISH_NODE_ROW][FINISH_NODE_COL].isFinish=true

    //g[START_NODE_ROW][START_NODE_COL].isWall=false;
    //g[FINISH_NODE_ROW][FINISH_NODE_COL].isWall=false;
    // g[START_NODE_ROW][START_NODE_COL].isStart=true;
     //g[FINISH_NODE_ROW][FINISH_NODE_COL].isFinish=true;
      
     const Grid =[]
  
     for (let row = 0; row <=20; row++) {
       const currentRow = [];
       for (let col = 0; col <=50; col++) {
          
        const n= createNode(col, row)
         
        currentRow.push(n);
       }
       Grid.push(currentRow);
     }  


     for(let i=0;i<Grid.length;i++)
     for(let j=0;j<Grid[0].length;j++)
     {   
      
       if(grid[i][j].isWall)
           Grid[i][j].isWall=true
 
     }


     this.setState({grid:Grid});

    
  }
  
  resetGrid(){
      
    const {grid} = this.state;
     const g=JSON.parse(JSON.stringify(grid)).slice();
     for(let i=0;i<visited.length;i++)
         {const node=visited[i]
          
            document.getElementById(`node-${node.row}-${node.col}`).classList.remove('node-visited')
             
        }
        for(let i=0;i<path.length;i++)
         {
          const node=path[i]
          
          document.getElementById(`node-${node.row}-${node.col}`).classList.remove('node-shortest-path')
              
        }
         

     
     
   document.getElementById(`node-${START_NODE_ROW}-${START_NODE_COL}`).className='node node-start'
       document.getElementById(`node-${FINISH_NODE_ROW}-${FINISH_NODE_COL}`).className='node node-finish'

         g[START_NODE_ROW][START_NODE_COL].isStart=true
         g[FINISH_NODE_ROW][FINISH_NODE_COL].isFinish=true


         const Grid =[]
  
         for (let row = 0; row <=20; row++) {
           const currentRow = [];
           for (let col = 0; col <=50; col++) {
             const n= createNode(col, row)
             //document.getElementById(`node-${n.row}-${n.col}`).classList.remove('node-shortest-path')
            currentRow.push(n);
           }
           Grid.push(currentRow);
         }  
         const g1=getInitialGrid()
         let x="Please select a maze and/or algorithm"

        this.setState({grid:Grid,mazeType:"selectMaze",algo:"",algoInfo:"",log:x});
     
  }


  visualizeDijkstra() {
    const {grid} = this.state;
    
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      //visitedNodesInOrder=[]
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
         visited=visitedNodesInOrder.slice()
       
     const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
           path=nodesInShortestPathOrder
         if(nodesInShortestPathOrder.length===1)
             nodesInShortestPathOrder.shift();

    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    
         
  }
  visualizeAstar() {
    const {grid} = this.state;
    
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      //visitedNodesInOrder=[]
    const visitedNodesInOrder = astar(grid, startNode, finishNode);
         visited=visitedNodesInOrder.slice()
         console.log(visitedNodesInOrder.length)
       
     const nodesInShortestPathOrder = getNodesInShortestPathOrderAstar(finishNode);
           path=nodesInShortestPathOrder
             

    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    
  }
  visualizeBFS() {
    const {grid} = this.state;
    
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      //visitedNodesInOrder=[]
    const visitedNodesInOrder = BFS(grid, startNode, finishNode);
         visited=visitedNodesInOrder.slice()
       
     const nodesInShortestPathOrder = getNodesInShortestPathOrderBFS(finishNode);
           path=nodesInShortestPathOrder
     

    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    
  }
  visualizeDFS() {
    const {grid} = this.state;
    
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      //visitedNodesInOrder=[]
    const visitedNodesInOrder = DFS(grid, startNode, finishNode);
         visited=visitedNodesInOrder.slice()
       
     const nodesInShortestPathOrder = getNodesInShortestPathOrderDFS(finishNode);
           path=nodesInShortestPathOrder
     

    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    
  }
  visualizeBiDi() {
    const {grid} = this.state;
    
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      //visitedNodesInOrder=[]
    const visitedNodesInOrder = biDirectional(grid, startNode, finishNode);
          if(!visitedNodesInOrder)
              console.log("Im the null pointer")
         visited=visitedNodesInOrder.slice()
       
     const nodesInShortestPathOrder = getNodesInShortestPathOrderBiDi(finishNode);
           path=nodesInShortestPathOrder
     

    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    
  }

  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
      <div className="Wrapper" >
         <h1>
           <p1 className="title">My Visualizer</p1>
             <ul>
         <li><button className="btnReset" onClick={()=>this.resetGrid()}>Clear Grid</button></li>
           
          <li>
            <div className="algo-container">
            <select className="selectAlgo"  value={this.state.algo}  onChange={(event)=>{this.handleAlgoChange(event)}}>
           
           <option value="" >Algorithms</option>
           <option value="Dijkstra's Algorithm" >Dijkstra's Algorithm</option>
           <option value="A* Search" >A* Search</option>
           <option value="Breadth First Search" >Breadth First Search</option>
           <option value="Depth First Search" >Depth First Search</option>
           <option value="BiDirectional Search" >BiDirectional Search </option>
           
           </select>
           </div>
           </li>
           
         
       <li><button  className="btnVisualize" onClick={() => this.visualizeAlgo()}>
          {`Visualize ${this.state.algo} Algorithm`}
        </button></li>
        <li><button className="clearPath" onClick={()=>this.clearPath()}>Clear Path</button></li>
        <p2 className="algoInfo">{` ${this.state.algoInfo} `}</p2>
          <li className="startNode">s</li><li className="start">Start </li>
          <li className="targetNode">t</li><li className="target">Target </li>
          <li className="visitedNode">v</li><li className="visited">Visited </li>
          <li className="pathNode">p</li><li className="path">Shortest Path </li>
          <li className="wallNode">w</li><li className="wall">Wall </li>
          <li className="result">^</li>
          <li className="log">{` ${this.state.log} `}</li>

          <div >
         <li> <select className="selectMaze" value={this.state.mazeType} onChange={(event)=>this.handleMazeChange(event)}>
          <option value="selectMaze">Mazes</option>
          <option value="binaryTreeMaze">BinaryTreeMaze</option>
          <option value="dfsMaze">DFSmaze</option>
          <option value="recursiveDivision">Recursive Division</option>
          <option value="recursiveDivisionVerticalSkew">Recursive Division(Vertical Skew)</option>
          <option value="recursiveDivisionHorizontalSkew">Recursive Division(Horizontal Skew)</option>
          </select></li>
          </div>
          </ul>
          
          </h1>

        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="rowWrapper">
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall,isVisited,otherVisited,previousNode,previousNodeStart
                  ,previousNodeEnd,f,g,h,} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      isVisited={isVisited}
                      otherVisited={otherVisited}
                      previousNode={previousNode}
                      previousNodeStart={previousNodeStart}
                      previousNodeEnd={previousNodeEnd}
                      f={f}
                      g={g}
                      h={h}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>this.handleMouseEnter(row, col)}
                      onMouseUp={(row,col) => this.handleMouseUp(row,col)}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
        

      </div>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  
  for (let row = 0; row <=20; row++) {
    const currentRow = [];
    for (let col = 0; col <=50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    otherVisited: false,
    isWall: false,
    previousNode: null,
    previousNodeStart: null,
    previousNodeEnd: null,
    f:Infinity,
    g:0,
    h:Infinity,
    
    
   
  };
};


const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  

  
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridMovingStart = (grid, row, col) => {
   
  START_NODE_ROW=row
  START_NODE_COL=col
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall:false,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    
  };
  
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridMovingEnd = (grid, row, col) => {
  
  FINISH_NODE_ROW=row
  FINISH_NODE_COL=col
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall:false,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

      

	


