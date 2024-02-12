import { ModelEntity } from "@trinix/app-utility";
export declare class BanqueModel extends ModelEntity {
    copy(): void;
    code: string;
    description: string;
    numero: string;
    static fromEntity(snapshot: any): BanqueModel;
}
