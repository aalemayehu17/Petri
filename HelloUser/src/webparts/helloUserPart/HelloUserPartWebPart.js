"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var HelloUserPart_1 = require("./components/HelloUserPart");
var HelloUserPartWebPart = (function (_super) {
    __extends(HelloUserPartWebPart, _super);
    function HelloUserPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloUserPartWebPart.prototype.render = function () {
        var element = React.createElement(HelloUserPart_1.default, {
            busyMessage: "Working on it..."
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(HelloUserPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloUserPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: []
        };
    };
    return HelloUserPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloUserPartWebPart;
//# sourceMappingURL=HelloUserPartWebPart.js.map