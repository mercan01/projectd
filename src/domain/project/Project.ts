import { Domain } from "../core/Entity";

export class Project extends Domain.Core.Entity {
    constructor(newId: number) {
        super(newId);
    }

    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        throw new Error("Setting is private.");
    }

    setName(newName: string) {
        if(!newName || newName.length === 0) {
            throw new Error("A project must have a name.");
        }
        
        this._name = newName;
    }
}

