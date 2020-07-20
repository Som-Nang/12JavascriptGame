{// Pi = 4/1 -4/3 + 4/5 - 4/7..

  function calcPI(iterratin) {
    let pi = 0,
      divisor = 1;
    for (i = 0; i <= iterratin; i++) {
      pi = pi + 4 / divisor - 4 / (divisor + 2);
      divisor += 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
  }
  //1 1  2 3 5 8 13 21 34 55

  let fibList = [];
  function getFibList(homMny) {
    for (i = 0; i < homMny; i++) {
      fibList[i] = fib(i);
    }
    fibList.shift();
    document.getElementById("output1").value = fibList.join(", ");
  }
  function fib(whichNum) {
    let num1 = 1, num2 = 0, temp,
      i = 0;
    while (i < whichNum) {
      temp = num1;
      num1 = num1 + num2;
      num2 = temp;
      i++;
    }
    return num2;
  }

  let mlText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. he who ~ at the right time can ~ again\n 3. alway wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ alway have clean ~ with you";

  //convert string into array
  let mlArray = mlText.split(" ");
  //creat array for user input
  let inputArray = [];

  function madLibGenerator() {
    creatInputArray();

    if (checkForInputMissing()) {
      document.getElementById("output1").value = "Enter all valuue above";

    } else {
      creatMablibSentence();
    }
  }
  function creatInputArray() {
    for (i = 0; i <= 13; i++) {
      inputArray[i] = document.getElementById("i" + i).value;
    }
  }
  function checkForInputMissing() {
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"];

    for (i = 0; i < inputArray.length; i++) {
      if (defaultArrayVals.indexOf(inputArray[i]) > - 1) {
        return true;
      }
    }
    return false;
  }
  function creatMablibSentence() {
    let arrIndex = 0;
    for (i = 0; i < mlArray.length; i++) {
      let matchIndex = mlArray.indexOf("~");
      mlArray[matchIndex] = inputArray[arrIndex]; arrIndex++;
    }
    document.getElementById("output1").value = mlArray.join(" ");
  }

}

{//CACULATOR BLOG

  let preVal = "";
  let newVAl = "";
  let resultVal = "";
  let mathOperator = "";
  let decimalClicked = false;
  let valMemStored = "";

  function numButPress(num) {
    if (resultVal) {
      newVAl = num;
      resultVal = "";

    } else {
      if (num === '.') {
        if (decimalClicked != true) {
          newVAl += num;
          decimalClicked = true;
        }

      } else {
        newVAl += num;
      }
    }
    document.getElementById("entry").value = newVAl;
  }

  function mathButPress(operator) {
    if (!resultVal) {
      preVal = newVAl;

    } else {
      preVal = resultVal;
    }
    newVAl = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
  }

  function equalButPress(num) {
    decimalClicked = false;
    preVal = parseFloat(preVal);
    newVAl = parseFloat(newVAl);

    switch (mathOperator) {
      case "+":
        resultVal = preVal + newVAl;
        break;

      case "-":
        resultVal = preVal - newVAl;
        break;

      case "*":
        resultVal = preVal * newVAl;
        break;
      case "/":
        resultVal = preVal / newVAl;
        break;

      default:
        resultVal = newVAl;
    }
    preVal = resultVal;
    document.getElementById("entry").value = resultVal;

  }

  function clearButPress() {
    preVal = "";
    newVAl = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false
    document.getElementById("entry").value = "0";
  }

  function copyButPress(num) {
    valMemStored = document.getElementById("entry").value = "0";
  }

  function pastButPress(num) {
    if (valMemStored) {
      document.getElementById("entry").value = valMemStored;
      newVAl = valMemStored;
    }
  }

}

{//Canvas JSON BLOG

/*

let data;
let expenditureArray = [];
let percentArray = [];
let colorArray = [];

function drawChart() {
  data = document.getElementById('json-data').value;
  percentArray = createPercentArray();
  colorArray = createRandomColorArray();
  populateArray(data);
  drawPie();
}

function populateArray(jsonData) {
  let expenseArray = JSON.parse(jsonData);
  for (i = 0; i < expenseArray.expenditures.length; i++) {
    let expense = expenseArray.expenditures[i];
    expenditureArray[i] = expense;
  }
}

function createPercentArray() {
  let perArr = [];
  for (i = 0; i < expenditureArray.length; i++) {
    perArr[i] = expenditureArray[i].percent * .02;
  }
  return perArr;
}

function createRandomColorArray() {
  let randColorArr = [];
  for (i = 0; i < expenditureArray.length; i++) {
    randColorArr[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return randColorArr;
}

function drawPie() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  let startAngel = 0;
  let endAngel = 0;

  for (i = 0; i < percentArray.length; i++) {
    startAngel = endAngel;
    endAngel = endAngel + (percentArray[i] * Math.PI);

    drawSlice(context, 300, 200, 150, startAngel, endAngel, percentArray[i] * 50);

    //TODO DRAWTEXT
  }
}

function drawSlice(ctx, sliceCenterX, sliceCenterY, radius, startAngel, endAngel, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(sliceCenterX, sliceCenterY);
  ctx.arc(sliceCenterX, sliceCenterY, radius, startAngel, endAngel);
  ctx.closePath();
  ctx.fill();
}


/// Find Jso Erro. skik
*/}


//Dynamic HTML

{//AccountValue = investment + their investment * the interest rate

  function getAccountValue(principle, interestRate, afterYear) {
    return (principle * (Math.pow(1 + interestRate, afterYear))).toFixed(2);
  }

  function getTable() {
    let rate1 = document.getElementById("rate1").value * .01;
    let rate2 = document.getElementById("rate2").value * .01;
    let rate3 = document.getElementById("rate3").value * .01;
    let rate4 = document.getElementById("rate4").value * .01;

    let return1 = [...Array(5).keys()].map(x => getAccountValue(1, rate1, x));
    let return2 = [...Array(5).keys()].map(x => getAccountValue(1, rate2, x));
    let return3 = [...Array(5).keys()].map(x => getAccountValue(1, rate3, x));
    let return4 = [...Array(5).keys()].map(x => getAccountValue(1, rate4, x));

    var tableArea = document.getElementById('interest-tbl');

    var investTable = document.createElement('table');
    investTable.setAttribute('class', 'table table-striped');



    var thead = document.createElement('thead');
    var theadTR = document.createElement('tr');
    var th1 = theadTR.appendChild(document.createElement('th'));
    var th2 = theadTR.appendChild(document.createElement('th'));
    var th3 = theadTR.appendChild(document.createElement('th'));
    var th4 = theadTR.appendChild(document.createElement('th'));
    var th5 = theadTR.appendChild(document.createElement('th'));

    th1.innerHTML = 'Year';
    th2.innerHTML = Math.floor((rate1 * 100)) + '%';
    th3.innerHTML = Math.floor((rate2 * 100)) + '%';
    th4.innerHTML = Math.floor((rate3 * 100)) + '%';
    th5.innerHTML = Math.floor((rate4 * 100)) + '%';
    theadTR.prepend(th1, th2, th3, th4, th5);
    thead.appendChild(theadTR);

    // <tbody>
    //    <tr>
    //      <th>, <th>

    var tbody = document.createElement('tbody');
    for (var i = 1; i < 5; i++) {
      var tbodyTR = document.createElement('tr');
      var tbodyth1 = tbodyTR.appendChild(document.createElement('th'));
      var tbodyth2 = tbodyTR.appendChild(document.createElement('th'));
      var tbodyth3 = tbodyTR.appendChild(document.createElement('th'));
      var tbodyth4 = tbodyTR.appendChild(document.createElement('th'));
      var tbodyth5 = tbodyTR.appendChild(document.createElement('th'));

      tbodyth1.innerHTML = i;
      tbodyth2.innerHTML = return1[i];
      tbodyth3.innerHTML = return2[i];
      tbodyth4.innerHTML = return3[i];
      tbodyth5.innerHTML = return4[i];

      tbodyTR.prepend(tbodyth1, tbodyth2, tbodyth3, tbodyth4, tbodyth5);
      tbody.appendChild(tbodyTR);
    }

    investTable.appendChild(thead);
    investTable.appendChild(tbody);
    var tableDiv = document.getElementById("interest-tbl");
    tableDiv.appendChild(investTable);
  }



  let stateArray = ['letf', 'mid', 'above', 'right', 'mid-above__x26__right', 'top', 'last'];

  let results2016 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];

  let results2012 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0];

  let results2008 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0];

  let results2004 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0];

  let results2000 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0];

  let results1996 = [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0];

  function get1996Results() {
    changeColors(results1996);
  }

  function get2000Results() {
    changeColors(results2000);
  }

  function get2004Results() {
    changeColors(results2004);
  }

  function get2008Results() {
    changeColors(results2008);
  }

  function get2012Results() {
    changeColors(results2012);
  }

  function get2016Results() {
    changeColors(results2016);
  }

  function changeColors(arrayYear) {
    for (i = 0; i < stateArray.length; i++) {
      let stateElement = document.getElementById(stateArray[i]);
      for (j = 0; j < stateElement.childElementCount; j++) {
        if (arrayYear[i]) {
          stateElement.children[j].setAttribute('style', 'fill: #367DCF');
        } else {
          stateElement.children[j].setAttribute('style', 'fill: #A92B17');
        }
      }
    }
  }

}

//Canvas API Trigonometry

// Radius of circle
{
  const RADIUS = 200;
  // Circle center points
  const X_CIRCLE_CENTER = 300;
  const Y_CIRCLE_CENTER = 300;

  let canvas;
  let ctx;

  class MousePosition {
    constructor(x, y) {
      this.x = x,
        this.y = y;
    }
  }

  // Holds changing mouse position
  let mousePos = new MousePosition(0, 0);

  // Call for our function to execute when page is loaded
  document.addEventListener('DOMContentLoaded', setupCanvas);

  function setupCanvas() {
    // Get reference to canvas element
    canvas = document.getElementById("my-canvas");
    // Get methods for manipulating the canvas
    ctx = canvas.getContext("2d");
    drawCanvas();
    // Execute redrawCanvas when the mouse moves
    canvas.addEventListener("mousemove", redrawCanvas);
  }

  function drawCanvas() {
    // Create border
    drawRectangle("#839192", 5, 0, 0, 600, 600);
    // Create circle
    drawCircle("#839192", 1, X_CIRCLE_CENTER, Y_CIRCLE_CENTER, RADIUS, 0, 2 * Math.PI);
    // Create guide lines
    drawLine("#839192", 1, X_CIRCLE_CENTER, 0, X_CIRCLE_CENTER, 600);
    drawLine("#839192", 1, 0, Y_CIRCLE_CENTER, 600, Y_CIRCLE_CENTER);
  }

  function redrawCanvas(evt) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw canvas
    drawCanvas();

    // Call for MousePosition object to be updated 
    getMousePosition(evt);

    // Draw x & y coordinates using updated MousePosition settings
    drawTextAtPoint(ctx, "X : " + mousePos.x, 15, 25);
    drawTextAtPoint(ctx, "Y : " + mousePos.y, 15, 45);

    // Get angle in degrees and draw text
    let angleOfMouseDegrees = getAngleUsingXAndY(mousePos.x, mousePos.y);
    drawTextAtPoint(ctx, "Degrees : " + angleOfMouseDegrees, 15, 65);

    // Calculates hypotenuse and opposite sides and draws
    // them
    drawTriangle(angleOfMouseDegrees);
  }

  function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(startX, startY, endX, endY);
  }

  function drawCircle(strokeColor, lineWidth, xCircCenter, yCircCenter, radius, arcStart, arcEnd) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(xCircCenter, yCircCenter, radius, arcStart, arcEnd);
    ctx.stroke();
  }

  function drawLine(strokeColor, lineWidth, xStart, yStart, xEnd, yEnd) {
    // Move to start of line
    ctx.moveTo(xStart, yStart);
    // Move to end of line
    ctx.lineTo(xEnd, yEnd);
    // Draw line
    ctx.stroke();
  }

  function drawTextAtPoint(ctx, text, x, y) {
    ctx.font = "15px Arial";
    ctx.fillText(text, x, y);
  }

  function getMousePosition(evt) {
    // Get the canvas size and position relative to the web page
    let canvasDimensions = canvas.getBoundingClientRect();
    // Get canvas x & y position
    mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
    mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);

    // Convert to coordinate graph
    mousePos.x -= 300;
    mousePos.y = -1 * (mousePos.y - 300);
    return mousePos;
  }

  // Returns the angle using x and y
  // x = Adjacent Side
  // y = Opposite Side
  // Tan(Angle) = Opposite / Adjacent
  // Angle = ArcTan(Opposite / Adjacent)
  function getAngleUsingXAndY(x, y) {
    let adjacent = x;
    let opposite = y;

    return radiansToDegrees(Math.atan2(opposite, adjacent));
  }

  function radiansToDegrees(rad) {
    if (rad < 0) {
      // Correct the bottom error by adding the negative
      // angle to 360 to get the correct result around
      // the whole circle
      return (360.0 + (rad * (180 / Math.PI))).toFixed(2);
    } else {
      return (rad * (180 / Math.PI)).toFixed(2);
    }
  }

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function drawTriangle(angleDegrees) {
    // Draw hypotenuse
    ctx.moveTo(X_CIRCLE_CENTER, Y_CIRCLE_CENTER);

    // Cosine = Adjacent / Hypotenuse so
    // xEndPoint = xStartPoint + radius * cos(angle) [angle in radians]
    let xEndPoint = X_CIRCLE_CENTER + RADIUS * Math.cos(degreesToRadians(angleDegrees));

    // Sine = Opposite / Hypotenuse so
    // yEndPoint = yStartPoint + radius * sin(angle) [angle in radians]
    let yEndPoint = Y_CIRCLE_CENTER + RADIUS * -(Math.sin(degreesToRadians(angleDegrees)));
    drawTextAtPoint(ctx, "Radians : " + degreesToRadians(angleDegrees).toFixed(2), 15, 85);

    ctx.lineTo(xEndPoint, yEndPoint);
    ctx.stroke();

    // Draw Opposite Line
    ctx.moveTo(xEndPoint, yEndPoint);
    ctx.lineTo(xEndPoint, 300);
    ctx.stroke();

    // Draw text for x & y
    drawTextAtPoint(ctx, "(" + xEndPoint.toFixed(2) + "," + yEndPoint.toFixed(2) + ")", xEndPoint + 10, yEndPoint - 10);

    // Calculate the hypotenuse length (Stays Constant)
    let hypotenuseLength = getLineLength(X_CIRCLE_CENTER, Y_CIRCLE_CENTER, xEndPoint, yEndPoint);
    drawTextAtPoint(ctx, "Hypot L : " + hypotenuseLength.toFixed(2), 15, 105);

    // Calculate the opposite length
    let oppositeLength = getLineLength(xEndPoint, yEndPoint, xEndPoint, 300);
    drawTextAtPoint(ctx, "Opp L : " + oppositeLength.toFixed(2), 15, 125);

  }

  // Distance = √((x2 - x1)² + (y2 - y1)²)
  function getLineLength(x1, y1, x2, y2) {
    let xS = x2 - x1;
    xS = xS * xS;
    let yS = y2 - y1;
    yS = yS * yS;
    return Math.sqrt(xS + yS);
  }
}

//PAINT APP 1
