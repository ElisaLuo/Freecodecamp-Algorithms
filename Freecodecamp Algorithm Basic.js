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
function repeatStringNumTimes(str, num) {
  var answer = [];
  for(var i = 0; i < num; i++){
    answer.push(str);
  }
  return answer.join("");
}


//Truncate a string
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var answer = [];
  for(var i = 0; i < arr.length/size; i++){
    answer.push(arr.slice(i * size, (i + 1) * size));
  }
  return answer;
}


//Slasher Flick
function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length + 1);
}


//Mutations
function mutation(arr) {
  var letters = arr[1].toLowerCase().split("");
  var answers = [];
  
  for(var i = 0; i < letters.length; i++){
    answers.push(arr[0].toLowerCase().includes(letters[i]));
  }
  
  return answers.every(function (element) { 
    return element === true; 
  } );
}


//Falsy Bouncer
function bouncer(arr) {
  return arr.filter(Boolean);;
}


//Seek and Destroy
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < args.length; j++){
      if(arr[i] == args[j]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}


//Where do I belong
function getIndexToIns(arr, num) {
  var answer = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < num){
      answer.push(arr[i]);
    }
  }
  return answer.length;
}


//Caesars Cipher
function rot13(str) { // LBH QVQ VG!
  var answers = [];
  var correct = [];
  var final = [];
  
  for(var i = 0; i < str.length; i++){
    answers.push(str.split("")[i].charCodeAt());
    if(answers[i] < 65 || answers[i] > 90){
      correct.push(answers[i]);
    }
    else if(answers[i] <= 77){
      correct.push(answers[i] + 13);
    }
    else if(answers[i] >= 77){
      correct.push(answers[i] - 13);
    }
    final.push(String.fromCharCode(correct[i]));
  }
  return final.join("");
}
