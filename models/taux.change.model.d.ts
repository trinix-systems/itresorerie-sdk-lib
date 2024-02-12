import { ModelEntity } from "@trinix/app-utility";
export declare class TauxChangeModel extends ModelEntity {
    copy(): void;
    id: number;
    fkEntreprise: string;
    fkSite: string;
    fkDeviseSource: string;
    fkDeviseDestination: string;
    taux: number;
    dateCreat: Date;
    agentCreat: number;
    status: boolean;
    static fromEntity(snapshot: any): TauxChangeModel;
    toEntity(): void;
}
