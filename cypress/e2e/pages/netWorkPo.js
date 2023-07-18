export class NetWorkPo {

    directoryReponseExpected = 'responseExpected/'

    goRequest(endPoint, methode) {
        cy.request(methode, endPoint).as('maRequete')
    }

    goRequestWithBody(endPoint, methode, body) {
        if (methode.toString().toLowerCase().includes('get')) {
            cy.request(methode, endPoint + '?' + body).as('maRequete')
        } else {
            cy.request(methode, endPoint, body).as('maRequete')
        }

    }

    checkResponse(responseExpected) {
        cy.fixture(this.directoryReponseExpected + responseExpected).then((responseExpected) => {
            cy.get('@maRequete').its('body').should('deep.equal', responseExpected)
        })
    }

    checkResponseStatut(statutResponseExpected) {
        cy.get('@maRequete').its('status').should('equal', statutResponseExpected)
    }
}
