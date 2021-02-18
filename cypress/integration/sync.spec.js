/// <reference types="cypress" />

describe("Esperas", () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it("Deve aguardar elemento estar disponivel", () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it("Deve fazer retrys", () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona')
    }) 

    it("Uso do find", () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it("Uso do timeout", () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        // cy.get('#buttonList').click()
        // // cy.wait(5000) usar apenas em casos extremos, onde o melhor é o timeout
        // cy.get('#lista li span', {timeout: 30000})
        //     .should('contain', 'Item 2')

        cy.get('#buttonList').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it("Clique Retry", () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it.only("Should vs Then", () => {
        //then aguarda até o elemento que foi solicitado interagir, melhor sempre usar este
        //should fica pesquisando o elemento que foi solicitado até que ele interaja 
        // cy.get('#buttonListDOM').click()
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
        }).and('have.id', 'buttonListDOM')
    })
})
