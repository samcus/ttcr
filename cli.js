#!/usr/bin/env node
const meow = require("meow");
const textToCodeRatio = require("./index.js");

const cli = meow({
  help: [
    'Usage',
    ' $ ttcr "<url>"',
    '',
    'Example',
    ' $ ttcr https://samcus.co'
  ]
});

var input = cli.input[0];

function init(url) {
  textToCodeRatio(url,function(ratio){
    console.log(ratio);
  });
}

init(input);
