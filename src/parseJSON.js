// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var result;  

  var jsonSplit = json.split('');
  
  
  
  //use startsWith method to check first element
    //make result element type;
    //split json 
    //invoke matching function with element
  if (json.match(/true/g)) {
    return true;
  } 

  var myMethods = {
    'parseArray': function () {
  
    },
    'parseObj': function () {
  
    },
    'parseString': function () {
  
    },
    'parseNumber': function () {
  
    },
    'parseBoolean': function () {
  
    },
    'parseNull': function () { 

    }
  };
  
};


//[]