function xhrDemo() {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState === 4) { // readyState is done
      if (XHR.status === 200) {
      console.log(XHR.responseText);
      } else {
        console.log("Request could not complete")
      }
    }
  }
  XHR.open("GET", 'https://api.github.com/zen');
  XHR.send();
}

module.exports = xhrDemo;