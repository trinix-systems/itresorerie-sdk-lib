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
exports.TauxChangeModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var TauxChangeModel = /** @class */ (function (_super) {
    __extends(TauxChangeModel, _super);
    function TauxChangeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TauxChangeModel.prototype.copy = function () {
        throw new Error("Method not implemented.");
    };
    TauxChangeModel.fromEntity = function (snapshot) {
        var obj = new TauxChangeModel();
        if (snapshot.id)
            obj.id = Number(snapshot.id);
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkSite)
            obj.fkSite = snapshot.fkSite;
        if (snapshot.fkDeviseSource)
            obj.fkDeviseSource = snapshot.fkDeviseSource;
        if (snapshot.fkDeviseDestination)
            obj.fkDeviseDestination = snapshot.fkDeviseDestination;
        if (snapshot.taux)
            obj.taux = Number(snapshot.taux);
        return obj;
    };
    TauxChangeModel.prototype.toEntity = function () {
        throw new Error("Method not implemented.");
    };
    return TauxChangeModel;
}(app_utility_1.ModelEntity));
exports.TauxChangeModel = TauxChangeModel;
