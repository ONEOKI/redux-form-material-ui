'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapError = function mapError(_ref) {
  var touched = _ref.touched;
  var error = _ref.error;

  var inputProps = _objectWithoutProperties(_ref.input, []);

  var props = _objectWithoutProperties(_ref, ['touched', 'error', 'input']);

  var errorProp = arguments.length <= 1 || arguments[1] === undefined ? 'errorText' : arguments[1];
  return touched && error ? _extends({}, props, inputProps, _defineProperty({}, errorProp, error)) : _extends({}, inputProps, props);
};

exports.default = mapError;