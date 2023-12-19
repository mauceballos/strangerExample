// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import {navigate} from '../support/driver'

// before(() => {
//     // cy.viewport('samsung-s10')
// })
beforeEach(() => {
    cy.visit("http://immense-hollows-74271.herokuapp.com/")
    let dev = Cypress.env('dev')
    if(dev == 'web'){cy.viewport(1920, 1080)}else{cy.viewport('samsung-s10')}
    
})