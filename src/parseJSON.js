// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

//'{"boolean, true": true, "boolean, false": false, "null": null }'

  var result;  
  var newJson = json.slice(1, -1);

  if (json[0] === '{') {
    if (json[json.length-1] !== '}') {
      throw new SyntaxError();
    }
    result = {};
    // parseJSON(newJson);
    //split
    var commaLocation = [];
    var inQuotation = false;
    for (var i=1; i<json.length; i++) {
      if (json[i] === '"') {
        inQuotation = !inQuotation;
      }

      if (json[i] === ',') {
        if (!inQuotation) {
          commaLocation.push(i);  
        }
      }
    }

    //TODO: go through commaLocation to manually split string
    var objSplit = newJson.split(',').map( function(item) {
      
      return item.split(':');
    });
console.log(objSplit);

    objSplit.forEach(function(item) {
      console.log(item);
      if (item.length > 1) {
        result[item[0].trim().slice(1, -1)] = parseJSON(item[1].trim());
      }
    });
    // console.log(objSplit)

    console.log(result);
    return result;

  } else if (json[0] === '[') {
    if (json[json.length-1] !== ']') {
      throw new SyntaxError();
    }
    result = [];
    if (newJson.length > 0) {
      var commaSepJSon = newJson.split(',');
      commaSepJSon.forEach( function(item) { 
        result.push(parseJSON(item.trim()));
      });
    }
    return result;
  }

  if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;  
  } else if (json === 'null') {
    return null;
  } else if (json.startsWith('"')) {
    // go through each char until we find closing "
    // for (var i=1; i<json.length; i++) {
    //   if (json[i] === '"') {
    return json.slice(1, json.indexOf('"', 1));
    // }
    // }
  } else {
    // if number
    return Number(json);
  }
  
};

console.log(parseJSON('[{"a":"b"}, {"c":"d"}]'))