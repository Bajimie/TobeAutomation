Cypress.Commands.add('OpenSignUpUrl', () => {
   cy.visit(Cypress.env("openSignUpUrl"));
})

Cypress.Commands.add('OpenLoginUrl', ()=>{
   cy.visit(Cypress.env("openLoginUrl"));
})



