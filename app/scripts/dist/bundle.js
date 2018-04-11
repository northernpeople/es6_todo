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

var _DomRunner = require("./view/DomRunner");

var _DomRunner2 = _interopRequireDefault(_DomRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.repo = new _TodoRepository2.default();
    this.controller = new _TodoController2.default(this.repo);
    this.domRunner = new _DomRunner2.default(this.controller);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      this.domRunner.run();
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

},{"./controller/TodoController":2,"./model/Todo":4,"./model/TodoRepository":5,"./view/DomRunner":6}],2:[function(require,module,exports){
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
    key: "deleteById",
    value: function deleteById(id) {
      this.repo.deleteById(id);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.repo.getAll();
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

  this.id = Math.random() + "_"; // GUID replacement for training
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
    key: "deleteById",
    value: function deleteById(id) {
      this.store = this.store.filter(function (td) {
        return td.id !== id;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.store.map(function (e) {
        return e;
      });
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

var DomRunner = function () {
  function DomRunner(controller) {
    _classCallCheck(this, DomRunner);

    this.controller = controller;
    this.controller.create("buy milk");
    this.controller.create("wash car");
  }

  _createClass(DomRunner, [{
    key: "initListeners",
    value: function initListeners() {
      var _this = this;

      document.getElementById("addTodoButton").addEventListener("click", function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        if (!addTodoTextInput.value.trim()) return;
        _this.controller.create(addTodoTextInput.value.trim());
        addTodoTextInput.value = "";
        _this.showItems();
      });

      document.querySelector("ul").addEventListener("click", function (event) {
        console.log(event.target.parentNode.id);
        var elementClicked = event.target;
        if (elementClicked.className === "deleteButton") {
          _this.controller.deleteById(elementClicked.parentNode.id);
          _this.showItems();
        }
      });
    }
  }, {
    key: "showItems",
    value: function showItems() {
      var _this2 = this;

      var todos = this.controller.getAll();
      var ul = document.querySelector("ul");
      ul.textContent = "";
      todos.forEach(function (e, i, a) {
        var li = document.createElement("li");
        li.id = e.id;
        li.textContent = e.description;
        li.appendChild(_this2.newDeleteButton());
        ul.appendChild(li);
      });
    }
  }, {
    key: "newDeleteButton",
    value: function newDeleteButton() {
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.className = "deleteButton";
      return deleteButton;
    }
  }, {
    key: "run",
    value: function run() {
      this.showItems();
      this.initListeners();
    }
  }]);

  return DomRunner;
}();

exports.default = DomRunner;

},{"../controller/TodoController":2,"../model/Todo":4,"../model/TodoRepository":5}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvVG9kb0NvbnRyb2xsZXIuanMiLCJhcHAvc2NyaXB0cy9zcmMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9Ub2RvLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1RvZG9SZXBvc2l0b3J5LmpzIiwiYXBwL3NjcmlwdHMvc3JjL3ZpZXcvRG9tUnVubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBR00sRztBQUNKLGlCQUFhO0FBQUE7O0FBQ1gsU0FBSyxJQUFMLEdBQVksOEJBQVo7QUFDQSxTQUFLLFVBQUwsR0FBa0IsNkJBQW1CLEtBQUssSUFBeEIsQ0FBbEI7QUFDQSxTQUFLLFNBQUwsR0FBaUIsd0JBQWMsS0FBSyxVQUFuQixDQUFqQjtBQUNEOzs7OzBCQUVJO0FBQ0gsV0FBSyxTQUFMLENBQWUsR0FBZjtBQUNEOzs7K0JBRVM7QUFDUixXQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFDRDs7Ozs7O2tCQUdZLEc7Ozs7Ozs7OztxakJDdkJtQjs7O0FBQWxDOzs7O0FBQ0E7Ozs7Ozs7O0FBQXNEOztJQUVqQyxjO0FBQ25CLDBCQUFZLFVBQVosRUFBdUI7QUFBQTs7QUFDckIsU0FBSyxJQUFMLEdBQVksVUFBWjtBQUNEOzs7OzJCQUVNLGUsRUFBZ0I7QUFDckIsVUFBSSxPQUFPLG1CQUFTLGVBQVQsQ0FBWDtBQUNBLFdBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxJQUFkO0FBQ0Q7OzsrQkFFVSxFLEVBQUc7QUFDWixXQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEVBQXJCO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQU8sS0FBSyxJQUFMLENBQVUsTUFBVixFQUFQO0FBQ0Q7Ozs7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QUFlLEVBQWY7QUFDRCxPQU5EO0FBT0Q7OztzQ0FFZ0I7QUFDZixVQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQW5CO0FBQ0EsbUJBQWEsV0FBYixHQUEyQixRQUEzQjtBQUNFLG1CQUFhLFNBQWIsR0FBdUIsY0FBdkI7QUFDRixhQUFPLFlBQVA7QUFDRDs7OzBCQUVJO0FBQ0gsV0FBSyxTQUFMO0FBQ0EsV0FBSyxhQUFMO0FBQ0Q7Ozs7OztrQkFyRGtCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBhc3NlbWJsZXMgdGhlIGFwcFxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vbW9kZWwvVG9kb1wiO1xuaW1wb3J0IFRvZG9SZXBvc2l0b3J5IGZyb20gXCIuL21vZGVsL1RvZG9SZXBvc2l0b3J5XCI7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci9Ub2RvQ29udHJvbGxlclwiO1xuaW1wb3J0IERvbVJ1bm5lciBmcm9tIFwiLi92aWV3L0RvbVJ1bm5lclwiO1xuXG5cbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnJlcG8gPSBuZXcgVG9kb1JlcG9zaXRvcnkoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIodGhpcy5yZXBvKTtcbiAgICB0aGlzLmRvbVJ1bm5lciA9IG5ldyBEb21SdW5uZXIodGhpcy5jb250cm9sbGVyKTtcbiAgfVxuXG4gIHJ1bigpe1xuICAgIHRoaXMuZG9tUnVubmVyLnJ1bigpO1xuICB9XG5cbiAgdGVzdFJlcG8oKXtcbiAgICB0aGlzLmNvbnRyb2xsZXIudGVzdFJlcG8oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4uL21vZGVsL1RvZG9SZXBvc2l0b3J5XCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0NvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpe1xuICAgIHRoaXMucmVwbyA9IHJlcG9zaXRvcnk7XG4gIH1cblxuICBjcmVhdGUodGFza0Rlc2NyaXB0aW9uKXtcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGhpcy5yZXBvLmFkZCh0b2RvKTtcbiAgfVxuXG4gIGRlbGV0ZUJ5SWQoaWQpe1xuICAgIHRoaXMucmVwby5kZWxldGVCeUlkKGlkKTtcbiAgfVxuXG4gIGdldEFsbCgpe1xuICAgIHJldHVybiB0aGlzLnJlcG8uZ2V0QWxsKCk7XG4gIH1cbn1cbiIsIi8vIHJ1bnMgdGhlIGFwcFxuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBuZXcgQXBwKCkucnVuKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3tcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpK1wiX1wiOyAvLyBHVUlEIHJlcGxhY2VtZW50IGZvciB0cmFpbmluZ1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICB9XG59XG5cbi8vIGV4cG9ydCwgaW4gYWRkaXRpb24gdG8gZGVmYXVsdFxubGV0IHNvbWVUZXh0ID0gXCJ0ZXh0VmFyaWFibGVWYWx1ZVwiO1xuZXhwb3J0IHtzb21lVGV4dH07XG4iLCIvLyBUb2RvIHN0b3JlXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9SZXBvc2l0b3J5e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuc3RvcmUgPSBbXTtcbiAgfVxuXG4gIGFkZCh0b2RvKXtcbiAgICB0aGlzLnN0b3JlLnB1c2godG9kbyk7XG4gIH1cblxuICBkZWxldGVCeUlkKGlkKXtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5zdG9yZS5maWx0ZXIoIHRkID0+IHRkLmlkICE9PSBpZCk7XG4gIH1cblxuICBnZXRBbGwoKXtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5tYXAoZSA9PiBlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWwvVG9kb1wiO1xuaW1wb3J0IFRvZG9SZXBvc2l0b3J5IGZyb20gXCIuLi9tb2RlbC9Ub2RvUmVwb3NpdG9yeVwiO1xuaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL1RvZG9Db250cm9sbGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tUnVubmVye1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKXtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuY29udHJvbGxlci5jcmVhdGUoXCJidXkgbWlsa1wiKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuY3JlYXRlKFwid2FzaCBjYXJcIik7XG4gIH1cblxuICBpbml0TGlzdGVuZXJzKCl7XG4gICAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvQnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgYWRkVG9kb1RleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1RleHRJbnB1dFwiKTtcbiAgICAgIGlmKCEgYWRkVG9kb1RleHRJbnB1dC52YWx1ZS50cmltKCkpIHJldHVybjtcbiAgICAgIHRoaXMuY29udHJvbGxlci5jcmVhdGUoYWRkVG9kb1RleHRJbnB1dC52YWx1ZS50cmltKCkpO1xuICAgICAgYWRkVG9kb1RleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB0aGlzLnNob3dJdGVtcygpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcInVsXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICBcdGxldCBlbGVtZW50Q2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcbiAgICBcdGlmKGVsZW1lbnRDbGlja2VkLmNsYXNzTmFtZSA9PT0gXCJkZWxldGVCdXR0b25cIil7XG4gICAgXHQgIHRoaXMuY29udHJvbGxlci5kZWxldGVCeUlkKGVsZW1lbnRDbGlja2VkLnBhcmVudE5vZGUuaWQpO1xuICAgICAgICB0aGlzLnNob3dJdGVtcygpO1xuICAgIFx0fVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0l0ZW1zKCl7XG4gICAgbGV0IHRvZG9zID0gdGhpcy5jb250cm9sbGVyLmdldEFsbCgpO1xuICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbiAgICB1bC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdG9kb3MuZm9yRWFjaCgoZSwgaSwgYSkgPT57XG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS5pZCA9IGUuaWQ7XG4gICAgICBsaS50ZXh0Q29udGVudCA9IGUuZGVzY3JpcHRpb247XG4gICAgICBsaS5hcHBlbmRDaGlsZCh0aGlzLm5ld0RlbGV0ZUJ1dHRvbigpKVxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG4gIH1cblxuICBuZXdEZWxldGVCdXR0b24oKXtcbiAgXHRcdHZhciBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBcdFx0ZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWU9XCJkZWxldGVCdXR0b25cIjtcbiAgXHRcdHJldHVybiBkZWxldGVCdXR0b247XG4gIH1cblxuICBydW4oKXtcbiAgICB0aGlzLnNob3dJdGVtcygpO1xuICAgIHRoaXMuaW5pdExpc3RlbmVycygpO1xuICB9XG5cbn1cbiJdfQ==
