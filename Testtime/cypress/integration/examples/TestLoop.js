/// <reference types="cypress" />
describe('TestNum', function() {
    var round = 500
    it('LogNum', function() {
        for(let i = 0; i < 10000; i++){
            if ( i == round ) { round +=500 ; cy.wait(300) ; }
            cy.log(i) 
        }
    })
 })
 