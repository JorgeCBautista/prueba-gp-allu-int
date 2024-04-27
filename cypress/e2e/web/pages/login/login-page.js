class LoginPage {
    elements = {
        username: () => cy.get('#input-27'),
        password: () => cy.get('#input-28'),
        buttonLogin: () => cy.get('[type="button"] span').eq(1),
        usernametest: () => cy.get('#input-234'),
        passwordtest: () => cy.get('#input-231'),
    }
    
    navigateInteligenio(environment){
        cy.visit(Cypress.env(environment).web)
    }
    writeCredentials(username,password){
        this.elements.username().type(username)
        this.elements.password().type(password)
    }
    clickButtonLogin(){
        this.elements.buttonLogin().click()
    }

    writeCredentialstest(username,password){
        this.elements.username().type(username)
        this.elements.password().type(password)
    }
}
export default new LoginPage()