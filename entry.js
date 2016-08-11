// Accept hot module reloading
if (module.hot) {
  module.hot.accept()
}

require("!style!css!./style.css");

var Please = require('pleasejs');
var div = document.getElementById('color');
var button = document.getElementById('button');

function changeColor() {
    div.style.backgroundColor = Please.make_color();
}

button.addEventListener('click', changeColor);

document.write('It work 333.');
document.write(require("./content.js"));


import * as math from "lib/math";