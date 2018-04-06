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
      this.repo.add(todo);
    }
  }, {
    key: "delete",
    value: function _delete(index) {
      this.repo.removeByIndex(index);
    }
  }, {
    key: "markAsDone",
    value: function markAsDone(index) {
      console.log(this.repo);
      this.repo.findByIndex(index).done = true;
      this.repo.showContent();
    }
  }, {
    key: "getAllString",
    value: function getAllString() {
      var result = "";
      this.repo.getAll().forEach(function (td, index) {
        return result += "> " + (index + 1) + " ) " + td.description + " created " + td.created + ", done? " + td.done + " \n";
      });
      return result;
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

window.addEventListener("load", function () {
  return new _app2.default().run();
}); // runs the app

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
  this.done = false;
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
    key: "getAll",
    value: function getAll() {
      return this.store.map(function (e) {
        return e;
      });
    }
  }, {
    key: "remove",
    value: function remove(todo) {
      this.store = this.store.filter(function (td) {
        return td.description !== todo.description;
      });
    }
  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      this.store = this.store.filter(function (e, i) {
        return i === index;
      });
    }
  }, {
    key: "findByIndex",
    value: function findByIndex(index) {
      return this.store[index];
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Todo = require("../model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("../model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

var _TodoController = require("../controller/TodoController");

var _TodoController2 = _interopRequireDefault(_TodoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandLineRunner = function () {
  function CommandLineRunner(controller) {
    _classCallCheck(this, CommandLineRunner);

    this.controller = controller;
    this.controller.create("buy milk");
    this.controller.create("wash car");
  }

  _createClass(CommandLineRunner, [{
    key: "showMenu",
    value: function showMenu() {
      return prompt(this.controller.getAllString() + "\nwhich item do you want to modify?(enter number)");
    }
  }, {
    key: "showPrompt",
    value: function showPrompt() {
      return prompt("to delete enter 1, to mark done enter 2");
    }
  }, {
    key: "processInput",
    value: function processInput(input, itemIndex) {
      input = parseInt(input);
      itemIndex = parseInt(itemIndex) - 1;
      if (input === 1) {
        this.controller.delete(itemIndex);
      }
      if (input === 2) {
        this.controller.markAsDone(itemIndex);
      }
    }
  }, {
    key: "run",
    value: function run() {
      while (true) {
        var itemIndex = this.showMenu();
        var answer = this.showPrompt();
        this.processInput(answer, itemIndex);
      };
    }
  }]);

  return CommandLineRunner;
}();

exports.default = CommandLineRunner;

},{"../controller/TodoController":2,"../model/Todo":4,"../model/TodoRepository":5}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvVG9kb0NvbnRyb2xsZXIuanMiLCJhcHAvc2NyaXB0cy9zcmMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9Ub2RvLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1RvZG9SZXBvc2l0b3J5LmpzIiwiYXBwL3NjcmlwdHMvc3JjL3ZpZXcvQ29tbWFuZExpbmVSdW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFHTSxHO0FBQ0osaUJBQWE7QUFBQTs7QUFDWCxTQUFLLElBQUwsR0FBWSw4QkFBWjtBQUNBLFNBQUssVUFBTCxHQUFrQiw2QkFBbUIsS0FBSyxJQUF4QixDQUFsQjtBQUNBLFNBQUssaUJBQUwsR0FBeUIsZ0NBQXNCLEtBQUssVUFBM0IsQ0FBekI7QUFDRDs7OzswQkFFSTtBQUNILFdBQUssaUJBQUwsQ0FBdUIsR0FBdkI7QUFDRDs7OytCQUVTO0FBQ1IsV0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7Ozs7OztrQkFHWSxHOzs7Ozs7Ozs7cWpCQ3ZCbUI7OztBQUFsQzs7OztBQUNBOzs7Ozs7OztBQUFzRDs7SUFFakMsYztBQUNuQiwwQkFBWSxVQUFaLEVBQXVCO0FBQUE7O0FBQ3JCLFNBQUssSUFBTCxHQUFZLFVBQVo7QUFDRDs7OzsyQkFFTSxlLEVBQWdCO0FBQ3JCLFVBQUksT0FBTyxtQkFBUyxlQUFULENBQVg7QUFDQSxXQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZDtBQUNEOzs7NEJBRU0sSyxFQUFNO0FBQ1gsV0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixLQUF4QjtBQUNEOzs7K0JBRVUsSyxFQUFNO0FBQ2YsY0FBUSxHQUFSLENBQVksS0FB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Q0FBZ0IsVUFBaEIsQ0FBMkIsU0FBM0I7QUFDRDtBQUNGOzs7MEJBRUk7QUFDSCxhQUFNLElBQU4sRUFBVztBQUNULFlBQUksWUFBWSxLQUFLLFFBQUwsRUFBaEI7QUFDQSxZQUFJLFNBQVMsS0FBSyxVQUFMLEVBQWI7QUFDQSxhQUFLLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsU0FBMUI7QUFDRDtBQUNGOzs7Ozs7a0JBL0JrQixpQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGFzc2VtYmxlcyB0aGUgYXBwXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2RlbC9Ub2RvXCI7XG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4vbW9kZWwvVG9kb1JlcG9zaXRvcnlcIjtcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyL1RvZG9Db250cm9sbGVyXCI7XG5pbXBvcnQgQ29tbWFuZExpbmVSdW5uZXIgZnJvbSBcIi4vdmlldy9Db21tYW5kTGluZVJ1bm5lclwiO1xuXG5cbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnJlcG8gPSBuZXcgVG9kb1JlcG9zaXRvcnkoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIodGhpcy5yZXBvKTtcbiAgICB0aGlzLmNvbW1hbmRMaW5lUnVubmVyID0gbmV3IENvbW1hbmRMaW5lUnVubmVyKHRoaXMuY29udHJvbGxlcik7XG4gIH1cblxuICBydW4oKXtcbiAgICB0aGlzLmNvbW1hbmRMaW5lUnVubmVyLnJ1bigpO1xuICB9XG5cbiAgdGVzdFJlcG8oKXtcbiAgICB0aGlzLmNvbnRyb2xsZXIudGVzdFJlcG8oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4uL21vZGVsL1RvZG9SZXBvc2l0b3J5XCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0NvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpe1xuICAgIHRoaXMucmVwbyA9IHJlcG9zaXRvcnk7XG4gIH1cblxuICBjcmVhdGUodGFza0Rlc2NyaXB0aW9uKXtcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGhpcy5yZXBvLmFkZCh0b2RvKTtcbiAgfVxuXG4gIGRlbGV0ZShpbmRleCl7XG4gICAgdGhpcy5yZXBvLnJlbW92ZUJ5SW5kZXgoaW5kZXgpO1xuICB9XG5cbiAgbWFya0FzRG9uZShpbmRleCl7XG4gICAgY29uc29sZS5sb2codGhpcy5yZXBvKTtcbiAgICB0aGlzLnJlcG8uZmluZEJ5SW5kZXgoaW5kZXgpLmRvbmUgPSB0cnVlO1xuICAgIHRoaXMucmVwby5zaG93Q29udGVudCgpO1xuICB9XG5cbiAgZ2V0QWxsU3RyaW5nKCl7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgdGhpcy5yZXBvLmdldEFsbCgpLmZvckVhY2goICh0ZCwgaW5kZXgpID0+XG4gICAgICAgIHJlc3VsdCArPSBgPiAke2luZGV4KzF9ICkgJHt0ZC5kZXNjcmlwdGlvbn0gY3JlYXRlZCAke3RkLmNyZWF0ZWR9LCBkb25lPyAke3RkLmRvbmV9IFxcbmApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0ZXN0UmVwbygpe1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8oXCJmaXJzdCB0b2RvIGFyZ3VtZW50XCIpO1xuICAgIGxldCB0b2RvMiA9IG5ldyBUb2RvKFwic2Vjb25kIHRvZG8gYXJndW1lbnRcIik7XG4gICAgdGhpcy5yZXBvLmFkZCh0b2RvKTtcbiAgICB0aGlzLnJlcG8uYWRkKHRvZG8yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnM/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvKSk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWluczI/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvMikpO1xuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlxcbnJlcG8gY29udGVudCBhZnRlciBhZGRpbmcgMjpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuICAgIHRoaXMucmVwby5yZW1vdmUodG9kbyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlxcbnJlcG8gY29udGVudCBhZnRlciByZW1vdmluZyBmaXJzdDpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuXG4gICAgY29uc29sZS5sb2coXCJjb250YWlucz8gXCIsdGhpcy5yZXBvLmNvbnRhaW5zKHRvZG8pKVxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICB0aGlzLnJlcG8ucmVtb3ZlKHRvZG8yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiXFxucmVwbyBjb250ZW50IGFmdGVyIHJlbW92aW5nIHNlY29uZDpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnMyPyBcIix0aGlzLnJlcG8uY29udGFpbnModG9kbzIpKVxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcbiAgfVxufVxuIiwiLy8gcnVucyB0aGUgYXBwXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXG4gICgpID0+IChuZXcgQXBwKCkucnVuKCkpKTtcbiIsImV4cG9ydCBkZWZhdWx0ICBjbGFzcyBUb2Rve1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbil7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gIH1cbn1cblxuLy8gZXhwb3J0LCBpbiBhZGRpdGlvbiB0byBkZWZhdWx0XG5sZXQgc29tZVRleHQgPSBcInRleHRWYXJpYWJsZVZhbHVlXCI7XG5leHBvcnQge3NvbWVUZXh0fTtcbiIsIi8vIFRvZG8gc3RvcmVcbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1JlcG9zaXRvcnl7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zdG9yZSA9IFtdO1xuICB9XG5cbiAgYWRkKHRvZG8pe1xuICAgIHRoaXMuc3RvcmUucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGdldEFsbCgpe1xuICAgIHJldHVybiB0aGlzLnN0b3JlLm1hcChlID0+IGUpO1xuICB9XG5cbiAgcmVtb3ZlKHRvZG8pe1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlLmZpbHRlciggdGQgPT4gdGQuZGVzY3JpcHRpb24gIT09IHRvZG8uZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgcmVtb3ZlQnlJbmRleChpbmRleCl7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuc3RvcmUuZmlsdGVyKCAoZSwgaSkgPT4gaSA9PT0gaW5kZXgpO1xuICB9XG5cbiAgZmluZEJ5SW5kZXgoaW5kZXgpe1xuICAgIHJldHVybiB0aGlzLnN0b3JlW2luZGV4XTtcbiAgfVxuXG4gIGNvbnRhaW5zKHRvZG8pe1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmZpbHRlcih0ZCA9PiB0ZC5kZXNjcmlwdGlvbiA9PT0gdG9kby5kZXNjcmlwdGlvbikubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHNpemUoKXsgcmV0dXJuIHRoaXMuc3RvcmUubGVuZ3RoOyB9XG5cbiAgc2hvd0NvbnRlbnQoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0b3JlKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL21vZGVsL1RvZG9cIjtcbmltcG9ydCBUb2RvUmVwb3NpdG9yeSBmcm9tIFwiLi4vbW9kZWwvVG9kb1JlcG9zaXRvcnlcIjtcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlci9Ub2RvQ29udHJvbGxlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1hbmRMaW5lUnVubmVye1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKXtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuY29udHJvbGxlci5jcmVhdGUoXCJidXkgbWlsa1wiKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuY3JlYXRlKFwid2FzaCBjYXJcIik7XG4gIH1cblxuICBzaG93TWVudSgpe1xuICAgIHJldHVybiBwcm9tcHQodGhpcy5jb250cm9sbGVyLmdldEFsbFN0cmluZygpXG4gICAgICAgICAgICAgICsgXCJcXG53aGljaCBpdGVtIGRvIHlvdSB3YW50IHRvIG1vZGlmeT8oZW50ZXIgbnVtYmVyKVwiKTtcbiAgfVxuICBzaG93UHJvbXB0KCl7XG4gICAgIHJldHVybiBwcm9tcHQoXCJ0byBkZWxldGUgZW50ZXIgMSwgdG8gbWFyayBkb25lIGVudGVyIDJcIik7XG4gIH1cbiAgcHJvY2Vzc0lucHV0KGlucHV0LCBpdGVtSW5kZXgpe1xuICAgIGlucHV0ID0gcGFyc2VJbnQoaW5wdXQpO1xuICAgIGl0ZW1JbmRleCA9IHBhcnNlSW50KGl0ZW1JbmRleCkgLSAxO1xuICAgIGlmKGlucHV0ID09PSAxKXtcbiAgICAgIHRoaXMuY29udHJvbGxlci5kZWxldGUoaXRlbUluZGV4KTtcbiAgICB9XG4gICAgaWYoaW5wdXQgPT09IDIpe1xuICAgICAgdGhpcy5jb250cm9sbGVyLm1hcmtBc0RvbmUoaXRlbUluZGV4KTtcbiAgICB9XG4gIH1cblxuICBydW4oKXtcbiAgICB3aGlsZSh0cnVlKXtcbiAgICAgIGxldCBpdGVtSW5kZXggPSB0aGlzLnNob3dNZW51KCk7XG4gICAgICBsZXQgYW5zd2VyID0gdGhpcy5zaG93UHJvbXB0KCk7XG4gICAgICB0aGlzLnByb2Nlc3NJbnB1dChhbnN3ZXIsIGl0ZW1JbmRleCk7XG4gICAgfTtcbiAgfVxuXG5cbn1cbiJdfQ==
