(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Todo = require("./model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("./model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // assembles the app
// imports someText in addition to default.


// imports someText in addition to default.


var App = function App() {
  _classCallCheck(this, App);

  this.repo = new _TodoRepository2.default();
  this.todo = new _Todo2.default("first todo argument");
  this.repo.add(this.todo);
  console.log("contains? ", this.repo.contains(this.todo));
  console.log("size ", this.repo.size());
  this.repo.showContent();
  this.repo.remove(this.todo);
  console.log("contains? ", this.repo.contains(this.todo));
  console.log("size ", this.repo.size());
  this.repo.showContent();
};

exports.default = App;

},{"./model/Todo":3,"./model/TodoRepository":4}],2:[function(require,module,exports){
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
};

// export, in addition to default


exports.default = Todo;
var someText = "textVariableValue";
exports.someText = someText;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Todo store


var _Todo = require("./Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoRepository = function () {
  function TodoRepository() {
    _classCallCheck(this, TodoRepository);

    this.store = [];
  }

  _createClass(TodoRepository, [{
    key: "add",
    value: function add(todo) {
      this.store.push(todo);
    }
  }, {
    key: "remove",
    value: function remove(todo) {
      this.store = this.store.filter(function (td) {
        return td.description !== todo.description;
      });
    }
  }, {
    key: "contains",
    value: function contains(todo) {
      return this.store.filter(function (td) {
        return td.description === todo.description;
      }).length > 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.store.length;
    }
  }, {
    key: "showContent",
    value: function showContent() {
      console.log(this.store);
    }
  }]);

  return TodoRepository;
}();

exports.default = TodoRepository;

},{"./Todo":3}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvVG9kby5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9Ub2RvUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0NBOzs7O0FBQ0E7Ozs7OzswSkFGQTtBQUNpQzs7O0FBQ29COzs7SUFHL0MsRyxHQUNKLGVBQWE7QUFBQTs7QUFDWCxPQUFLLElBQUwsR0FBWSw4QkFBWjtBQUNBLE9BQUssSUFBTCxHQUFZLG1CQUFTLHFCQUFULENBQVo7QUFDQSxPQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBSyxJQUFuQjtBQUNBLFVBQVEsR0FBUixDQUFZLFlBQVosRUFBeUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUFLLElBQXhCLENBQXpCO0FBQ0EsVUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLLElBQUwsQ0FBVSxJQUFWLEVBQXJCO0FBQ0EsT0FBSyxJQUFMLENBQVUsV0FBVjtBQUNBLE9BQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBSyxJQUF0QjtBQUNBLFVBQVEsR0FBUixDQUFZLFlBQVosRUFBeUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUFLLElBQXhCLENBQXpCO0FBQ0EsVUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLLElBQUwsQ0FBVSxJQUFWLEVBQXJCO0FBQ0EsT0FBSyxJQUFMLENBQVUsV0FBVjtBQUNELEM7O2tCQUdZLEc7Ozs7O0FDbEJmOzs7Ozs7QUFFQSxvQixDQUpBOzs7Ozs7Ozs7OztJQ0FzQixJLEdBQ3BCLGNBQVksV0FBWixFQUF3QjtBQUFBOztBQUN0QixPQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSxPQUFLLE9BQUwsR0FBZSxJQUFJLElBQUosRUFBZjtBQUNELEM7O0FBSUg7OztrQkFSc0IsSTtBQVN0QixJQUFJLFdBQVcsbUJBQWY7UUFDUSxRLEdBQUEsUTs7Ozs7Ozs7O3FqQkNWUjs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLGM7QUFDbkIsNEJBQWE7QUFBQTs7QUFDWCxTQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7d0JBRUcsSSxFQUFLO0FBQ1AsV0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQjtBQUNEOzs7MkJBRU0sSSxFQUFLO0FBQ1YsV0FBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFtQjtBQUFBLGVBQU0sR0FBRyxXQUFILEtBQW1CLEtBQUssV0FBOUI7QUFBQSxPQUFuQixDQUFiO0FBQ0Q7Ozs2QkFFUSxJLEVBQUs7QUFDWixhQUFPLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0I7QUFBQSxlQUFNLEdBQUcsV0FBSCxLQUFtQixLQUFLLFdBQTlCO0FBQUEsT0FBbEIsRUFBNkQsTUFBN0QsR0FBc0UsQ0FBN0U7QUFDRDs7OzJCQUVLO0FBQUUsYUFBTyxLQUFLLEtBQUwsQ0FBVyxNQUFsQjtBQUEyQjs7O2tDQUV0QjtBQUNYLGNBQVEsR0FBUixDQUFZLEtBQUssS0FBakI7QUFDRDs7Ozs7O2tCQXJCa0IsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGFzc2VtYmxlcyB0aGUgYXBwXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2RlbC9Ub2RvXCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cbmltcG9ydCBUb2RvUmVwb3NpdG9yeSBmcm9tIFwiLi9tb2RlbC9Ub2RvUmVwb3NpdG9yeVwiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5cblxuY2xhc3MgQXBwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucmVwbyA9IG5ldyBUb2RvUmVwb3NpdG9yeSgpO1xuICAgIHRoaXMudG9kbyA9IG5ldyBUb2RvKFwiZmlyc3QgdG9kbyBhcmd1bWVudFwiKTtcbiAgICB0aGlzLnJlcG8uYWRkKHRoaXMudG9kbyk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWlucz8gXCIsdGhpcy5yZXBvLmNvbnRhaW5zKHRoaXMudG9kbykpXG4gICAgY29uc29sZS5sb2coXCJzaXplIFwiLCB0aGlzLnJlcG8uc2l6ZSgpKTtcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcbiAgICB0aGlzLnJlcG8ucmVtb3ZlKHRoaXMudG9kbyk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWlucz8gXCIsdGhpcy5yZXBvLmNvbnRhaW5zKHRoaXMudG9kbykpXG4gICAgY29uc29sZS5sb2coXCJzaXplIFwiLCB0aGlzLnJlcG8uc2l6ZSgpKTtcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvLyBydW5zIHRoZSBhcHBcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxubmV3IEFwcCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgIGNsYXNzIFRvZG97XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKXtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoKTtcbiAgfVxufVxuXG5cbi8vIGV4cG9ydCwgaW4gYWRkaXRpb24gdG8gZGVmYXVsdFxubGV0IHNvbWVUZXh0ID0gXCJ0ZXh0VmFyaWFibGVWYWx1ZVwiO1xuZXhwb3J0IHtzb21lVGV4dH07XG4iLCIvLyBUb2RvIHN0b3JlXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9SZXBvc2l0b3J5e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuc3RvcmUgPSBbXTtcbiAgfVxuXG4gIGFkZCh0b2RvKXtcbiAgICB0aGlzLnN0b3JlLnB1c2godG9kbyk7XG4gIH1cblxuICByZW1vdmUodG9kbyl7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuc3RvcmUuZmlsdGVyKCB0ZCA9PiB0ZC5kZXNjcmlwdGlvbiAhPT0gdG9kby5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBjb250YWlucyh0b2RvKXtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5maWx0ZXIodGQgPT4gdGQuZGVzY3JpcHRpb24gPT09IHRvZG8uZGVzY3JpcHRpb24pLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzaXplKCl7IHJldHVybiB0aGlzLnN0b3JlLmxlbmd0aDsgfVxuXG4gIHNob3dDb250ZW50KCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zdG9yZSk7XG4gIH1cbn1cbiJdfQ==
