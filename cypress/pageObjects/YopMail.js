class YopMail{

    getLoginField(){
        return cy.get("#login")
    }
    getSearchBtn(){
        return cy.get('#refreshbut > .md ')
    }
    getIframe(){
        return cy.frameLoaded("#ifmail")
    }


}
export default YopMail;