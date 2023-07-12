/// <reference types= "cypress" />
/// <reference types= "cypress-iframe" />

//import "cypress-iframe"

import YopMail from "../pageObjects/YopMail";
const yopMail = new YopMail();

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});
Cypress.Commands.add("clearLocalStorageCache", () => {
    localStorage.clear();
    LOCAL_STORAGE_MEMORY = {};
});

Cypress.Commands.add("getCurrentUrl",()=>{
    cy.url().then((oldUrl) => {
        cy.log('Current URL:', oldUrl);
    });
})

Cypress.Commands.add("forceVisit", (url, username) => {
    cy.window().then(win => {
        return win.open(url, '_self')
    })
    yopMail.getLoginField().clear().type(username)
    yopMail.getSearchBtn().click()
    cy.getIframeBody('#ifmail').find("table:nth-child(6) > tbody > tr > td").then($el=>{
        var a = $el.get(" td > div > div:nth-child(6) > span")
        console.log(a)

        cy.window().then(win => {
            cy.go('back')
            //return win.open(oldUrl)
        })
    })

    // cy.getIframeBody('#ifmail').find("div > div:nth-child(6) > span").last().then($el=>{
    //     var href = $el.prop('href')
    //     cy.window().then(win => {
    //         cy.go('back')
    //         return win.open(href, '_self')
    //     })
    // })
})
Cypress.Commands.add('getIframeBody', (frameId)=>{
    return cy
        .get(frameId)
        .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap)
})