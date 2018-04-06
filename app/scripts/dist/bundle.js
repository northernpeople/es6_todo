(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Todo = require("./model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("./model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

var _TodoController = require("./controller/TodoController");

var _TodoController2 = _interopRequireDefault(_TodoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // assembles the app
// imports someText in addition to default.
// imports someText in addition to default.


// imports someText in addition to default.


var App = function App() {
  _classCallCheck(this, App);

  this.repo = new _TodoRepository2.default();
  this.controller = new _TodoController2.default(this.repo);
  this.controller.testRepo();
};

exports.default = App;

},{"./controller/TodoController":2,"./model/Todo":4,"./model/TodoRepository":5}],2:[function(require,module,exports){
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

new _app2.default(); // runs the app

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

},{"./Todo":4}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL2NvbnRyb2xsZXIvVG9kb0NvbnRyb2xsZXIuanMiLCJhcHAvc2NyaXB0cy9zcmMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL3NyYy9tb2RlbC9Ub2RvLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1RvZG9SZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7MEpBSEE7QUFDaUM7QUFDb0I7OztBQUNLOzs7SUFHcEQsRyxHQUNKLGVBQWE7QUFBQTs7QUFDWCxPQUFLLElBQUwsR0FBWSw4QkFBWjtBQUNBLE9BQUssVUFBTCxHQUFrQiw2QkFBbUIsS0FBSyxJQUF4QixDQUFsQjtBQUNBLE9BQUssVUFBTCxDQUFnQixRQUFoQjtBQUNELEM7O2tCQUdZLEc7Ozs7Ozs7OztxakJDZG1COzs7QUFBbEM7Ozs7QUFDQTs7Ozs7Ozs7QUFBc0Q7O0lBRWpDLGM7QUFDbkIsMEJBQVksVUFBWixFQUF1QjtBQUFBOztBQUNyQixTQUFLLElBQUwsR0FBWSxVQUFaO0FBQ0Q7Ozs7K0JBRVM7QUFDUixVQUFJLE9BQU8sbUJBQVMscUJBQVQsQ0FBWDtBQUNBLFVBQUksUUFBUSxtQkFBUyxzQkFBVCxDQUFaO0FBQ0EsV0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLElBQWQ7QUFDQSxXQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBZDs7QUFFQSxjQUFRLEdBQVIsQ0FBWSxZQUFaLEVBQXlCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsSUFBbkIsQ0FBekI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQTBCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsS0FBbkIsQ0FBMUI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLEtBQUssSUFBTCxDQUFVLElBQVYsRUFBckI7O0FBRUEsY0FBUSxHQUFSLENBQVksa0NBQVo7QUFDQSxXQUFLLElBQUwsQ0FBVSxXQUFWOztBQUVBLFdBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsSUFBakI7O0FBRUEsY0FBUSxHQUFSLENBQVksd0NBQVo7QUFDQSxXQUFLLElBQUwsQ0FBVSxXQUFWOztBQUdBLGNBQVEsR0FBUixDQUFZLFlBQVosRUFBeUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixJQUFuQixDQUF6QjtBQUNBLGNBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsS0FBSyxJQUFMLENBQVUsSUFBVixFQUFyQjs7QUFFQSxXQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLEtBQWpCOztBQUVBLGNBQVEsR0FBUixDQUFZLHlDQUFaO0FBQ0EsV0FBSyxJQUFMLENBQVUsV0FBVjs7QUFFQSxjQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQTBCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsS0FBbkIsQ0FBMUI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLEtBQUssSUFBTCxDQUFVLElBQVYsRUFBckI7O0FBRUEsV0FBSyxJQUFMLENBQVUsV0FBVjtBQUNEOzs7Ozs7a0JBcENrQixjOzs7OztBQ0RyQjs7Ozs7O0FBRUEsb0IsQ0FKQTs7Ozs7Ozs7Ozs7SUNBc0IsSSxHQUNwQixjQUFZLFdBQVosRUFBd0I7QUFBQTs7QUFDdEIsT0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsT0FBSyxPQUFMLEdBQWUsSUFBSSxJQUFKLEVBQWY7QUFDRCxDOztBQUlIOzs7a0JBUnNCLEk7QUFTdEIsSUFBSSxXQUFXLG1CQUFmO1FBQ1EsUSxHQUFBLFE7Ozs7Ozs7OztxakJDVlI7OztBQUNBOzs7Ozs7OztJQUVxQixjO0FBQ25CLDRCQUFhO0FBQUE7O0FBQ1gsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7O3dCQUVHLEksRUFBSztBQUNQLFdBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDs7OzJCQUVNLEksRUFBSztBQUNWLFdBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBbUI7QUFBQSxlQUFNLEdBQUcsV0FBSCxLQUFtQixLQUFLLFdBQTlCO0FBQUEsT0FBbkIsQ0FBYjtBQUNEOzs7NkJBRVEsSSxFQUFLO0FBQ1osYUFBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCO0FBQUEsZUFBTSxHQUFHLFdBQUgsS0FBbUIsS0FBSyxXQUE5QjtBQUFBLE9BQWxCLEVBQTZELE1BQTdELEdBQXNFLENBQTdFO0FBQ0Q7OzsyQkFFSztBQUFFLGFBQU8sS0FBSyxLQUFMLENBQVcsTUFBbEI7QUFBMkI7OztrQ0FFdEI7QUFDWCxjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0Q7Ozs7OztrQkFyQmtCLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBhc3NlbWJsZXMgdGhlIGFwcFxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4vbW9kZWwvVG9kb1JlcG9zaXRvcnlcIjsgLy8gaW1wb3J0cyBzb21lVGV4dCBpbiBhZGRpdGlvbiB0byBkZWZhdWx0LlxuaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIvVG9kb0NvbnRyb2xsZXJcIjsgLy8gaW1wb3J0cyBzb21lVGV4dCBpbiBhZGRpdGlvbiB0byBkZWZhdWx0LlxuXG5cbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnJlcG8gPSBuZXcgVG9kb1JlcG9zaXRvcnkoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIodGhpcy5yZXBvKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIudGVzdFJlcG8oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5pbXBvcnQgVG9kb1JlcG9zaXRvcnkgZnJvbSBcIi4uL21vZGVsL1RvZG9SZXBvc2l0b3J5XCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0NvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpe1xuICAgIHRoaXMucmVwbyA9IHJlcG9zaXRvcnk7XG4gIH1cblxuICB0ZXN0UmVwbygpe1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8oXCJmaXJzdCB0b2RvIGFyZ3VtZW50XCIpO1xuICAgIGxldCB0b2RvMiA9IG5ldyBUb2RvKFwic2Vjb25kIHRvZG8gYXJndW1lbnRcIik7XG4gICAgdGhpcy5yZXBvLmFkZCh0b2RvKTtcbiAgICB0aGlzLnJlcG8uYWRkKHRvZG8yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnM/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvKSk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWluczI/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvMikpO1xuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlxcbnJlcG8gY29udGVudCBhZnRlciBhZGRpbmcgMjpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuICAgIHRoaXMucmVwby5yZW1vdmUodG9kbyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlxcbnJlcG8gY29udGVudCBhZnRlciByZW1vdmluZyBmaXJzdDpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuXG4gICAgY29uc29sZS5sb2coXCJjb250YWlucz8gXCIsdGhpcy5yZXBvLmNvbnRhaW5zKHRvZG8pKVxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICB0aGlzLnJlcG8ucmVtb3ZlKHRvZG8yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiXFxucmVwbyBjb250ZW50IGFmdGVyIHJlbW92aW5nIHNlY29uZDpcXG5cIilcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnMyPyBcIix0aGlzLnJlcG8uY29udGFpbnModG9kbzIpKVxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XG5cbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcbiAgfVxufVxuIiwiLy8gcnVucyB0aGUgYXBwXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cbm5ldyBBcHAoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICBjbGFzcyBUb2Rve1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbil7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKCk7XG4gIH1cbn1cblxuXG4vLyBleHBvcnQsIGluIGFkZGl0aW9uIHRvIGRlZmF1bHRcbmxldCBzb21lVGV4dCA9IFwidGV4dFZhcmlhYmxlVmFsdWVcIjtcbmV4cG9ydCB7c29tZVRleHR9O1xuIiwiLy8gVG9kbyBzdG9yZVxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvUmVwb3NpdG9yeXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnN0b3JlID0gW107XG4gIH1cblxuICBhZGQodG9kbyl7XG4gICAgdGhpcy5zdG9yZS5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmVtb3ZlKHRvZG8pe1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlLmZpbHRlciggdGQgPT4gdGQuZGVzY3JpcHRpb24gIT09IHRvZG8uZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgY29udGFpbnModG9kbyl7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZmlsdGVyKHRkID0+IHRkLmRlc2NyaXB0aW9uID09PSB0b2RvLmRlc2NyaXB0aW9uKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgc2l6ZSgpeyByZXR1cm4gdGhpcy5zdG9yZS5sZW5ndGg7IH1cblxuICBzaG93Q29udGVudCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUpO1xuICB9XG59XG4iXX0=
