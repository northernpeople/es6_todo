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
  console.log("created: ", this);
};

exports.default = Todo;


var someText = "textVariableValue";
exports.someText = someText; // export, in addition to default

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0NBOzs7Ozs7MEpBREE7OztBQUM2Qzs7O0lBR3ZDLEcsR0FDSixlQUFhO0FBQUE7O0FBQ1gscUJBQVMscUJBQVQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxvRUFBWjtBQUNELEM7O2tCQUdZLEc7Ozs7O0FDVGY7Ozs7OztBQUVBLG9CLENBSkE7Ozs7Ozs7Ozs7O0lDQXNCLEksR0FDcEIsY0FBWSxXQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLE9BQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLFVBQVEsR0FBUixDQUFZLFdBQVosRUFBd0IsSUFBeEI7QUFDRCxDOztrQkFKbUIsSTs7O0FBT3RCLElBQUksV0FBVyxtQkFBZjtRQUNRLFEsR0FBQSxRLEVBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBhc3NlbWJsZXMgdGhlIGFwcFxuaW1wb3J0IERvZG8sIHtzb21lVGV4dH0gZnJvbSBcIi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5cblxuY2xhc3MgQXBwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIG5ldyBEb2RvKFwiZmlyc3QgdG9kbyBhcmd1bWVudFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImFsc28gY2FuIGFjY2VzcyBzb21lVGV4dCBpbXBvcnRlZCBmcm9tIFRvZG8uanMgOiBcIiArIHNvbWVUZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvLyBydW5zIHRoZSBhcHBcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxubmV3IEFwcCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgIGNsYXNzIFRvZG97XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKXtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVkOiBcIix0aGlzKTtcbiAgfVxufVxuXG5sZXQgc29tZVRleHQgPSBcInRleHRWYXJpYWJsZVZhbHVlXCI7XG5leHBvcnQge3NvbWVUZXh0fTsgLy8gZXhwb3J0LCBpbiBhZGRpdGlvbiB0byBkZWZhdWx0XG4iXX0=
