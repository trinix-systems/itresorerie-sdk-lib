import { ModelEntity } from "@trinix/app-utility";
export declare class DeviseModel extends ModelEntity {
    copy(): void;
    code: string;
    description: string;
    symbole: string;
    principal: boolean;
    status: boolean;
    totalDebit: number;
    totalCredit: number;
    initial: number;
    toEntity(): {
        code: string;
        description: string;
        symbole: string;
        principal: boolean;
        status: boolean;
    };
    static fromEntity(snapshot: any): DeviseModel;
}
