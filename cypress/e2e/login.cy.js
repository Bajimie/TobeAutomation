/// <reference types= "cypress" />
import LoginPage from "../pageObjects/LoginPage";

const login = new LoginPage();

const data = require('../fixtures/jsonData.config.json')
const email = data.login_data.valid_email
const password = data.login_data.valid_password
const invalid_email = data.login_data.invalid_email
const incorrect_email = data.login_data.incorrect_email
const incorrect_password = data.login_data.incorrect_password
const space_emailPart = data.login_data.space_emailPart
const space_emailComplete = data.login_data.space_emailComplete

describe("Navigating to the Login Page",()=> {
    before(function () {
        cy.clearLocalStorageCache();
    });
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    it("Opening the Login URL", function () {
        cy.OpenLoginUrl({});
        cy.url().should("include", "login")
    })

    // it("To verify that the element on the login page is visible", function (){
    //     login.getResetPasswordLink().should("be.visible").and("include","Reset Password").and("be.enabled")
    //     login.getCreateAccountBtn().should("be.visible").and("include","Create Account").and("be.enabled")
    // })

    it("To verify that user cannot proceed with sign in when only email is supplied", function () {
        login.getEmail().clear().type(email)
        login.getSubmitBtn().click()
        login.getPasswordErrorMsg().should("be.visible").and("contain.text","Password must be at least 8 characters")
    })

    it("To verify that user cannot proceed with sign in when only password is supplied", function () {
        login.getEmail().clear()
        login.getPassword().clear().type(password)
        login.getSubmitBtn().click()
        login.getEmailErrorMsg().should("be.visible").and("contain.text","Email cannot be empty")
    })

    it("To verify that a user cannot sign in when an invalid email address is supplied", function () {
        login.getEmail().clear().type(invalid_email)
        login.getPassword().clear().type(password)
        //login.getSubmitBtn().click()
        login.getEmailErrorMsg().should("be.visible").and("contain.text","Enter valid email")
    })

    it("To verify that the user cannot sign in with non-existing email and password", function () {
        login.getEmail().clear().type(incorrect_email)
        login.getPassword().clear().type(incorrect_password)
        login.getSubmitBtn().click()
        login.getAlert().should("be.visible").and("contain.text","User not found")
        login.getCloseAlert().click()
    })

    it("To verify that the user cannot sign in with wrong email and valid password combination", function () {
        login.getEmail().clear().type(incorrect_email)
        login.getPassword().clear().type(password)
        login.getSubmitBtn().click()
        login.getAlert().should("be.visible").and("contain.text","User not found")
        login.getCloseAlert().click()
    })

    it("To verify that user cannot sign in when wrong password and valid email is supplied", function () {
        login.getEmail().clear().type(email)
        login.getPassword().clear().type(incorrect_password)
        login.getSubmitBtn().click()
        login.getAlert().should("be.visible").and("contain.text","Invalid password")
        login.getCloseAlert().click()
    })

    it("To verify that the user cannot sign in with space character combination", function () {
        login.getEmail().clear().type(space_emailPart + " " + space_emailComplete)
        login.getPassword().clear().type(password)
        login.getSubmitBtn().click()
        login.getAlert().should("be.visible").and("contain.text","email must be a valid email")
        login.getCloseAlert().click()
    })

    it("To verify that the user can sign in with valid details", function () {
        login.getEmail().clear().type(email)
        login.getPassword().clear().type(password)
        login.getSubmitBtn().click()
        login.getAlert().should("be.visible").and("contain.text","Login successful")
    })
})