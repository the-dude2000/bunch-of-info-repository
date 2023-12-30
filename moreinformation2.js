/*

MATH

An asymptote is a straight line that constantly approaches a 
given curve but does not meet at any infinite distance. In other words, 
Asymptote is a line that a curve approaches as it moves towards infinity.

DOM HELP

JavaScript DOM: Exercise-1 with Solution

Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.

Sample HTML file:

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>


Tips: Clicking on the button the font, font size, and color of the paragraph text will be changed.

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>


JavaScript Code:

function js_style() 
{
//font styles added by JS:
 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";
}

JavaScript DOM: Exercise-2 with Solution

Write a JavaScript function to get the values of First and Last names of the following form.

Sample HTML file:

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>


Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
<style type="text/css">
body {margin: 30px;}
</style> 
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body></html>


JavaScript Code :

function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}

JavaScript DOM: Exercise-3 with Solution

Write a JavaScript program to set paragraph background color.

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Set the background color of a paragraph</title>
</head>
<body>
<input type="button" value="Click to set paragraph background color" onclick="set_background()">
<p>w3resource JavaScript Exercises</p>
<p>w3resource PHP Exercises</p> 
</body>
</html>


JavaScript Code:

function set_background() {
 docBody = document.getElementsByTagName("body")[0];
  //Get all the p elements that are descendants of the body
  myBodyElements = docBody.getElementsByTagName("p");
// get the first p elements
  myp1 = myBodyElements[0];
  myp1.style.background = "rgb(255,0,0)";
// get the second p elements
  myp2 = myBodyElements[1];
  myp2.style.background = "rgb(255,255,0)";
}

JavaScript DOM: Exercise-4 with Solution

Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

Sample HTML file:

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
</head>
<body>
<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
<button onclick="getAttributes()">Click here to get  attributes value</button>
</body></html>


Sample Solution: -

HTML Code:

<!DOCTYPE html> 
<html> 
<head> 
<meta charset=utf-8 /> 
<title>Collect the value of href, hreflang, rel, target, and type attributes of a link</title> 
</head> 
<body> 
<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p> 
<button onclick="getAttributes()">Click here to get the attribute's value</button>  
</body> 
</html>


JavaScript Code:

function getAttributes()
{
 var u = document.getElementById("w3r").href;
 alert('The value of the href attribute of the link is : '+u);
 var v = document.getElementById("w3r").hreflang;   
 alert('The value of the hreflang attribute of the link is : '+v);
 var w = document.getElementById("w3r").rel; 
  alert('The value of the rel attribute of the link is : '+w);
 var x = document.getElementById("w3r").target; 
  alert('The value of the taget attribute of the link is : '+x);
 var y = document.getElementById("w3r").type; 
  alert('The value of the type attribute of the link is : '+y);  
}

JavaScript DOM: Exercise-5 with Solution

Write a JavaScript function to add rows to a table.

Sample HTML file:

<!DOCTYPE html>
<html><head><meta charset=utf-8 />
<title>Insert row in a table - w3resource</title>
</head><body>
<table id="sampleTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
</table><br>
<input type="button" onclick="insert_Row()" value="Insert row"> 
</body></html>


Sample Solution:

HTML Code:

<!DOCTYPE html> 
<html><head> 
<meta charset=utf-8 /> 
<title>Insert row in a table - w3resource</title> 
</head><body> 
<table id="sampleTable" border="1"> 
<tr><td>Row1 cell1</td> 
<td>Row1 cell2</td></tr> 
<tr><td>Row2 cell1</td> 
<td>Row2 cell2</td></tr> 
</table><br> 
<input type="button" onclick="insert_Row()" value="Insert row">  
</body></html>


JavaScript Code:

function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}

JavaScript DOM: Exercise-6 with Solution

Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.

Sample HTML file:

<!DOCTYPE html>
<html><head><meta charset=utf-8 />
<title>Change the content of a cell</title>
</head><body>
<table id="myTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
<tr><td>Row3 cell1</td>
<td>Row3 cell2</td></tr>
</table><form>
<input type="button" onclick="changeContent()" value="Change content">
</form></body></html>


Sample Solution: -

HTML Code:

<!DOCTYPE html> 
<html> 
<head> 
<meta charset=utf-8 /> 
<title>Change the content of a cell</title> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
</head><body> 
<table id="myTable" border="1"> 
<tr><td>Row1 cell1</td> 
<td>Row1 cell2</td></tr> 
<tr><td>Row2 cell1</td> 
<td>Row2 cell2</td></tr> 
<tr><td>Row3 cell1</td> 
<td>Row3 cell2</td></tr> 
</table><form> 
<input type="button" onclick="changeContent()" value="Change content"> 
</form></body></html>


JavaScript Code:

function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}


JavaScript DOM: Exercise-7 with Solution

Write a JavaScript function to create a table, accept row and column numbers, and input row-column numbers as cell content (e.g. Row-0 Column-0).

Sample HTML file:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Change the content of a cell</title>
<style type="text/css">
body {margin: 30px;}
</style>  
</head><body>
<table id="myTable" border="1">
</table><form>
<input type="button" onclick="createTable()" value="Create the table">
</form></body></html>


Sample Solution: -

HTML Code:

<!DOCTYPE html> 
<html> 
<head> 
<meta charset=utf-8 /> 
<title>Create a table</title> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
</head><body> 
<table id="myTable" border="1"> 
</table><form> 
<input type="button" onclick="createTable()" value="Create the table"> 
</form></body></html>


JavaScript Code:

function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Remove items from a dropdown list</title>
</head><body><form>
<select id="colorSelect">
<option>Red</option>
<option>Green</option>
<option>White</option>
<option>Black</option>
</select>
<input type="button" onclick="removecolor()" value="Select and Remove"></form></body></html>


Sample Solution: -

HTML Code:

<!DOCTYPE html> 
<html> 
<head> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
<meta charset=utf-8 /> 
<title>Remove items from a dropdown list</title> 
</head><body><form> 
<select id="colorSelect"> 
<option>Red</option> 
<option>Green</option> 
<option>White</option> 
<option>Black</option> 
</select> 
<input type="button" onclick="removecolor()" value="Select and Remove"> 
</form></body></html>


JavaScript Code:

function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}


JavaScript DOM: Exercise-9 with Solution

Write a JavaScript program to count and display the items of a dropdown list in an alert window.

Sample Solution:-

HTML Code:

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Volume of a Sphere</title>
<style>  
body{padding-top:30px;}
label,input{display:block;}  
</style>
</head>
<body>
<p>Input radius value and get the volume of a sphere.</p>
<form action="" method="post" id="MyForm">
<label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
<label for="volume">Volume</label><input type="text" name="volume" id="volume">
<input type="submit" value="Calculate" id="submit">    </form>
</body>
</html>


JavaScript Code:

function getOptions()
{
var x=document.getElementById("mySelect");
var txt1 = "No. of items : ";
var i;
l=document.getElementById("mySelect").length;  
txt1 = txt1+l;
for (i=0;i<x.length;i++)
  {
    txt1 = txt1 + "\n" + x.options[i].text;
  }
alert(txt1);
}

JavaScript DOM: Exercise-10 with Solution

Write a JavaScript program to calculate sphere volume.

Sample Output of the form :

volume sphere html form

Sample Solution: -

HTML Code:

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Volume of a Sphere</title>
<style> 
body{padding-top:30px;}
label,input{display:block;} 
</style>
</head>
<body>
<p>Input radius value and get the volume of a sphere.</p>
<form action="" method="post" id="MyForm">
<label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
<label for="volume">Volume</label><input type="text" name="volume" id="volume">
<input type="submit" value="Calculate" id="submit">    </form>
</body>
</html>


JavaScript Code:

function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

JavaScript DOM: Exercise-11 with Solution

Write a JavaScript program to display a random image (clicking on a button) from the following list.

Sample Image information :

"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Display a random image.</title>
<style type="text/css">
body {margin-top: 30px;}
</style> 
</head>
<body>
<div>
<button id="jsstyle" 
onclick="display_random_image();">Show Image</button> 
</div>
</body>
</html>


JavaScript Code:

function display_random_image() 
{
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

JavaScript DOM: Exercise-12 with Solution

Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.

Sample link and text:
[On mouse over here bold words of the following paragraph will be highlighted]

Sample Solution: -

HTML Code:

<!doctype html>
  <html>
  <head>
  <meta charset="UTF-8">
  <title>Get And Style All Tags</title>
  </head>
  <body> 
  <p>[<a href="#" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following paragraph will be highlighted</a>]</p> 
<p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
  </body>
  </html>
  


JavaScript Code:

//First create a list of all bold items 
var bold_Items;
window.onload = getBold_items();
 
// Collect all <strong> tags
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight() 
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}

JavaScript DOM: Exercise-13 with Solution

Write a JavaScript program to get the window width and height (any time the window is resized).

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Window Size : height and width</title>
</head>
<!-- Resize the window (here output panel) and see the result !-->
<body onload="getSize()" onresize="getSize()">
<div id="wh"> 
<!-- Place height and width size here! --> 
</div>
<body>
</body>
</html>


JavaScript Code:

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";
}





*/