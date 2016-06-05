const textToCodeRatio = require("../index.js");

textToCodeRatio('http://samcus.co',function(data){
  console.log(data);
});

console.log("This is a non-blocking module");
