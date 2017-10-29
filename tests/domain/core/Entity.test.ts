import { Domain } from '../../../src/domain/core/Entity';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
const Entity = Domain.Core.Entity;

class TestEntity extends Entity {
    constructor(newId: number) {
        super(newId);
    }
}

class TestEntity2 extends Entity {
    constructor(newId: number) {
        super(newId);
    }
}

describe('Entities', () => {   
    it('should be equal when their ids are not 0 and are the same' , () => {
        let first = new TestEntity(1);
        let second = new TestEntity(1);

        expect(first.equals(second)).to.equal(true);    
    });

    it("should not be equal when their ids are not 0 and are different", () => {
        let first = new TestEntity(1);
        let second = new TestEntity(2);

        expect(first.equals(second)).to.equal(false);    
    });

    it("should not be equal when their ids are 0", () => {
        let first = new TestEntity(0);
        let second = new TestEntity(0);

        expect(first.equals(second)).to.equal(false);    
    });

    it("should not be equal when their ids are the same but the types are different", () => {
        let first = new TestEntity(1);
        let second = new TestEntity2(1);

        expect(first.equals(second)).to.equal(false);    
    });
});