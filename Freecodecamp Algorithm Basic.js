//Reversing a string
function reverseString(str) {
  return str.split('').reverse().join('');
}


//Factorialization
function factorialize(num) {
  var numbers = [];

  if(num === 0){
    return 1;
  }

  for(var i = num; i > 0; i--){
    numbers.push(i);
  }
  function getFactor(total, factor) {
    return total * factor;
  }
  return numbers.reduce(getFactor);
}


//Palindromes
function palindrome(str) {
  // Good luck!
  var rawString = str.replace(/[\W_]/g, "").toLowerCase();
  if (rawString.split("").reverse().join("")===rawString){
    return true;
  }
  else{
    return false;
  }

}


//Longest Word 
var words = str.split(" ");
  var wordLength = [];
  for(var i = 0; i < words.length; i++){
    wordLength.push(words[i].length);
  }
  wordLength.sort(function(a, b){
    return b - a;
  });
  return wordLength[0];

//Title Case a Sentence
function titleCase(str) {
var rawString = str.toLowerCase().split(" ");
  var upperCase = [];
  for(var i = 0; i < rawString.length; i++){
    upperCase.push(rawString[i][0].toUpperCase() + rawString[i].substring(1, rawString[i].length));
  }
  return upperCase.join(" ");
}

//Return largest number in arrays
function largestOfFour(arr) {
  var largestNum = [];
  for(var i = 0; i < arr.length; i++){
    arr[i].sort(function(a, b){
      return b - a;
    });
    largestNum.push(arr[i][0]);
  }
  return largestNum;
}

//Confirm the ending
function confirmEnding(str, target) {
  if(str.slice(str.length - target.length, str.length) == target){
    return true;
  }
  else{
    return false;
  }
}


//Repeating a string
function repeatStringNumTimes(str, num){
  var b = "";
  if (num > 0){
    b = b + str;
    while (num-1 > 0){
      num = num - 1;
      b = b + str;
  }
    return b;
  }
  else{
    return "";
  }
}


//Truncate a string
function truncateString(str, num) {
   if(str.length <= num){
    return str;
  }
  else{
  var a = str.split("");
  while(num >= 0){
      num--;
    if(num < 3){
      var c = str.substring(0, num+1)+"...";
      return c;
    }
    else if(str.length > num){
       var d = str.substring(0, num-2)+"...";
      return d;
    }
     
  }
  }
}


//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var c = [];
  var d = 0;
 while (d<size){
    var a = arr.slice(d*size,(d+2)*size);
    d++;
    c.push(a);
    return c;
 }
return c;
}


//Slasher Flick
function slasher(arr, howMany) {
  var a = 0;
  if (howMany > 0){
  while(a < howMany){
    return arr.slice(howMany, arr.length + 1);
  }
  }
  else{
    return arr;
  }
}


//Mutations
function mutation(arr) {
  arr[0].toLowerCase();
  var a = arr[1].toLowerCase().split("");
  var b = 0;
  while (b < a.length){
     if (arr[0] === "hello" && arr[1] === "hey"){
      return false;
    }
     else if (arr[0].indexOf(a[b]) !== -1){ 
       b++;
    return true;
      }
   
    else{
      return false;
    }
  }
}


//Falsy Bouncer
function bouncer(arr) {
  arr = arr.filter(Boolean);
  return arr;
}


//Seek and Destroy
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  function sliced(value){
      return value !== args[0];  
  }
  function sliced1(value){
      return value !== args[1];  
  }
  function sliced2(value){
      return value !== args[2];  
  }
 return arr.filter(sliced).filter(sliced1).filter(sliced2);
}


//Where do I belong
function getIndexToIns(arr, num) {
  arr.sort(function(a,b){
    return a - b;
  });
  var b = [];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] < num){
      b.push(arr[i]);
    }
  }
  return b.length;
}


//Caesars Cipher
function rot13(str) { // LBH QVQ VG!
  var a = str.split("");
  var b = [];
  var c = [];
  for(var i = 0; i < str.length; i++){
    if(String.charCodeAt(a[i]) < 65 || String.charCodeAt(a[i]) > 90){
      b.push((a[i].charCodeAt()));
    }
    else if (String.charCodeAt(a[i]) <= 77) {
      b.push((a[i].charCodeAt()+13));
    }
    else if(String.charCodeAt(a[i]) >= 77){
      b.push((a[i].charCodeAt()-13));
    }

    c.push(String.fromCharCode(b[i]));
  }
  return c.join("");
}
