/// <reference types="cypress" />

describe('Get Data', function() {

   it('GET', function() {
      cy.request({
         method : 'GET',
         url : 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT',
         headers: {
            'content-type' : 'application/json'
         },
         params: {
            'symbol' : 'BTCUSDT'
         }
      }).then(function (response){
         var data = response.body.lastPrice
         cy.log(parseInt(data))
         //expect(parseInt(response.body.lastPrice)).greaterThan(42000)
      })
   })
})