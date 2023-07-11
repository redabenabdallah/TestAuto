export class ArticlesPo {

    chooseArticleMaxMin() {
        cy.get('body').find('[class="inventory_item_price"]').contains('7.99').eq(0).next('button').click()
        cy.get('body').find('[class="inventory_item_price"]').contains('49.99').eq(0).next('button').click()
    }

    verifPanier(nbItem){
        cy.get('[class="shopping_cart_badge"]').should('have.text', nbItem)
    }
}
