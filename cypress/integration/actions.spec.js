describe('Action Test', ()=>{
    before(function(){
        // runs once before all tests in the block
    })

    after(function(){
        // runs once after all tests in the block
    })

    beforeEach(function(){
        // runs before each test in the block
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    afterEach(function(){
        // runs after each test in the block
    })

    it('submit developer name', function(){
        // cy.get('#developer-name').type('Name')
        // cy.get('#submit-button').scrollIntoView()
        // cy.get('#submit-button').click()

        cy.submitDeveloper('Test')
        cy.get('.result-content').should('be.visible')
        cy.url().should('include', 'thank-you')
    })

    it('should enable slider', function(){
        cy.get('#slider').as("Slider")
        cy.get("@Slider").should("have.class", 'ui-state-disabled')
        cy.get('#tried-test-cafe').click()
        cy.get('@Slider').should("not.have.class", 'ui-state-disabled')
        
    })
    it('should have empty value by default', function(){
        cy.get('#comments').as('Textarea')
        
        cy.get('#tried-test-cafe').click()
        cy.get('@Textarea').should('have.value', '')
        cy.get('@Textarea').type("new value")
        cy.get('@Textarea').should('have.value', 'new value')
    })

    
})
