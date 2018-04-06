(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // assembles the app


var _Todo = require("./model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("./model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

var _TodoController = require("./controller/TodoController");

var _TodoController2 = _interopRequireDefault(_TodoController);

var _CommandLineRunner = require("./view/CommandLineRunner");

var _CommandLineRunner2 = _interopRequireDefault(_CommandLineRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.repo = new _TodoRepository2.default();
    this.controller = new _TodoController2.default(this.repo);
    this.commandLineRunner = new _CommandLineRunner2.default(this.controller);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      this.commandLineRunner.run();
    }
  }, {
    key: "testRepo",
    value: function testRepo() {
      this.controller.testRepo();
    }
  }]);

  return App;
}();

exports.default = App;

},{"./controller/TodoController":2,"./model/Todo":4,"./model/TodoRepository":5,"./view/CommandLineRunner":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports someText in addition to default.


var _Todo = require("../model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("../model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// imports someText in addition to default.

var TodoController = function () {
  function TodoController(repository) {
    _classCallCheck(this, TodoController);

    this.repo = repository;
  }

  _createClass(TodoController, [{
    key: "create",
    value: function create(taskDescription) {
      var todo = new _Todo2.default(taskDescription);
      repo.add(todo);
    }
  }, {
    key: "testRepo",
    value: function testRepo() {
      var todo = new _Todo2.default("first todo argument");
      var todo2 = new _Todo2.default("second todo argument");
      this.repo.add(todo);
      this.repo.add(todo2);

      console.log("contains? ", this.repo.contains(todo));
      console.log("contains2? ", this.repo.contains(todo2));
      console.log("size ", this.repo.size());

      console.log("\nrepo content after adding 2:\n");
      this.repo.showContent();

      this.repo.remove(todo);

      console.log("\nrepo content after removing first:\n");
      this.repo.showContent();

      console.log("contains? ", this.repo.contains(todo));
      console.log("size ", this.repo.size());

      this.repo.remove(todo2);

      console.log("\nrepo content after removing second:\n");
      this.repo.showContent();

      console.log("contains2? ", this.repo.contains(todo2));
      console.log("size ", this.repo.size());

      this.repo.showContent();
    }
  }]);

  return TodoController;
}();

exports.default = TodoController;

},{"../model/Todo":4,"../model/TodoRepository":5}],3:[function(require,module,exports){
"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// new App().run();

new _app2.default().testRepo(); // runs the app

},{"./app":1}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./Todo":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports someText in addition to default.
// imports someText in addition to default.


var _Todo = require("../model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("../model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

var _TodoController = require("../controller/TodoController");

var _TodoController2 = _interopRequireDefault(_TodoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// imports someText in addition to default.

var CommandLineRunner = function () {
  function CommandLineRunner(controller) {
    _classCallCheck(this, CommandLineRunner);

    this.controller = controller;
  }

  _createClass(CommandLineRunner, [{
    key: "showMenu",
    value: function showMenu() {}
  }, {
    key: "showPrompt",
    value: function showPrompt() {}
  }, {
    key: "processInput",
    value: function processInput() {
      // if wants to create a todo, ask for taskDescription
      // if wants to delete a todo, show a list of todos with numbers and ask for numbers
      // if wants to delete all, delete all
      // if wants to mark done, show list of todos, ask for id, and mark done.

    }
  }]);

  return CommandLineRunner;
}();

exports.default = CommandLineRunner;

},{"../controller/TodoController":2,"../model/Todo":4,"../model/TodoRepository":5}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvVG9kb0NvbnRyb2xsZXIuanMiLCJhcHAvc2NyaXB0cy9zcmMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9Ub2RvLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1RvZG9SZXBvc2l0b3J5LmpzIiwiYXBwL3NjcmlwdHMvc3JjL3ZpZXcvQ29tbWFuZExpbmVSdW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFHTSxHO0FBQ0osaUJBQWE7QUFBQTs7QUFDWCxTQUFLLElBQUwsR0FBWSw4QkFBWjtBQUNBLFNBQUssVUFBTCxHQUFrQiw2QkFBbUIsS0FBSyxJQUF4QixDQUFsQjtBQUNBLFNBQUssaUJBQUwsR0FBeUIsZ0NBQXNCLEtBQUssVUFBM0IsQ0FBekI7QUFDRDs7OzswQkFFSTtBQUNILFdBQUssaUJBQUwsQ0FBdUIsR0FBdkI7QUFDRDs7OytCQUVTO0FBQ1IsV0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7Ozs7OztrQkFHWSxHOzs7Ozs7Ozs7cWpCQ3ZCbUI7OztBQUFsQzs7OztBQUNBOzs7Ozs7OztBQUFzRDs7SUFFakMsYztBQUNuQiwwQkFBWSxVQUFaLEVBQXVCO0FBQUE7O0FBQ3JCLFNBQUssSUFBTCxHQUFZLFVBQVo7QUFDRDs7OzsyQkFFTSxlLEVBQWdCO0FBQ3JCLFVBQUksT0FBTyxtQkFBUyxlQUFULENBQVg7QUFDQSxXQUFLLEdBQUwsQ0FBUyxJQUFUO0FBQ0Q7OzsrQkFFUztBQUNSLFVBQUksT0FBTyxtQkFBUyxxQkFBVCxDQUFYO0FBQ0EsVUFBSSxRQUFRLG1CQUFTLHNCQUFULENBQVo7QUFDQSxXQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZDtBQUNBLFdBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkOztBQUVBLGNBQVEsR0FBUixDQUFZLFlBQVosRUFBeUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixJQUFuQixDQUF6QjtBQUNBLGNBQVEsR0FBUixDQUFZLGFBQVosRUFBMEIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUFuQixDQUExQjtBQUNBLGNBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsS0FBSyxJQUFMLENBQVUsSUFBVixFQUFyQjs7QUFFQSxjQUFRLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBLFdBQUssSUFBTCxDQUFVLFdBQVY7O0FBRUEsV0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQjs7QUFFQSxjQUFRLEdBQVIsQ0FBWSx3Q0FBWjtBQUNBLFdBQUssSUFBTCxDQUFVLFdBQVY7O0FBR0EsY0FBUSxHQUFSLENBQVksWUFBWixFQUF5QixLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLElBQW5CLENBQXpCO0FBQ0EsY0FBUSxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLLElBQUwsQ0FBVSxJQUFWLEVBQXJCOztBQUVBLFdBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakI7O0FBRUEsY0FBUSxHQUFSLENBQVkseUNBQVo7QUFDQSxXQUFLLElBQUwsQ0FBVSxXQUFWOztBQUVBLGNBQVEsR0FBUixDQUFZLGFBQVosRUFBMEIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUFuQixDQUExQjtBQUNBLGNBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsS0FBSyxJQUFMLENBQVUsSUFBVixFQUFyQjs7QUFFQSxXQUFLLElBQUwsQ0FBVSxXQUFWO0FBQ0Q7Ozs7OztrQkF6Q2tCLGM7Ozs7O0FDRHJCOzs7Ozs7QUFFQTs7QUFFQSxvQkFBVSxRQUFWLEcsQ0FOQTs7Ozs7Ozs7Ozs7SUNBc0IsSSxHQUNwQixjQUFZLFdBQVosRUFBd0I7QUFBQTs7QUFDdEIsT0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsT0FBSyxPQUFMLEdBQWUsSUFBSSxJQUFKLEVBQWY7QUFDRCxDOztBQUdIOzs7a0JBUHNCLEk7QUFRdEIsSUFBSSxXQUFXLG1CQUFmO1FBQ1EsUSxHQUFBLFE7Ozs7Ozs7OztxakJDVFI7OztBQUNBOzs7Ozs7OztJQUVxQixjO0FBQ25CLDRCQUFhO0FBQUE7O0FBQ1gsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7O3dCQUVHLEksRUFBSztBQUNQLFdBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDs7OzJCQUVNLEksRUFBSztBQUNWLFdBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBbUI7QUFBQSxlQUFNLEdBQUcsV0FBSCxLQUFtQixLQUFLLFdBQTlCO0FBQUEsT0FBbkIsQ0FBYjtBQUNEOzs7NkJBRVEsSSxFQUFLO0FBQ1osYUFBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCO0FBQUEsZUFBTSxHQUFHLFdBQUgsS0FBbUIsS0FBSyxXQUE5QjtBQUFBLE9BQWxCLEVBQTZELE1BQTdELEdBQXNFLENBQTdFO0FBQ0Q7OzsyQkFFSztBQUFFLGFBQU8sS0FBSyxLQUFMLENBQVcsTUFBbEI7QUFBMkI7OztrQ0FFdEI7QUFDWCxjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0Q7Ozs7OztrQkFyQmtCLGM7Ozs7Ozs7OztxakJDSGE7QUFDb0I7OztBQUR0RDs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQTJEOztJQUV0QyxpQjtBQUNuQiw2QkFBWSxVQUFaLEVBQXVCO0FBQUE7O0FBQ3JCLFNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNEOzs7OytCQUVTLENBQUU7OztpQ0FDQSxDQUFFOzs7bUNBQ0E7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7Ozs7O2tCQWJrQixpQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGFzc2VtYmxlcyB0aGUgYXBwXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2RlbC9Ub2RvXCI7XG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4vbW9kZWwvVG9kb1JlcG9zaXRvcnlcIjtcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyL1RvZG9Db250cm9sbGVyXCI7XG5pbXBvcnQgQ29tbWFuZExpbmVSdW5uZXIgZnJvbSBcIi4vdmlldy9Db21tYW5kTGluZVJ1bm5lclwiO1xuXG5cbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnJlcG8gPSBuZXcgVG9kb1JlcG9zaXRvcnkoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIodGhpcy5yZXBvKTtcbiAgICB0aGlzLmNvbW1hbmRMaW5lUnVubmVyID0gbmV3IENvbW1hbmRMaW5lUnVubmVyKHRoaXMuY29udHJvbGxlcik7XG4gIH1cblxuICBydW4oKXtcbiAgICB0aGlzLmNvbW1hbmRMaW5lUnVubmVyLnJ1bigpO1xuICB9XG5cbiAgdGVzdFJlcG8oKXtcbiAgICB0aGlzLmNvbnRyb2xsZXIudGVzdFJlcG8oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4uL21vZGVsL1RvZG9SZXBvc2l0b3J5XCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0NvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpe1xuICAgIHRoaXMucmVwbyA9IHJlcG9zaXRvcnk7XG4gIH1cblxuICBjcmVhdGUodGFza0Rlc2NyaXB0aW9uKXtcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgcmVwby5hZGQodG9kbyk7XG4gIH1cblxuICB0ZXN0UmVwbygpe1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8oXCJmaXJzdCB0b2RvIGFyZ3VtZW50XCIpO1xuICAgIGxldCB0b2RvMiA9IG5ldyBUb2RvKFwic2Vjb25kIHRvZG8gYXJndW1lbnRcIik7XG4gICAgdGhpcy5yZXBvLmFkZCh0b2RvKTtcbiAgICB0aGlzLnJlcG8uYWRkKHRvZG8yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnM/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvKSk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWluczI/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvMikpO1xuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlxcbnJlcG8gY29udGVudCBhZnRlciBhZGRpbmcgMjpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuICAgIHRoaXMucmVwby5yZW1vdmUodG9kbyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlxcbnJlcG8gY29udGVudCBhZnRlciByZW1vdmluZyBmaXJzdDpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuXG4gICAgY29uc29sZS5sb2coXCJjb250YWlucz8gXCIsdGhpcy5yZXBvLmNvbnRhaW5zKHRvZG8pKVxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICB0aGlzLnJlcG8ucmVtb3ZlKHRvZG8yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiXFxucmVwbyBjb250ZW50IGFmdGVyIHJlbW92aW5nIHNlY29uZDpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnMyPyBcIix0aGlzLnJlcG8uY29udGFpbnModG9kbzIpKVxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcbiAgfVxufVxuIiwiLy8gcnVucyB0aGUgYXBwXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cbi8vIG5ldyBBcHAoKS5ydW4oKTtcblxubmV3IEFwcCgpLnRlc3RSZXBvKCk7XG4iLCJleHBvcnQgZGVmYXVsdCAgY2xhc3MgVG9kb3tcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICB9XG59XG5cbi8vIGV4cG9ydCwgaW4gYWRkaXRpb24gdG8gZGVmYXVsdFxubGV0IHNvbWVUZXh0ID0gXCJ0ZXh0VmFyaWFibGVWYWx1ZVwiO1xuZXhwb3J0IHtzb21lVGV4dH07XG4iLCIvLyBUb2RvIHN0b3JlXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9SZXBvc2l0b3J5e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuc3RvcmUgPSBbXTtcbiAgfVxuXG4gIGFkZCh0b2RvKXtcbiAgICB0aGlzLnN0b3JlLnB1c2godG9kbyk7XG4gIH1cblxuICByZW1vdmUodG9kbyl7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuc3RvcmUuZmlsdGVyKCB0ZCA9PiB0ZC5kZXNjcmlwdGlvbiAhPT0gdG9kby5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBjb250YWlucyh0b2RvKXtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5maWx0ZXIodGQgPT4gdGQuZGVzY3JpcHRpb24gPT09IHRvZG8uZGVzY3JpcHRpb24pLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzaXplKCl7IHJldHVybiB0aGlzLnN0b3JlLmxlbmd0aDsgfVxuXG4gIHNob3dDb250ZW50KCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zdG9yZSk7XG4gIH1cbn1cbiIsImltcG9ydCBUb2RvIGZyb20gXCIuLi9tb2RlbC9Ub2RvXCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cbmltcG9ydCBUb2RvUmVwb3NpdG9yeSBmcm9tIFwiLi4vbW9kZWwvVG9kb1JlcG9zaXRvcnlcIjsgLy8gaW1wb3J0cyBzb21lVGV4dCBpbiBhZGRpdGlvbiB0byBkZWZhdWx0LlxuaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL1RvZG9Db250cm9sbGVyXCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZExpbmVSdW5uZXJ7XG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpe1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBzaG93TWVudSgpe31cbiAgc2hvd1Byb21wdCgpe31cbiAgcHJvY2Vzc0lucHV0KCl7XG4gICAgLy8gaWYgd2FudHMgdG8gY3JlYXRlIGEgdG9kbywgYXNrIGZvciB0YXNrRGVzY3JpcHRpb25cbiAgICAvLyBpZiB3YW50cyB0byBkZWxldGUgYSB0b2RvLCBzaG93IGEgbGlzdCBvZiB0b2RvcyB3aXRoIG51bWJlcnMgYW5kIGFzayBmb3IgbnVtYmVyc1xuICAgIC8vIGlmIHdhbnRzIHRvIGRlbGV0ZSBhbGwsIGRlbGV0ZSBhbGxcbiAgICAvLyBpZiB3YW50cyB0byBtYXJrIGRvbmUsIHNob3cgbGlzdCBvZiB0b2RvcywgYXNrIGZvciBpZCwgYW5kIG1hcmsgZG9uZS5cblxuICB9XG59XG4iXX0=
