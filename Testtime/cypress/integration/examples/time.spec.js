import { format, formatDistance, formatRelative, subDays } from 'date-fns'
/// <reference types="cypress" />

//const todaysDate1 = Cypress.moment().subtract(46, 'days').format('YYYY-MM-DD 00:00:00')
//const todaysDate2 = Cypress.moment().subtract(46, 'days').format('YYYY-MM-DD 23:59:59')

var  todaysDate1 = format(subDays(new Date(),1), 'YYYY-MM-DD 00:00:00')
var  todaysDate2 = format(subDays(new Date(),1), 'YYYY-MM-DD 23:59:59')

describe('DateTime', function() {
   //  it('Date', function() {
   //      cy.visit("https://www.google.com/")
   //      cy.get('input[name="q"]').type(todaysDate1)
   //  }),
    it('Test getHistory', function() {
        cy.request({
           method : 'POST',
           url : 'https://203.151.92.191:8099/getHistory',
            
           failOnStatusCode: false,
           body: {
              "api_token_key" : "KSYZSP24XLC3RX3BEPZW72GV1J9QAGMWNHUM89T765TRYE1DUKLB4FJ8HFD5QC6A",
              "gps_id" : "011097800000033",
              "start_period" : (todaysDate1),
              "end_period" : (todaysDate2)
           },
           headers: {
              'content-type' : 'application/json'
           }
        }).then(function (response){
             expect(response.status).to.deep.not.equal(500)
             expect(response.status).to.deep.not.equal(404)
        })

     })
 })
 