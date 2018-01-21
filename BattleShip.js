//Step 5: Create a 2d array with 10 arrays inside.
var board = [
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""]
];
//Step5a:
var SHIP = 1;
//Step5b: The for loop to creates the 5 randomly placed ships. Math.random created random numbers for the rows and columns. Math.floor rounds the number down to a whole number. The random number correlates to the index going across in the rows and going down in the columns. Multiply by 10 to get a number between 1 and 10. To assign something in the index number use the var name[][]= "what you want inside the index"
for(var shipPiece=1; shipPiece<=7; shipPiece++){
  var randomRowNumber = Math.floor(Math.random()*10)
  var randomColumnNumber = Math.floor(Math.random()*10)
  console.log("row " + randomRowNumber + " column " + randomColumnNumber )
  board[randomRowNumber][randomColumnNumber]=SHIP
}

// Step 9: If the player loses, the ships will show on the board so the player can see where the ships were.
for (var row=0; row<10; row++){
  for (var column=0; column<10; column++){
    if (board[row][column] == 1) {
      var r = row.toString()
      var c = column.toString()
      var coordinate= r + c
      console.log(coordinate)
    }
  }
}



//Below: to give the td ids it will start at 0
var cellNumber = 0;

for (var index = 0; index<10; index++){
//Below: document.getElementById(" ") tells javascript to find the table from HTML. Create a variable for the boardTable and it will find the id from the HTML.
  var boardTable = document.getElementById ("gameBoard")
  console.log(index)
//Below: document.createElement is to just create the rows for the table into the table area that is currently empty.
  var tableRow = document.createElement("tr")
//Below:element.appendChild(childNode) will then add the rows that were created into the table.
  boardTable.appendChild(tableRow)
//Below: Made another for loop to create and add the table data to the now existing table rows. element.appendChild(childNode) is used to add the td to the rows. Then we append the tableData to our tableRow.
  for (var dataIndex = 0; dataIndex<10; dataIndex++){
    var tableData = document.createElement("td")
//Below: This is where will we assign the id for our elements. The two lines below was created after our for loop. cellNumber is the id for our table datas.
    tableRow.appendChild(tableData)
//Below: tds are given the ids from cellNumber starting at 0 and it will iterate
    tableData.id = cellNumber;
    cellNumber++
//Below: We're adding the element.addEventListener(event,function). The events is an already recognized activity in javascript. Then put the name of the function. We assigned shipAttack to the click.
    tableData.addEventListener("click",shipAttack)
//Below: This was created with our for loop
  }
 }

//Below: This function will allow the table data to change to red if clicked. The "e" is so the function can recognize the event which is the "click" from above.
//
// function shipAttack(e){
//   e.target.className="hit";
//   torpedoCount++
//   console.log(torpedoCount)
//

//Make the variables global, if it's within the function than it will always reset it back to 0.
var torpedoCount=0;
var hitCount=0;
  function shipAttack(e){
//if the number from e.target.id is less than ten, then the row is 0 otherwise the row is the number at index zero. The target in e.target.id is the table data was clicked because.
    var row = e.target.id < 10 ? 0 : e.target.id[0]
//if the number from e.target.id is less than ten, then the column is the e.target.id. If it's false, then the column number is the number at the first index.
    var col = e.target.id < 10 ? e.target.id : e.target.id[1]
    // var col = 0
    // if (e.target.id < 10 ) {
    //   col = e.target.id
    // } else {
    //   col = e.target.id[1]
    // }
//Step 6: If the board[row][col] is at the same position of a ship and does not already have the class name of "hit", then it will be given the className of "hit". The torpedo count will increase by one.
    if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 0){
        e.target.className="hit";
        e.target.style="background-image: url('images/adele.jpg')";
          torpedoCount++
          hitCount++
  //Else, if the board[row][col] is not in the same position of a ship and it doesn't already have a class name of "miss", then it will be given the className of "miss". The torpedo count will increase by one.
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 1){
    e.target.className="hit";
    e.target.style="background-image: url('images/friendlyfires.jpg')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 2){
    e.target.className="hit";
    e.target.style="background-image: url('images/kendricklamar.jpg')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 3){
    e.target.className="hit";
    e.target.style="background-image: url('images/robyn.jpg')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 4){
    e.target.className="hit";
    e.target.style="background-image: url('images/yelle.jpg')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 5){
    e.target.className="hit";
    e.target.style="background-image: url('images/thekillers.png')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 6){
    e.target.className="hit";
    e.target.style="background-image: url('images/florenceandthemachine.jpg')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 7){
    e.target.className="hit";
    e.target.style="background-image: url('images/santigold.jpg')";
      torpedoCount++
      hitCount++
} else if (board[row][col] === SHIP && e.target.className !== "hit" && hitCount == 8){
    e.target.className="hit";
    e.target.style="background-image: url('images/lorde.jpg')";
      torpedoCount++
      hitCount++
}else if(torpedoCount>=50){
      alert ("You have run out of phonecalls and time. GAME OVER!")
      // board.onclick = null;
      // Step 9: If the player loses, the ships will show on the board so the player can see where the ships were.

      for (var row=0; row<10; row++){

        // console.log(board[row])
        for (var column=0; column<10; column++){
          var coordinate;
          if (board[row][column] == 1) {
            if (row==0){
              coordinate = column
              var sq = document.getElementById(coordinate)
              console.log(sq)
              sq.className = 'hit'
            }else{
            var r = row.toString()
            var c = column.toString()
            coordinate= r + c
            console.log(coordinate)
            var sq = document.getElementById(coordinate)
            console.log(sq)
            sq.className = 'hit'
            }
// console.log ( 'row ' + row + 'column' + column )
          }
          // if (board[""][""] != true){
          //
          // }
        }
      }
    }
    else if(hitCount>=3){
      alert ("Congratulations you have successfully planned a great music festival lineup!")
    }
    else if (board[row][col] != SHIP && e.target.className !== "miss") {
        e.target.className="miss";
          torpedoCount++
  //Step 4: Else, it means that the position has beeen given a className of either "hit" or "miss" and the player has played that spot. An alert will pop up notifying them.
    }else{
        alert ("That musician has already been asked! Choose another musician!")
    }
//Step 3 on the first Epic. We first created the id in HTML and then create a name for a variable (counterShownOnPage) and set it for document.getElementById("id"). The id is from HTML.
  var torpedoCountShownOnPage = document.getElementById ("torpedoCounter")
//Below: use document.getElementById(id).innerHTML="write some text in here"
  document.getElementById("torpedoCounter").innerHTML='Number of Musicians Called: ' + torpedoCount
  var hitCountShownOnPage = document.getElementById ("hitCounter")
//Below: use document.getElementById(id).innerHTML="write some text in here"
  document.getElementById("hitCounter").innerHTML='Number of Musicians Confirmed: ' + hitCount
  }
