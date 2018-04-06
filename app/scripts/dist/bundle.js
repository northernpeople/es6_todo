(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Todo = require("./model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // assembles the app


// imports someText in addition to default.


var App = function App() {
  _classCallCheck(this, App);

  new _Todo2.default("first todo argument");
  console.log("also can access someText imported from Todo.js : " + _Todo.someText);
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
  this.created = new Date();
  console.log("created: ", this);
};

// export, in addition to default


exports.default = Todo;
var someText = "textVariableValue";
exports.someText = someText;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0NBOzs7Ozs7MEpBREE7OztBQUM2Qzs7O0lBR3ZDLEcsR0FDSixlQUFhO0FBQUE7O0FBQ1gscUJBQVMscUJBQVQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxvRUFBWjtBQUNELEM7O2tCQUdZLEc7Ozs7O0FDVGY7Ozs7OztBQUVBLG9CLENBSkE7Ozs7Ozs7Ozs7O0lDQXNCLEksR0FDcEIsY0FBWSxXQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLE9BQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLE9BQUssT0FBTCxHQUFlLElBQUksSUFBSixFQUFmO0FBQ0EsVUFBUSxHQUFSLENBQVksV0FBWixFQUF3QixJQUF4QjtBQUNELEM7O0FBSUg7OztrQkFUc0IsSTtBQVV0QixJQUFJLFdBQVcsbUJBQWY7UUFDUSxRLEdBQUEsUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGFzc2VtYmxlcyB0aGUgYXBwXG5pbXBvcnQgRG9kbywge3NvbWVUZXh0fSBmcm9tIFwiLi9tb2RlbC9Ub2RvXCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cblxuXG5jbGFzcyBBcHB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgbmV3IERvZG8oXCJmaXJzdCB0b2RvIGFyZ3VtZW50XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiYWxzbyBjYW4gYWNjZXNzIHNvbWVUZXh0IGltcG9ydGVkIGZyb20gVG9kby5qcyA6IFwiICsgc29tZVRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIi8vIHJ1bnMgdGhlIGFwcFxuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xuXG5uZXcgQXBwKCk7XG4iLCJleHBvcnQgZGVmYXVsdCAgY2xhc3MgVG9kb3tcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZDogXCIsdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBleHBvcnQsIGluIGFkZGl0aW9uIHRvIGRlZmF1bHRcbmxldCBzb21lVGV4dCA9IFwidGV4dFZhcmlhYmxlVmFsdWVcIjtcbmV4cG9ydCB7c29tZVRleHR9O1xuIl19
