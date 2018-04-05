(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Todo = require("./model/Todo");

var todoModule = _interopRequireWildcard(_Todo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // assembles the app


var App = function App() {
  _classCallCheck(this, App);

  new todoModule.Todo("first todo argument");
};

exports.default = App;

},{"./model/Todo":3}],2:[function(require,module,exports){
"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default(); // runs the app

},{"./app":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function Todo(description) {
  _classCallCheck(this, Todo);

  this.description = description;
  console.log("created: ", this);
};

exports.Todo = Todo;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0NBOztJQUFZLFU7Ozs7MEpBRFo7OztJQUdNLEcsR0FDSixlQUFhO0FBQUE7O0FBQ1gsTUFBSSxXQUFXLElBQWYsQ0FBb0IscUJBQXBCO0FBQ0QsQzs7a0JBR1ksRzs7Ozs7QUNQZjs7Ozs7O0FBRUEsb0IsQ0FKQTs7Ozs7Ozs7Ozs7SUNBTSxJLEdBQ0osY0FBWSxXQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLE9BQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLFVBQVEsR0FBUixDQUFZLFdBQVosRUFBd0IsSUFBeEI7QUFDRCxDOztRQUdLLEksR0FBQSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gYXNzZW1ibGVzIHRoZSBhcHBcbmltcG9ydCAqIGFzIHRvZG9Nb2R1bGUgZnJvbSBcIi4vbW9kZWwvVG9kb1wiO1xuXG5jbGFzcyBBcHB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgbmV3IHRvZG9Nb2R1bGUuVG9kbyhcImZpcnN0IHRvZG8gYXJndW1lbnRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy8gcnVucyB0aGUgYXBwXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cbm5ldyBBcHAoKTtcbiIsImNsYXNzIFRvZG97XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKXtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVkOiBcIix0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQge1RvZG99O1xuIl19
