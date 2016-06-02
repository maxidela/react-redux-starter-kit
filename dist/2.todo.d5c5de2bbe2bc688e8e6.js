webpackJsonp([2],{

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(573)
	  , TAG = __webpack_require__(612)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(559);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(606)
	  , ITERATOR   = __webpack_require__(612)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(673)
	  , ITERATOR  = __webpack_require__(612)('iterator')
	  , Iterators = __webpack_require__(606);
	module.exports = __webpack_require__(554).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(612)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(640);
	
	var _Todo = __webpack_require__(692);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var _todo = __webpack_require__(696);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        todos: state.todos
	    };
	};
	
	var mapActionCreators = {
	    addTodo: _todo.Add
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreators)(_Todo2.default);

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(587);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(592);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(593);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(597);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(632);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoList = __webpack_require__(693);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	var _TodoAdd = __webpack_require__(695);
	
	var _TodoAdd2 = _interopRequireDefault(_TodoAdd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Todo = function (_React$Component) {
	    (0, _inherits3.default)(Todo, _React$Component);
	
	    function Todo() {
	        (0, _classCallCheck3.default)(this, Todo);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Todo).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Todo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'strong',
	                    null,
	                    'Incomplete'
	                ),
	                _react2.default.createElement(_TodoList2.default, { items: this.props.todos.incomplete }),
	                _react2.default.createElement(
	                    'strong',
	                    null,
	                    'Complete'
	                ),
	                _react2.default.createElement(_TodoList2.default, { items: this.props.todos.complete }),
	                _react2.default.createElement(_TodoAdd2.default, { submit: this.props.addTodo })
	            );
	        }
	    }]);
	    return Todo;
	}(_react2.default.Component);
	
	exports.default = Todo;

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(587);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(592);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(593);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(597);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(632);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoListItem = __webpack_require__(694);
	
	var _TodoListItem2 = _interopRequireDefault(_TodoListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoList = function (_React$Component) {
	    (0, _inherits3.default)(TodoList, _React$Component);
	
	    function TodoList() {
	        (0, _classCallCheck3.default)(this, TodoList);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoList).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(TodoList, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'ul',
	                { className: 'list-group' },
	                this.props.items.map(function (item) {
	                    return _react2.default.createElement(_TodoListItem2.default, { key: item.id, item: item.text, click: function click() {
	                            console.log('hola');
	                        } });
	                })
	            );
	        }
	    }]);
	    return TodoList;
	}(_react2.default.Component);
	
	exports.default = TodoList;

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(587);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(592);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(593);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(597);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(632);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoListItem = function (_React$Component) {
	    (0, _inherits3.default)(TodoListItem, _React$Component);
	
	    function TodoListItem() {
	        (0, _classCallCheck3.default)(this, TodoListItem);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoListItem).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(TodoListItem, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "li",
	                { className: "list-group-item pointer",
	                    onClick: this.props.click },
	                this.props.item
	            );
	        }
	    }]);
	    return TodoListItem;
	}(_react2.default.Component);
	
	exports.default = TodoListItem;

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(587);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(592);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(593);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(597);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(632);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoAdd = function (_React$Component) {
	    (0, _inherits3.default)(TodoAdd, _React$Component);
	
	    function TodoAdd(props) {
	        (0, _classCallCheck3.default)(this, TodoAdd);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoAdd).call(this, props));
	
	        _this.state = { 'newtodo': '' };
	        return _this;
	    }
	
	    (0, _createClass3.default)(TodoAdd, [{
	        key: 'submit',
	        value: function submit(e) {
	            e.preventDefault();
	            this.props.submit(this.state.newtodo);
	            this.setState({ 'newtodo': '' });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'form',
	                { onSubmit: this.submit.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        'New Todo: '
	                    ),
	                    _react2.default.createElement('input', {
	                        type: 'text',
	                        name: 'todo-input',
	                        id: 'todo-input',
	                        className: 'form-control',
	                        value: this.state.newtodo,
	                        onChange: function onChange(e) {
	                            _this2.setState({ 'newtodo': e.target.value });
	                        }
	                    })
	                ),
	                _react2.default.createElement('input', { type: 'submit', value: 'Submit', className: 'btn btn-default' })
	            );
	        }
	    }]);
	    return TodoAdd;
	}(_react2.default.Component);
	
	exports.default = TodoAdd;

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(697);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _assign = __webpack_require__(549);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	exports.Add = Add;
	exports.default = todoReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Add(text) {
	    return {
	        type: 'ADD_TODO',
	        text: text
	    };
	}
	
	function guid() {
	    function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}
	
	function addTodo(state, text) {
	    var newState = (0, _assign2.default)({}, state);
	    newState['incomplete'] = [].concat((0, _toConsumableArray3.default)(state.incomplete), [{ id: guid(), text: text }]);
	    return newState;
	}
	
	var initialState = {
	    complete: [],
	    incomplete: []
	};
	
	function todoReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'ADD_TODO':
	            return addTodo(state, action.text);
	        case 'TOGGLE_TODO':
	            return state;
	        default:
	            return state;
	    }
	    return state;
	}

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(698);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(699), __esModule: true };

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(601);
	__webpack_require__(700);
	module.exports = __webpack_require__(554).Array.from;

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(555)
	  , $export        = __webpack_require__(552)
	  , toObject       = __webpack_require__(585)
	  , call           = __webpack_require__(676)
	  , isArrayIter    = __webpack_require__(677)
	  , toLength       = __webpack_require__(576)
	  , createProperty = __webpack_require__(701)
	  , getIterFn      = __webpack_require__(678);
	
	$export($export.S + $export.F * !__webpack_require__(685)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(558)
	  , createDesc      = __webpack_require__(566);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ }

});
//# sourceMappingURL=2.todo.d5c5de2bbe2bc688e8e6.js.map