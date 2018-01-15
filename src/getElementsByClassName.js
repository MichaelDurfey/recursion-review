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
    if (node.classList.contains(className)) {
      //if so, push to results
      results.push(node);
    }
    //go through child nodes
    
    for (let i = 0; i < node.children.length; i++) {
      //domSearch
      domSearch(node.children[i]);
    }
  };
  domSearch(document.body);
  return results;
};
