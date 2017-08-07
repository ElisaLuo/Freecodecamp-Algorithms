//Sum all numbers in a range
function sumAll(arr) {
  var nums = [];
  arr.sort(function(a, b){
    return a - b;
  });
  for(var i = arr[0]; i < arr[1] + 1; i++){
    nums.push(i);
  }
  return nums.reduce(function(total, num){
    return total+num;
  });
  
}

//Diff two arrays
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(function(item){
    return !arr1.includes(item) || !arr2.includes(item);
  }); 
}

//Roman numberal converter
function convertToRoman(num) {
var romans = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNumber = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<ints.length; i++){
      units(ints[i]);
  }
  function units(){
    numeral = romans[i*2];
    switch(ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[(i*2)+1]));
        break;
      case 5:
        romanNumber.push(romans[(i*2)+1]);
        break;
      case 6:
        romanNumber.push(romans[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
      }
    }
  return romanNumber.reverse().join("").toString();
}


//Wherefore art thou
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}


//search and replace
function myReplace(str, before, after) {
  var x = str.replace(before,after);
  var y = before.split("");
  var z = after.split("");
  if(y[0].toUpperCase()==y[0]){
  z[0] = z[0].toUpperCase();
  return str.replace(before, z.join(""));
  }
  else{
    return x;
  }
}


//pig latin
function translatePigLatin(str) {
  var x = str.match(/^[bcdfghjklmnpqrstvwxyz]+/i);
  var a = str.slice("");
 
  if (x){
    str = str.slice(x[0].length) + x + "ay";
    return str;
  }
   else if (a[0] === "a" || "e" || "i" || "o" || "u"){
    return str + "way";
  }
}


//dna pairing
function pairElement(str) {
   var paired = [];

  
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}


//missing letters
function fearNotLetter(str) {
  var a = str.split("");
  var b = [];
  for (var d = 0; d < a.length; d++){
    b.push(a[d].charCodeAt());
  }
  for (var c = 0; c < b.length-1; c++){
    if((b[c] - b [c+1]) !== -1){
      return String.fromCharCode(b[c]+1);
    }
  }
}


//boo who
function booWho(bool) {
  if (bool === true || bool === false){
    return true;
  }
  else{
    return false;
  }
}

//sorted union
function uniteUnique(arr, arr1, arr2) {
  var a = [];
  for (var i = 0; i < arguments.length; i++){
   for(var j = 0; j < arguments[i].length; j++){
     if(a.indexOf(arguments[i][j]) < 0){
       a.push(arguments[i][j]);
     }
   }
  }
  return a;
}


//convert html entities
function convertHTML(str) {
  var a = str.split('');

  for (var i = 0; i < a.length; i++) {
    switch (a[i]) {
      case '<':
        a[i] = '&lt;';
        break;
      case '&':
        a[i] = '&amp;';
        break;
      case '>':
        a[i] = '&gt;';
        break;
      case '"':
        a[i] = '&quot;';
        break;
      case "'":
        a[i] = "&apos;";
        break;
    }
  }

  a = a.join('');
  return a;
}


//Spinal Tap case
function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
}


// Sum all odd fibonaci numbers

function sumFibs(num) {
    var a= 0;
    var b = 1;
    var c = 0;
    while (b <= num) {
        if (b % 2 !== 0) {
            c += b;
        }
        b += a;
        a = b - a;
    }
    return c;
}


//sum all primes
function sumPrimes(num) {
  var result = [];
  var a;
  for(var i = 2; i <= num; i++){
    var isPrime = true;
    for(var j = 2; j < i; j++){
      if(i % j === 0){
        isPrime = false;
      }
    }
    if (isPrime){
      result.push(i);
    }
   }
  a = result.reduce(function(a,b){
    return a + b;
  });
  
  return a;
}


//smallest common multiple
function smallestCommons(arr) {
  var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}


//finders keepers
function findElement(arr, func) {
  var a = arr.filter(func);
  return a[0];
}


//drop it
function dropElements(arr, func) {
  var time = arr.length;
  for(var i = 0; i < time; i++){
    if(func(arr[0]) === true){
      break;
    }
    else{
      arr.shift();
    }
}
  return arr;
}


//steamroller
function steamrollArray(arr) {
   var flattened = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) === true) {
            flattened = flattened.concat(steamrollArray(arr[i]));
        } else {
          
            flattened.push(arr[i]);
        }
    }
    return flattened;
}


//binary agents
function binaryAgent(str) {
 var biString = str.split(' ');
  var a = [];
   for(i=0;i < biString.length;i++){
   a.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return a.join('');
}


//everything be true
function truthCheck(collection, pre) {
   var counter =0;
  for(i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
      counter++;
    }
  }
  return counter == collection.length;
}


//arguments optional
function addTogether() {
  
    var args = new Array(arguments.length);
  for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
  
 if(args.length == 2){
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
      return undefined;
      }
   else{
    return args[0]+args[1];
   }
   }

 if(args.length == 1){
     var a = args[0];
    if(typeof a!=='number'){
        return undefined;
      }
    else{
       return function(b){
         if(typeof b !=='number'){
           return undefined;
           }
         else
           return a+b;
          };
      }
    }
}
