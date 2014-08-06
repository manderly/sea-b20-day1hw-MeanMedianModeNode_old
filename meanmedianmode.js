function meanMedianMode(args) {
  var num = 0;
  var mode = 0;
  var sortArgs = [];
  var sum = 0;
  var modeMap = {};
  var mostFrequentNum;
  var numOccurrences = 0;
  var midpoint = 0;
  
  
  //*** PRE PROCESSING LOOP ***
  //Remember that the first 2 array elements are actually node elements and should be skipped
  for (i = 2; i < args.length; i ++) {
    num = args[i];

    //mean and median pre-processing (build a sum and a sorted array for later use)
    sum += Number(num);
    sortArgs.push(num);
    //mode processing - use an object to track occurrences of each unique number and keep track of which one occurs most frequently
    if (modeMap[num] == null) {
      modeMap[num] = 1;
    } else {
      modeMap[num]++;
      if (modeMap[num] > numOccurrences) {
        mode = num;
        numOccurrences = modeMap[num];
      }
    }
  }
  //thanks for help with the mode solution: 
  //http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array

  //*** MEAN *** Sum the numbers and divide by the quantity of numbers
  var mean = Math.floor(sum / (args.length - 2)); //round off the long decimal

  //*** MEDIAN *** Sort into ascending order and return the number in the middle
  midpoint = sortArgs.length / 2;
  if (midpoint % 2 !== 0) { //for arrays with an uneven number of elements
    midpoint = Math.floor(midpoint);
  }
  //sorting the array - the function(a,b) trick ensures 19999 doesn't come before 2
  //thanks http://www.sitepoint.com/javascript-array-sorting/ for the help
  sortArgs = sortArgs.sort(function(a,b) {
    return a - b;
    });
  var median = sortArgs[midpoint];


  //*** MODE *** The most frequently occurring number in the set, if there is one.
  //Mode was already calculated in the for loop, but this handles cases where no mode was found
  if (mode == 0) {
    mode = "NO MODE";
  }

  console.log("Mean: " + mean + " // Median: " + median + " of sorted numbers: " + sortArgs + " // Mode: " + mode);
}

meanMedianMode(process.argv);