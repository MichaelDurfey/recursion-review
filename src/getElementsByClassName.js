// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  var domSearch = function(node) {
    //see if classname contained in node
    if (node.classList && node.classList.contains(className)) {
      //if so, push to results
      results.push(node);
    }
    //go through child nodes
    if (node.hasChildNodes()) {
      var childList = node.childNodes;
      for (var i = 0; i < childList.length; i++) {
        domSearch(childList[i]);
      }
    }
  };
  domSearch(document.body);
  return results;
};
