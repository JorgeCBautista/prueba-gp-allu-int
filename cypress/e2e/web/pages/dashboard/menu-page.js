class MenuPage {
    elements = {
        titleCollege: () => cy.get('.text-center.text-h7.font-weight-bold'),
        menuPage: () => cy.get('.v-list-item__content p')
    }
    validateTitleHomePage(){
        this.elements.titleCollege().should('to.exist')
    }
    ScrollMenuHomePage(listamenu){
        this.elements.menuPage().each(($element) =>{
            const text = $element.text().trim();
            if(text.includes(listamenu)){
                cy.wrap($element).click().wait(1000);
            }
        });
    }     
}
export default new MenuPage()