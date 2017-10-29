export namespace Domain.Core {
    export abstract class Entity {
        readonly id: number;
        
        constructor(newId: number) {
            this.id = newId;
        }

        equals(other: Entity) {
            if(this.constructor.name != other.constructor.name) 
            {
                return false;
            }

            if(!this.isTransient() && !other.isTransient() && this.id === other.id)
            {
                return true;
            }

            return false;
        }

        isTransient() {
            return this.id === 0;
        }
    }
} 