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
exports.DeviseModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var util_1 = require("util");
var DeviseModel = /** @class */ (function (_super) {
    __extends(DeviseModel, _super);
    function DeviseModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.principal = false;
        _this.status = true;
        _this.totalDebit = 0;
        _this.totalCredit = 0;
        _this.initial = 0;
        return _this;
    }
    DeviseModel.prototype.copy = function () {
        throw new Error("Method not implemented.");
    };
    DeviseModel.prototype.toEntity = function () {
        return {
            code: this.code,
            description: this.description,
            symbole: this.symbole,
            principal: this.principal,
            status: this.status
        };
    };
    DeviseModel.fromEntity = function (snapshot) {
        var obj = new DeviseModel();
        if (snapshot.code) {
            obj.code = snapshot.code;
        }
        if (snapshot.description) {
            obj.description = snapshot.description;
        }
        if (snapshot.symbole) {
            obj.symbole = snapshot.symbole;
        }
        if (snapshot.initial) {
            obj.initial = snapshot.initial;
        }
        else {
            obj.initial = 0;
        }
        if (snapshot.totalDebit) {
            obj.totalDebit = snapshot.totalDebit;
        }
        else {
            obj.totalDebit = 0;
        }
        if (snapshot.totalCredit) {
            obj.totalCredit = snapshot.totalCredit;
        }
        else {
            obj.totalCredit = 0;
        }
        if (snapshot.principal != null && snapshot.principal != undefined) {
            console.log("principal : " + snapshot.principal + " --> type : " + typeof (snapshot.principal));
            if ((0, util_1.isNumber)(snapshot.principal)) {
                obj.principal = snapshot.principal > 0 ? true : false;
            }
            else {
                obj.principal = snapshot.principal;
            }
        }
        if (snapshot.status != null && snapshot.status != undefined) {
            if ((0, util_1.isNumber)(snapshot.status)) {
                obj.status = snapshot.status > 0 ? true : false;
            }
            else {
                obj.status = snapshot.status;
            }
        }
        return obj;
    };
    return DeviseModel;
}(app_utility_1.ModelEntity));
exports.DeviseModel = DeviseModel;
