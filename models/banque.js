"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BanqueModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var BanqueModel = /** @class */ (function (_super) {
    __extends(BanqueModel, _super);
    function BanqueModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.description = "";
        _this.numero = "";
        return _this;
    }
    BanqueModel.prototype.copy = function () {
        throw new Error("Method not implemented.");
    };
    BanqueModel.fromEntity = function (snapshot) {
        var obj = new BanqueModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.numero)
            obj.numero = snapshot.numero;
        return obj;
    };
    return BanqueModel;
}(app_utility_1.ModelEntity));
exports.BanqueModel = BanqueModel;
