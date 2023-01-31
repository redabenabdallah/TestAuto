export class ResultatsPo {

    checkResultatRecherche(site, prix) {
        cy.get('app-results-list').find('app-annonce-card').should('have.length.gte', 1)
        cy.get('app-results-list').find('app-annonce-card').each(r => {
            expect(r.find('[class=foncia-card-place]').eq(0).text()).to.include(site.toString().toUpperCase())
        })
    }
}
