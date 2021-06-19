"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    background-color: ", ";\n    color: ", ";\n"], ["\n    width: ", ";\n    height: ", ";\n    background-color: ", ";\n    color: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
    return props.fullScreen ? "100%" : props.width ? props.width : "auto";
}, function (props) {
    return props.fullScreen ? "100%" : props.height ? props.height : "auto";
}, function (props) {
    return props.theme.primaryColor;
}, function (props) {
    return props.theme.secondaryColor;
});

exports.default = Container;

//# sourceMappingURL=Container.js.map