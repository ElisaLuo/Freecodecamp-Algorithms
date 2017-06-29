//Valid US Numbers
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

//Record Collection
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  }
  else if (value !== "") {
    collection[id][prop] = value;
  }
  else {
    delete collection[id][prop];
  }
  return collection;
}

//Symmetric Difference
function sym() {
  var args = [];
  for(var i = 0; i < arguments.length; i++){
    args.push(arguments[i]);
  }
  function find(arr1, arr2){
    var answer = [];
    arr1.forEach(function(item){
      if(arr2.indexOf(item) < 0 && answer.indexOf(item) < 0) {
        answer.push(item);
      }
    });
    arr2.forEach(function(item){
      if(arr1.indexOf(item) < 0 && answer.indexOf(item) < 0) {
        answer.push(item);
      }
    });
    return answer;
  }
  return args.reduce(find);
}

//Map the Debris
function orbitalPeriod(arr) {
 var GM = 398600.4418;
 var earthRadius = 6367.4447;
 var a = 2 * Math.PI;
 var newArr = [];
 var getOrbPeriod = function(obj) {
   var c = Math.pow(earthRadius + obj.avgAlt, 3);
   var b = Math.sqrt(c / GM);
   var orbPeriod = Math.round(a * b);
   delete obj.avgAlt;
   obj.orbitalPeriod = orbPeriod;
   return obj;
 };
 for (var elem in arr) {
   newArr.push(getOrbPeriod(arr[elem]));
 }
  return newArr;
}

//Make a Person
var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};

//Inventory updates
function updateInventory(arr1, arr2) {
    var index;
    var getProductIndex = function (name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    };
    for (var i = 0; i < arr2.length; i++) {
        index = getProductIndex.call(arr1, arr2[i][1]);
        if (index === undefined) {
            arr1.push(arr2[i]);
        } else {
            arr1[index][0] += arr2[i][0];
        }

    }
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return arr1;
}

//Exact Change
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];


function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});
  if (register.total === change) {
    return 'Closed';
  }
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc;
  }, []);

  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }
  return change_arr;
}


//Pairwise
function pairwise(arr, arg) {
 var sum = 0;
 var pairArr = arr.slice();

 for(i = 0; i < pairArr.length; i++) {
   for(j = i + 1; j < pairArr.length; j++) {
     if(pairArr[i] + pairArr[j] == arg) {
       sum += i + j;
       pairArr[i] = pairArr[j] = NaN;
     }
   }
 }
 return sum;
}

//No Repeats Please
function permAlone(str) {
  var regex = /(.)\1+/g;
  var arr = str.split('');
  var permutations = [];
  var tmp;

  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  function generate(int) {
    if (int === 1) {
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  return filtered.length;
}
