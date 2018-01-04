function updatePhoto(img) { 
  document.getElementById("photo").src = img;
  document.getElementById('loading').className= "ui dimmer";
}

function xhrDemo(callback) {
  document.getElementById('loading').className= "ui active dimmer";
  var XHR = new XMLHttpRequest();
  XHR.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result); // gets image blob and outputs it as data 64
    }
    reader.readAsDataURL(XHR.response);
  };
  XHR.open("GET", 'https://cataas.com/cat');  
  XHR.responseType = 'blob';
  XHR.send();
}
 
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  xhrDemo(function(dataUrl) {
    updatePhoto(dataUrl)
  });
});

xhrDemo(function(dataUrl) {
  
  updatePhoto(dataUrl)
});