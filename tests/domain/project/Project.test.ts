import { Project } from '../../../src/domain/project/Project';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('Projects', () => {
    describe("name", () => {
        let prj = new Project(1);

        it('should allow you to set the name', () => {
            let expected: string = "new name";

            prj.setName(expected);
            
            expect(prj.name).to.equal(expected);
        });

        it("should throw an exception with a null name", () => {
            expect(prj.setName(null)).to.throw(Error);            
        });
    });   
    
});