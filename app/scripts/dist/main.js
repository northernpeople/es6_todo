(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Todo = require("./model/Todo");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // assembles the app


var App = function App() {
  _classCallCheck(this, App);

  new _Todo.Todo("first todo argument");
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

var Todo = exports.Todo = function Todo(description) {
  _classCallCheck(this, Todo);

  this.description = description;
  console.log("created: ", this);
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0NBOzswSkFEQTs7O0lBR00sRyxHQUNKLGVBQWE7QUFBQTs7QUFDWCxpQkFBUyxxQkFBVDtBQUNELEM7O2tCQUdZLEc7Ozs7O0FDUGY7Ozs7OztBQUVBLG9CLENBSkE7Ozs7Ozs7Ozs7O0lDQWEsSSxXQUFBLEksR0FDWCxjQUFZLFdBQVosRUFBd0I7QUFBQTs7QUFDdEIsT0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsVUFBUSxHQUFSLENBQVksV0FBWixFQUF3QixJQUF4QjtBQUNELEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBhc3NlbWJsZXMgdGhlIGFwcFxuaW1wb3J0IHtUb2RvfSBmcm9tIFwiLi9tb2RlbC9Ub2RvXCI7XG5cbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBuZXcgVG9kbyhcImZpcnN0IHRvZG8gYXJndW1lbnRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy8gcnVucyB0aGUgYXBwXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cbm5ldyBBcHAoKTtcbiIsImV4cG9ydCBjbGFzcyBUb2Rve1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbil7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZDogXCIsdGhpcyk7XG4gIH1cbn1cbiJdfQ==
