class SignUpPage{
    getFirstName(){
        return cy.get('[placeholder="First name"]')
    }
    getLastName(){
        return cy.get('[placeholder="Last name"]')
    }
    getEmailAddress(){
        return cy.get('[placeholder="Email Address"]')
    }
    getPassword(){
        return cy.get('[placeholder="Password"]')
    }
    getConfirmPassword(){
        return cy.get('[placeholder="Confirm Password"]')
    }
    getCodeBtn(){
        return cy.get('.sc-dkzDqf')
    }
    getAlert(){
        return cy.get('.dWGBOT ')
    }
}
export default SignUpPage;