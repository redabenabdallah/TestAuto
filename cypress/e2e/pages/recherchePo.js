export class RecherchePo {

    rechercheAppart(prixMax, site) {
        cy.get('#projectToggle').click()
        cy.get('body').find('p-radiobutton').contains('Louer').click()
        cy.get('#projectToggle').should('include.text', 'Louer')
        cy.get('[inputid="price"]').find('input').clear().type(prixMax)
        cy.get('[inputid="city"]').find('input').clear().type(site)
        cy.get('body').find('[role="option"]').contains(site).eq(0).click()
        cy.get('[inputid="city"]').find('input').should('contain.value', site)
        cy.get('.button > :nth-child(2) > .p-button').click()
    }
}
