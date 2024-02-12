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
exports.CompteModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var CompteModel = /** @class */ (function (_super) {
    __extends(CompteModel, _super);
    function CompteModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numeroCompteComptable = "";
        _this.comptePartenaire = false;
        _this.status = true;
        _this.nonDebitable = false;
        _this.fkPrintModel = "A5_MODEL_1";
        _this.totalDebit = 0;
        _this.totalCredit = 0;
        _this.solde = 0;
        _this.soldeInitial = 0;
        _this.banque = null;
        return _this;
    }
    CompteModel.prototype.copy = function () {
        throw new Error("Method not implemented.");
    };
    CompteModel.prototype.toEntity = function () {
        return {
            code: this.code,
            description: this.description,
            fkDevise: this.fkDevise,
            fkSite: this.fkSite,
            fkPrintModel: this.fkPrintModel,
            fkEntreprise: this.fkEntreprise,
            nonDebitable: this.nonDebitable,
            status: this.status
        };
    };
    CompteModel.fromEntity = function (snapshot) {
        var obj = new CompteModel();
        if (snapshot.code) {
            obj.code = snapshot.code;
        }
        if (snapshot.numeroCompteComptable)
            obj.numeroCompteComptable = snapshot.numeroCompteComptable;
        if (snapshot.comptePartenaire)
            obj.comptePartenaire = snapshot.comptePartenaire instanceof Boolean ? snapshot.comptePartenaire : snapshot.comptePartenaire > 0;
        if (snapshot.description) {
            obj.description = snapshot.description;
        }
        if (snapshot.fkBanque)
            obj.fkBanque = snapshot.fkBanque;
        if (snapshot.fkPrintModel) {
            obj.fkPrintModel = snapshot.fkPrintModel;
        }
        if (snapshot.numero)
            obj.numero = snapshot.numero;
        if (snapshot.nonDebitable)
            obj.nonDebitable = (snapshot.nonDebitable instanceof Boolean) ? snapshot.nonDebitable : snapshot.nonDebitable > 0;
        if (snapshot.fkDevise) {
            obj.fkDevise = snapshot.fkDevise;
        }
        if (snapshot.fkEntreprise) {
            obj.fkEntreprise = snapshot.fkEntreprise;
        }
        if (snapshot.fkSite) {
            obj.fkSite = snapshot.fkSite;
        }
        if (snapshot.status != null && snapshot.status != undefined) {
            obj.status = snapshot.status;
        }
        if (snapshot.totalCredit) {
            obj.totalCredit = snapshot.totalCredit;
        }
        else {
            obj.totalCredit = 0;
        }
        if (snapshot.totalDebit) {
            obj.totalDebit = snapshot.totalDebit;
        }
        else {
            obj.totalDebit = 0;
        }
        if (snapshot.soldeInitial) {
            obj.soldeInitial = snapshot.soldeInitial;
        }
        else {
            obj.soldeInitial = 0;
        }
        obj.solde = obj.soldeInitial + obj.totalDebit - obj.totalCredit;
        return obj;
    };
    return CompteModel;
}(app_utility_1.ModelEntity));
exports.CompteModel = CompteModel;
