class LoginPage{
    getEmail(){
        return cy.get('[type="email"]')
    }
    getPassword(){
        return cy.get('[type="password"]')
    }
    getShowPasswordBtn(){
        return cy.get('.toggle-type-button')
    }
    getSubmitBtn(){
        return cy.get('.sc-dkzDqf')
    }
    getResetPasswordLink(){
        return cy.get('.reset-password-link')
    }
    getCreateAccountBtn(){
        return cy.get('.alternative-account-button')
    }
    getAlert(){
        return cy.get('.dWGBOT ')
    }
    getCloseAlert(){
        return cy.get('.sc-bjUoiL')
    }
    getEmailErrorMsg(){
        return cy.get(':nth-child(2) > .error-message')
    }
    getPasswordErrorMsg(){
        return cy.get('.password-container > .sc-iBkjds > .error-message')
    }


}
export default LoginPage;