/// <reference types="cypress" />

describe('Open youtube', function() {
    it('Open', function() {
        cy.visit("https://www.youtube.com/")
        cy.get('#search').type("TalkTour Ep.2 ")
        cy.get('#search-icon-legacy').click()
        cy.wait(3000)
       cy.contains("TalkTour Ep.2 วัดวิมุตยาราม พระราม 7 | ร่วมหาปัจจัยบูรณะ สร้างสถานลานธรรม").click()
       cy.wait(1120000)

    })
 })
 