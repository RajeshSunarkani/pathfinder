(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=(a(15),a(16),a(17),a(1)),l=a(4),c=a(5),u=a(2),h=a(7),v=a(6),d=(a(18),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.isFinish,n=e.isStart,i=e.isWall,s=e.onMouseDown,o=e.onMouseEnter,l=e.onMouseUp,c=e.row,u=(e.f,e.g,e.h,e.distance,e.isVisited,e.otherVisited,e.previousNode,e.previousNodeStart,e.previousNodeEnd,a?"node-finish":n?"node-start":i?"node-wall":"");return r.a.createElement("div",{id:"node-".concat(c,"-").concat(t),className:"node ".concat(u),onMouseDown:function(){return s(c,t)},onMouseEnter:function(){return o(c,t)},onMouseUp:function(){return l(c,t)}})}}]),a}(n.Component)),f=a(3);function g(e,t,a){var n=[];t.distance=0;for(var r=function(e){var t,a=[],n=Object(f.a)(e);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,s=Object(f.a)(i);try{for(s.s();!(r=s.n()).done;){var o=r.value;a.push(o)}}catch(l){s.e(l)}finally{s.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(e);r&&r.length>0;){m(r),console.log(r.length+" unLen");var i=r.shift();if(console.log(i.distance+" cloD "+i.isVisited+" "+i.isWall),!i.isWall&&!i.isVisited){if(i.distance===1/0)return console.log("return from here"),n;if(i.isVisited=!0,console.log("pushed"),n.push(i),i===a)return n;p(i,e)}}return console.log("Vis Len "+n.length),n}function m(e){console.log("sorting"),e.sort((function(e,t){return e.distance-t.distance}))}function p(e,t){var a,n=function(e,t){var a=[],n=e.col,r=e.row;r>0&&a.push(t[r-1][n]);r<t.length-1&&a.push(t[r+1][n]);n>0&&a.push(t[r][n-1]);n<t[0].length-1&&a.push(t[r][n+1]);return a.filter((function(e){return!e.isVisited&&!e.isWall}))}(e,t),r=Object(f.a)(n);try{for(r.s();!(a=r.n()).done;){var i=a.value;!i.isWall&&i.distance>e.distance+1&&(i.distance=e.distance+1,console.log("dist updated"),i.previousNode=e)}}catch(s){r.e(s)}finally{r.f()}}function E(e,t,a){var n=[];t.g=0,t.h=b(t,a),t.f=t.g+t.h,console.log("in a star");var r=function(e){var t,a=[],n=Object(f.a)(e);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,s=Object(f.a)(i);try{for(s.s();!(r=s.n()).done;){var o=r.value;a.push(o)}}catch(l){s.e(l)}finally{s.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(e);for(console.log(r.length);r.length;){N(r);var i=r.shift();if(!i.isWall){if(console.log(i.f+" "+i.g+" "+i.h),i.f===1/0)return console.log(n.length),n;if(i.isVisited=!0,n.push(i),i===a)return n;S(i,e,a)}}return n}function N(e){e.sort((function(e,t){return e.f===t.f?e.h-t.h:e.f-t.f}))}function S(e,t,a){var n,r=function(e,t){var a=[],n=e.col,r=e.row;r>0&&a.push(t[r-1][n]);r<t.length-1&&a.push(t[r+1][n]);n>0&&a.push(t[r][n-1]);n<t[0].length-1&&a.push(t[r][n+1]);return a.filter((function(e){return!e.isVisited&&!e.isWall}))}(e,t),i=Object(f.a)(r);try{for(i.s();!(n=i.n()).done;){var s=n.value;s.f>=e.f+1&&(s.g=e.g+1,s.h=b(s,a),s.f=s.g+s.h,s.previousNode=e)}}catch(o){i.e(o)}finally{i.f()}}function b(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function y(e,t){var a=[],n=e.col,r=e.row;return r>0&&a.push(t[r-1][n]),r<t.length-1&&a.push(t[r+1][n]),n>0&&a.push(t[r][n-1]),n<t[0].length-1&&a.push(t[r][n+1]),a.filter((function(e){return!e.isVisited&&!e.isWall}))}function k(e,t){var a=[],n=e.col,r=e.row;return n>0&&a.push(t[r][n-1]),n<t[0].length-1&&a.push(t[r][n+1]),r>0&&a.push(t[r-1][n]),r<t.length-1&&a.push(t[r+1][n]),a.filter((function(e){return!e.isVisited&&!e.isWall}))}var D=[];function M(e,t){var a=[],n=e.col,r=e.row;return r>0&&a.push(t[r-1][n]),r<t.length-1&&a.push(t[r+1][n]),n>0&&a.push(t[r][n-1]),n<t[0].length-1&&a.push(t[r][n+1]),a.filter((function(e){return!e.isVisited&&!e.isWall}))}function j(e,t){var a=[],n=e.col,r=e.row;return r>0&&a.push(t[r-1][n]),r<t.length-1&&a.push(t[r+1][n]),n>0&&a.push(t[r][n-1]),n<t[0].length-1&&a.push(t[r][n+1]),a.filter((function(e){return!e.otherVisited&&!e.isWall}))}a(19);function w(e,t,a){for(var n=0;n<e.length;n++)for(var r=0;r<e[0].length;r++)e[n][r].isWall=e[n][r]!==t&&e[n][r]!==a;var i=e.slice(),s=Math.floor(Math.random()*(e.length-1)),o=Math.floor(Math.random()*(e[0].length-1));return console.log(i),i||console.log(null),i&&(i[s][o].isWall=!1),function e(t,a,n){for(var r=function(){for(var e=[],t=0;t<4;t++)e.push(t+1);return function(e){var t,a,n=e.length;for(;n>0;)a=Math.floor(Math.random()*n),n--,t=e[n],e[n]=e[a],e[a]=t;return e}(e)}(),i=0;i<r.length;i++)switch(r[i]){case 1:if(a-2<=0)continue;t[a-2][n].isWall&&(t[a-2][n].isWall=!1,t[a-1][n].isWall=!1,e(t,a-2,n));break;case 2:if(n+2>=t[0].length-1)continue;t[a][n+2].isWall&&(t[a][n+2].isWall=!1,t[a][n+1].isWall=!1,e(t,a,n+2));break;case 3:if(a+2>=t.length-1)continue;t[a+2][n].isWall&&(t[a+2][n].isWall=!1,t[a+1][n].isWall=!1,e(t,a+2,n));break;case 4:if(n-2<=0)continue;t[a][n-2].isWall&&(t[a][n-2].isWall=!1,t[a][n-1].isWall=!1,e(t,a,n-2))}}(i,s,o),i}var O=[];function W(e,t,a,n){O=e.slice();for(var r=0;r<O.length;r++)for(var i=0;i<O[0].length;i++)0!=r&&0!=i&&r!=O.length-1&&i!=O[0].length-1||(O[r][i].isWall=!0);var s=z(O),o=z(O);return function e(t,a,n,r,i,s,o,l,c,u,h,v,d){var f=r-n+1,g=l-o>=0,m=s-i>=0;if(a-t+1<3||f<3||!g|!m)return;var p=Math.floor(10*Math.random());if("VERTICAL"==h)var E=p<8?"VERTICAL":"HORIZONTAL";else if("HORIZONTAL"==h)E=p<1?"VERTICAL":"HORIZONTAL";else E=p<5?"VERTICAL":"HORIZONTAL";if("VERTICAL"==E){var N=l-o+1,S=Math.floor(Math.random()*N)+o;if(u[t][S])var b=t;else if(u[a][S])b=a;else b=0==Math.floor(2*Math.random())?t:a;for(var y=t;y<=a;y++)if(!u[y][S])if(y==b)for(var k=S-1;k<=S+1;k++)u[y][k]=!0;else O||console.log("null "+y+" "+S),O[y][S]===v&&O[y][S]===d||(O[y][S].isWall=!0);e(t,a,n,S-1,i,s,o,S-2,c,u,v,d),e(t,a,S+1,r,i,s,S+2,l,c,u,v,d)}else{var D=s-i+1;b=Math.floor(Math.random()*D)+i;if(u[b][n])S=n;else if(u[b][r])S=r;else S=0==Math.floor(2*Math.random())?n:r;for(k=n;k<=r;k++)if(!u[b][k])if(k==S)for(y=b-1;y<=b+1;y++)u[y][k]=!0;else O||console.log("null "),O[b][k]===v&&O[b][k]===d||(O[b][k].isWall=!0);e(t,b-1,n,r,i,b-2,o,l,c,u,v,d),e(b+1,a,n,r,b+2,s,o,l,c,u,v,d)}return}(1,O.length-2,1,O[0].length-2,2,O.length-3,2,O[0].length-3,s,o,t,a,n),O[a.row][a.col].isWall=!1,O[n.row][n.col].isWall=!1,O}function z(e){for(var t=[],a=0;a<e.length;a++){for(var n=[],r=0;r<e[0].length;r++)e[a][r].isWall?n.push(!0):n.push(!1);t.push(n)}return t}var V=10,I=15,A=10,T=35,B=[],P=[],C=0,F=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={grid:[],mouseIsPressed:!1,moveStart:!1,moveEnd:!1,mazeType:"selectMaze",algo:"",algoInfo:"",log:"Please select a maze and/or algorithm"},e.resetGrid=e.resetGrid.bind(Object(u.a)(e)),e.visualizeDijkstra=e.visualizeDijkstra.bind(Object(u.a)(e)),e.handleMazeChange=e.handleMazeChange.bind(Object(u.a)(e)),e.handleAlgoChange=e.handleAlgoChange.bind(Object(u.a)(e)),e.clearPath=e.clearPath.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=L();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){if(V===e&&I===t){var a=this.state.grid.slice(),n=a[e][t],r=Object(o.a)(Object(o.a)({},n),{},{isStart:!1});return a[e][t]=r,void this.setState({grid:a,moveStart:!0,mouseIsPressed:!0})}if(A===e&&T===t){var i=this.state.grid.slice(),s=i[e][t],l=Object(o.a)(Object(o.a)({},s),{},{isFinish:!1});return i[e][t]=l,void this.setState({moveEnd:!0,mouseIsPressed:!0})}var c=H(this.state.grid,e,t);this.setState({grid:c,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(!this.state.moveStart&&!this.state.moveEnd&&this.state.mouseIsPressed){var a=H(this.state.grid,e,t);this.setState({grid:a})}}},{key:"handleMouseUp",value:function(e,t){if(this.state.moveStart){var a=G(this.state.grid,e,t);this.setState({grid:a})}if(this.state.moveEnd){var n=J(this.state.grid,e,t);this.setState({grid:n})}this.setState({moveStart:!1,moveEnd:!1,mouseIsPressed:!1})}},{key:"handleAlgoChange",value:function(e){this.clearPath();var t="";switch(e.target.value){case"Dijkstra's Algorithm":t="Dijkstra's Algorithm is weighted and guarantees the shortest path.";break;case"A* Search":t="At each step,A* uses Heuristic distance to move on.";break;case"Breadth First Search":t="Explores the nodes ,layer by layer.It Guarantees the shortest path. ";break;case"Depth First Search":t="Explores the node branch as far as possible prior to backtrack .";break;case"BiDirectional Search":t="Simply,BFS from both directions.Does not guarantee shortest path"}this.setState({algo:e.target.value,algoInfo:t})}},{key:"visualizeAlgo",value:function(){var e=new Date;switch(C=e.getTime(),this.state.algo){case"Dijkstra's Algorithm":this.visualizeDijkstra();break;case"A* Search":this.visualizeAstar();break;case"Breadth First Search":this.visualizeBFS();break;case"Depth First Search":this.visualizeDFS();break;case"BiDirectional Search":this.visualizeBiDi()}}},{key:"handleMazeChange",value:function(e){console.log(e.target.value),this.resetGrid();var t=L();this.state.grid;switch(e.target.value){case"binaryTreeMaze":var a=function(e,t,a){for(var n=e.length,r=e[0].length,i=e.slice(),s=0;s<n;s+=2)for(var l=0;l<r;l+=2){var c=i[s][l],u=Object(o.a)(Object(o.a)({},c),{},{isWall:e[s][l]!==t&&e[s][l]!==a});i[s][l]=u;var h=Math.random();if(s-1>=0&&h>.5||s-1>=0&&l-1<0){var v=i[s-1][l],d=Object(o.a)(Object(o.a)({},v),{},{isWall:e[s-1][l]!==t&&e[s-1][l]!==a});i[s-1][l]=d}if(l-1>=0&&h<=.5||s-1<0&&l-1>=0){var f=i[s][l-1],g=Object(o.a)(Object(o.a)({},f),{},{isWall:e[s][l-1]!==t&&e[s][l-1]!==a});i[s][l-1]=g}}return i}(t,t[V][I],t[A][T]);this.setState({grid:a,mazeType:"binaryTreeMaze"});break;case"dfsMaze":var n=w(t,t[V][I],t[A][T]);this.setState({grid:n,mazeType:"dfsMaze"});break;case"recursiveDivision":var r=W(t,null,t[V][I],t[A][T]);this.setState({grid:r,mazeType:"recursiveDivision"});break;case"recursiveDivisionVerticalSkew":var i=W(t,"VERTICAL",t[V][I],t[A][T]);this.setState({grid:i,mazeType:"recursiveDivision"});break;case"recursiveDivisionHorizontalSkew":var s=W(t,"HORIZONTAL",t[V][I],t[A][T]);this.setState({grid:s,mazeType:"recursiveDivision"})}}},{key:"animateDijkstra",value:function(e,t){var a=this;if(e&&0!==e.length)for(var n=function(n){if(n===e.length&&t.length>=2)return setTimeout((function(){a.animateShortestPath(t)}),10*n),o=new Date,l=o.getTime(),i=0===t.length?"Path not found":t.length,c="Duration:"+(l-C)+"ms.Path: "+i,a.setState({log:c}),{v:void 0};setTimeout((function(){var t=e[n];t&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited")}),10*n),o=new Date,l=o.getTime(),i=0===t.length?"Path not found":t.length,c="Duration:"+(l-C)+"ms.Path: "+i,a.setState({log:c})},r=0;e&&r<=e.length;r++){var i,s=n(r);if("object"===typeof s)return s.v}else{var o,l=(o=new Date).getTime(),c="Duration:"+(l-C)+"ms.Path not found";this.setState({log:c})}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var a=e[t];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node node-shortest-path"}),50*t)},a=0;a<e.length;a++)t(a)}},{key:"clearPath",value:function(){for(var e=this.state.grid,t=(JSON.parse(JSON.stringify(e)),0);t<e.length;t++)for(var a=0;a<e[0].length;a++)document.getElementById("node-".concat(t,"-").concat(a)).classList.remove("node-visited"),document.getElementById("node-".concat(t,"-").concat(a)).classList.remove("node-shortest-path");document.getElementById("node-".concat(V,"-").concat(I)).className="node node-start",document.getElementById("node-".concat(A,"-").concat(T)).className="node node-finish";for(var n=[],r=0;r<=20;r++){for(var i=[],s=0;s<=50;s++){var o=R(s,r);i.push(o)}n.push(i)}for(var l=0;l<n.length;l++)for(var c=0;c<n[0].length;c++)e[l][c].isWall&&(n[l][c].isWall=!0);this.setState({grid:n})}},{key:"resetGrid",value:function(){for(var e=this.state.grid,t=JSON.parse(JSON.stringify(e)).slice(),a=0;a<B.length;a++){var n=B[a];document.getElementById("node-".concat(n.row,"-").concat(n.col)).classList.remove("node-visited")}for(var r=0;r<P.length;r++){var i=P[r];document.getElementById("node-".concat(i.row,"-").concat(i.col)).classList.remove("node-shortest-path")}document.getElementById("node-".concat(V,"-").concat(I)).className="node node-start",document.getElementById("node-".concat(A,"-").concat(T)).className="node node-finish",t[V][I].isStart=!0,t[A][T].isFinish=!0;for(var s=[],o=0;o<=20;o++){for(var l=[],c=0;c<=50;c++){var u=R(c,o);l.push(u)}s.push(l)}L();this.setState({grid:s,mazeType:"selectMaze",algo:"",algoInfo:"",log:"Please select a maze and/or algorithm"})}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=e[V][I],a=e[A][T],n=g(e,t,a);B=n.slice();var r=function(e){var t=[],a=e;if(!e.previousNode)return t;for(;null!==a;)t.unshift(a),a=a.previousNode;return t}(a);P=r,1===r.length&&r.shift(),this.animateDijkstra(n,r)}},{key:"visualizeAstar",value:function(){var e=this.state.grid,t=e[V][I],a=e[A][T],n=E(e,t,a);B=n.slice(),console.log(n.length);var r=function(e){var t=[];if(!e.previousNode)return t;for(var a=e;null!==a;)t.unshift(a),a=a.previousNode;return t}(a);P=r,this.animateDijkstra(n,r)}},{key:"visualizeBFS",value:function(){var e=this.state.grid,t=e[V][I],a=e[A][T],n=function(e,t,a){var n=[],r=[];for(r.push(t),t.isVisited=!0,n.push(t);0!==r.length;){var i=r.shift();if(i===a)return n;for(var s=y(i,e),o=0;o<s.length;o++){var l=s[o];l.isVisited=!0,l.previousNode=i,n.push(l),r.push(l)}}return n}(e,t,a);B=n.slice();var r=function(e){var t=[],a=e;if(!e.previousNode)return t;for(;null!==a;)t.unshift(a),a=a.previousNode;return t}(a);P=r,this.animateDijkstra(n,r)}},{key:"visualizeDFS",value:function(){var e=this.state.grid,t=e[V][I],a=e[A][T],n=function(e,t,a){var n=[],r=!1,i=[];for(i.push(t),t.isVisited=!0,n.push(t);0!==i.length;){var s=i.pop();if(s===a)return r=!0,n;if(r)break;for(var o=k(s,e),l=0;l<o.length;l++){var c=o[l];c.isVisited=!0,c.previousNode=s,n.push(c),i.push(c)}}return n}(e,t,a);B=n.slice();var r=function(e){var t=[],a=e;if(!e.previousNode)return t;for(;null!==a;)t.unshift(a),a=a.previousNode;return t}(a);P=r,this.animateDijkstra(n,r)}},{key:"visualizeBiDi",value:function(){var e=this.state.grid,t=e[V][I],a=e[A][T],n=function(e,t,a){var n=[];D=[];var r=[],i=[];for(r.push(t),i.push(a),t.isVisited=!0,t.otherVisited=!1,a.isVisited=!1,a.otherVisited=!0,n.push(t),n.push(a);0!==r.length||0!==i.length;){var s=r.shift(),o=i.shift();if(null===s&&null===o)return console.log("both null"),n;if(s){if(s&&s.otherVisited){for(var l=s,c=s;null!==l;)D.unshift(l),l=l.previousNodeStart;for(;null!==c;)D.unshift(c),c=c.previousNodeEnd;return console.log("q1 is null"),n}var u=M(s,e);console.log(u.length+"  start len");for(var h=0;u&&h<u.length;h++){var v=u[h];v.isVisited=!0,v.previousNodeStart=s,n.push(v),r.push(v)}}if(o){if(o&&o.isVisited){for(var d=o,f=o;null!==d;)D.unshift(d),d=d.previousNodeEnd;for(;null!==f;)D.unshift(f),f=f.previousNodeStart;return console.log("q2 is null"),n}var g=j(o,e);console.log(g.length+"   endNlen");for(var m=0;g&&m<g.length;m++){var p=g[m];p.otherVisited=!0,p.previousNodeEnd=o,n.push(p),i.push(p)}}}return n}(e,t,a);n||console.log("Im the null pointer"),B=n.slice();var r=D;P=r,this.animateDijkstra(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.mouseIsPressed;return r.a.createElement("div",{className:"Wrapper"},r.a.createElement("h1",null,r.a.createElement("p1",{className:"title"},"My Visualizer"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"btnReset",onClick:function(){return e.resetGrid()}},"Clear Grid")),r.a.createElement("li",null,r.a.createElement("div",{className:"algo-container"},r.a.createElement("select",{className:"selectAlgo",value:this.state.algo,onChange:function(t){e.handleAlgoChange(t)}},r.a.createElement("option",{value:""},"Algorithms"),r.a.createElement("option",{value:"Dijkstra's Algorithm"},"Dijkstra's Algorithm"),r.a.createElement("option",{value:"A* Search"},"A* Search"),r.a.createElement("option",{value:"Breadth First Search"},"Breadth First Search"),r.a.createElement("option",{value:"Depth First Search"},"Depth First Search"),r.a.createElement("option",{value:"BiDirectional Search"},"BiDirectional Search ")))),r.a.createElement("li",null,r.a.createElement("button",{className:"btnVisualize",onClick:function(){return e.visualizeAlgo()}},"Visualize ".concat(this.state.algo," Algorithm"))),r.a.createElement("li",null,r.a.createElement("button",{className:"clearPath",onClick:function(){return e.clearPath()}},"Clear Path")),r.a.createElement("p2",{className:"algoInfo"}," ".concat(this.state.algoInfo," ")),r.a.createElement("li",{className:"startNode"},"s"),r.a.createElement("li",{className:"start"},"Start "),r.a.createElement("li",{className:"targetNode"},"t"),r.a.createElement("li",{className:"target"},"Target "),r.a.createElement("li",{className:"visitedNode"},"v"),r.a.createElement("li",{className:"visited"},"Visited "),r.a.createElement("li",{className:"pathNode"},"p"),r.a.createElement("li",{className:"path"},"Shortest Path "),r.a.createElement("li",{className:"wallNode"},"w"),r.a.createElement("li",{className:"wall"},"Wall "),r.a.createElement("li",{className:"result"},"^"),r.a.createElement("li",{className:"log"}," ".concat(this.state.log," ")),r.a.createElement("div",null,r.a.createElement("li",null," ",r.a.createElement("select",{className:"selectMaze",value:this.state.mazeType,onChange:function(t){return e.handleMazeChange(t)}},r.a.createElement("option",{value:"selectMaze"},"Mazes"),r.a.createElement("option",{value:"binaryTreeMaze"},"BinaryTreeMaze"),r.a.createElement("option",{value:"dfsMaze"},"DFSmaze"),r.a.createElement("option",{value:"recursiveDivision"},"Recursive Division"),r.a.createElement("option",{value:"recursiveDivisionVerticalSkew"},"Recursive Division(Vertical Skew)"),r.a.createElement("option",{value:"recursiveDivisionHorizontalSkew"},"Recursive Division(Horizontal Skew)")))))),r.a.createElement("div",{className:"grid"},a.map((function(t,a){return r.a.createElement("div",{key:a,className:"rowWrapper"},t.map((function(t,a){var i=t.row,s=t.col,o=t.isFinish,l=t.isStart,c=t.isWall,u=t.isVisited,h=t.otherVisited,v=t.previousNode,f=t.previousNodeStart,g=t.previousNodeEnd,m=t.f,p=t.g,E=t.h;return r.a.createElement(d,{key:a,col:s,isFinish:o,isStart:l,isWall:c,isVisited:u,otherVisited:h,previousNode:v,previousNodeStart:f,previousNodeEnd:g,f:m,g:p,h:E,mouseIsPressed:n,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(t,a){return e.handleMouseUp(t,a)},row:i})})))}))))}}]),a}(n.Component),L=function(){for(var e=[],t=0;t<=20;t++){for(var a=[],n=0;n<=50;n++)a.push(R(n,t));e.push(a)}return e},R=function(e,t){return{col:e,row:t,isStart:t===V&&e===I,isFinish:t===A&&e===T,distance:1/0,isVisited:!1,otherVisited:!1,isWall:!1,previousNode:null,previousNodeStart:null,previousNodeEnd:null,f:1/0,g:0,h:1/0}},H=function(e,t,a){var n=e.slice(),r=n[t][a],i=Object(o.a)(Object(o.a)({},r),{},{isWall:!r.isWall});return n[t][a]=i,n},G=function(e,t,a){V=t,I=a;var n=e.slice(),r=n[t][a],i=Object(o.a)(Object(o.a)({},r),{},{isWall:!1,isStart:t===V&&a===I});return n[t][a]=i,n},J=function(e,t,a){A=t,T=a;var n=e.slice(),r=n[t][a],i=Object(o.a)(Object(o.a)({},r),{},{isWall:!1,isFinish:t===A&&a===T});return n[t][a]=i,n};var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7121947a.chunk.js.map