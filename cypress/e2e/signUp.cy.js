/// <reference types= "cypress" />
import SignUpPage from "../pageObjects/SignUpPage";
import YopMail from "../pageObjects/YopMail";

var signupEmail
const yopMail = new YopMail;
const signup = new SignUpPage();

const data = require('../fixtures/jsonData.config.json')
const firstname = data.signup_data.firstname
const lastname = data.signup_data.lastname
const password = data.signup_data.password

describe("Navigating to the Sign up Page",()=> {
    before(function () {
        cy.clearLocalStorageCache();
    });
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });


    it("Opening Sign up URL", function () {
        cy.OpenSignUpUrl({});
        cy.url().should("include","register")
    })

    it("Successful sign up", function(){
        signup.getFirstName().clear().type(firstname)
        signup.getLastName().clear().type(lastname)

        var time = Date.now()
        signupEmail = "test"+time+"@yopmail.com"
        signup.getEmailAddress().clear().type(signupEmail)
        signup.getPassword().clear().type(password)
        signup.getConfirmPassword().clear().type(password)
        signup.getCodeBtn().click()
        signup.getAlert().should("be.visible").and("contain.text","User created successfully")
    })

    it("Validate user can proceed to their email to fetch OTP", function(){
        cy.forceVisit("https://yopmail.com/en/", signupEmail)
    });
})