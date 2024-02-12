import { ModelEntity } from "@trinix/app-utility";
import { BanqueModel } from "./banque";
export declare class CompteModel extends ModelEntity {
    copy(): void;
    code: string;
    description: string;
    fkBanque: string;
    fkDevise: string;
    fkSite: string;
    numero: string;
    fkEntreprise: string;
    numeroCompteComptable: string;
    comptePartenaire: boolean;
    status: boolean;
    nonDebitable: boolean;
    fkPrintModel: string;
    totalDebit: number;
    totalCredit: number;
    solde: number;
    soldeInitial: number;
    banque: BanqueModel | null;
    toEntity(): {
        code: string;
        description: string;
        fkDevise: string;
        fkSite: string;
        fkPrintModel: string;
        fkEntreprise: string;
        nonDebitable: boolean;
        status: boolean;
    };
    static fromEntity(snapshot: any): CompteModel;
}
