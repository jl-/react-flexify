/**
 * <Flex inline // display: inline-flex
 *       row // flex-direction, default
 *       column // flex-direction: column
 *       justifyContent='flex-start|...',
 *       alignItems='center'
 *       alignContent='center',
 *       alignSelf='auto',
 *       order='1',
 *       wrap='wrap'
 *       tag='article' // wrapper html element tag, default: 'div'
 *       grow='1'
 *       shrink='1',
 *       basis='1',
 *       flex='1 2 400px'
 *       --------
 *       -- All props are optional. if none of `inline|row|column` is present, then just render `this.props.children` wrapped with `tag`(default is `div`)
 *       -- `inline` => flex display level, set this to change to `inline-flex`. (default is `flex`)
 *       -- `row|column` => A flex container, with flex-direction: row|column; and other default rules display: flex; justify-content: space-around; align-items: center; align-content: center; flex-wrap: wrap

 *       -- ... set other props to override its default value.
 *       -- can also pass other props(data-), will be set on wrapper element
 *       -------------------------------
 *       >
 * </Flex>
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var FLEX_PROPS_MAP = {
  justifyContent: 'justify-content',
  alignItems: 'align-item',
  alignContent: 'align-content',
  alignSelf: 'align-self',
  wrap: 'flex-wrap',
  grow: 'flex-grow',
  shrink: 'flex-shrink',
  basis: 'flex-basis'
};
var FLEX_GROW_PROPS = ['WebkitBoxFlex', 'WebkitFlexGrow', 'msFlexPositive', 'flexGrow'];
var FLEX_SHRINK_PROPS = ['WebkitFlexShrink', 'msFlexNegative', 'flexShrink'];
var FLEX_BASIS_PROPS = ['WebkitFlexBasis', 'msFlexPreferredSize', 'flexBasis'];
var FLEX_FLEX_PROPS = ['WebkitBoxFlex', 'WebkitFlex', 'msFlex', 'flex'];
var FLEX_ORDER_PROPS = ['WebkitBoxOrdinalGroup', 'WebkitOrder', 'msFlexOrder', 'order'];

function prefix(style, props, val) {
  props.forEach(function (prop) {
    return style[prop] = val;
  });
}
function shortenFlexTerm(term) {
  return term.replace(/\-?([a-z])[a-z]+/g, '$1');
}

var Flex = (function (_Component) {
  _inherits(Flex, _Component);

  function Flex() {
    _classCallCheck(this, Flex);

    _get(Object.getPrototypeOf(Flex.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Flex, [{
    key: 'transformProps',
    value: function transformProps() {
      var _cls;

      var _props = this.props;
      var inline = _props.inline;
      var row = _props.row;
      var column = _props.column;
      var grow = _props.grow;
      var shrink = _props.shrink;
      var basis = _props.basis;
      var flex = _props.flex;
      var order = _props.order;
      var className = _props.className;
      var _props$style = _props.style;
      var style = _props$style === undefined ? {} : _props$style;

      var restProps = _objectWithoutProperties(_props, ['inline', 'row', 'column', 'grow', 'shrink', 'basis', 'flex', 'order', 'className', 'style']);

      var preservedProps = {};
      var level = inline ? 'i' : '';
      var cls = (_cls = {}, _defineProperty(_cls, className, !!className), _defineProperty(_cls, level + 'frow', row), _defineProperty(_cls, level + 'fcol', column), _cls);
      for (var prop in restProps) {
        if (prop in FLEX_PROPS_MAP) {
          cls['f-' + shortenFlexTerm(FLEX_PROPS_MAP[prop]) + '-' + shortenFlexTerm(restProps[prop])] = true;
        } else {
          preservedProps[prop] = restProps[prop];
        }
      }

      // flex-grow, flex-shrink, order, flex-basis and flex prefix.
      grow = +grow, grow === grow && prefix(style, FLEX_GROW_PROPS, grow);
      shrink = +shrink, shrink === shrink && prefix(style, FLEX_SHRINK_PROPS, shrink);
      order = +order, order === order && prefix(style, FLEX_ORDER_PROPS, order);
      basis && prefix(style, FLEX_BASIS_PROPS, basis);
      flex && prefix(style, FLEX_FLEX_PROPS, flex);

      return _extends({ className: (0, _classnames2['default'])(cls), style: style }, preservedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _transformProps = this.transformProps();

      var _transformProps$tag = _transformProps.tag;
      var tag = _transformProps$tag === undefined ? 'div' : _transformProps$tag;
      var children = _transformProps.children;

      var props = _objectWithoutProperties(_transformProps, ['tag', 'children']);

      return _react2['default'].createElement(tag, props, children);
    }
  }]);

  return Flex;
})(_react.Component);

exports['default'] = Flex;
module.exports = exports['default'];