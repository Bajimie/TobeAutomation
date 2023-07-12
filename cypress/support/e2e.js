import './commands'
import './baseUrlCommands';
//import './assertionCommands';
// import 'cypress-localstorage-commands';

Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})
