import { IService } from "@trinix/app-utility";
import { CompteModel } from "./models/compte.model";
import { DeviseModel } from "./models/devise.model";
import { TauxChangeModel } from "./models/taux.change.model";
export declare class ITresorerieSDK extends IService {
    private static _instance;
    private htpUtility;
    constructor();
    static instance(): ITresorerieSDK;
    getDevises(username: string, token: string): Promise<DeviseModel[]>;
    getComptes(username: string, token: string): Promise<CompteModel[]>;
    getTaux(fkCentre: string, username: string, token: string): Promise<TauxChangeModel[]>;
}
export declare enum URLS {
    CONST_GET_DEVISE = "/i-tresorerie/api/settings/devises/list",
    CONST_GET_TAUX = "/i-tresorerie/api/common/taux-change/list",
    CONST_GET_COMPTES = "/i-tresorerie/api/settings/caisse/list"
}
