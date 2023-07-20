export class ArticlesPo {

    chooseArticleMaxMin() {
        const listeItemPrix = new Array()
        cy.get('body').find('[class="inventory_item_price"]').each((item) => {
            listeItemPrix.push(parseFloat(item.text().replace("$", "").trimEnd().trimStart()))
        }).wrap(listeItemPrix).then((listeItemPrix) => {
            console.log('listeItemPrix ' + listeItemPrix)
            cy.get('body').find('[class="inventory_item_price"]').contains(listeItemPrix.sort(function (a, b) {
                return a - b
            }).at(0)).eq(0).next('button').click()
            cy.get('body').find('[class="inventory_item_price"]').contains(listeItemPrix.sort(function (a, b) {
                return a - b
            }).at(listeItemPrix.length - 1)).eq(0).next('button').click()
        })
        //cy.get('body').find('[class="inventory_item_price"]').contains('7.99').eq(0).next('button').click()
        //cy.get('body').find('[class="inventory_item_price"]').contains('49.99').eq(0).next('button').click()
    }

    verifPanier(nbItem) {
        cy.get('[class="shopping_cart_badge"]').should('have.text', nbItem)
    }

    triArticleVisu(critere, ordre) {
        let identifiantFiltre =''
        switch (critere) {
            case 'libellé': {
                identifiantFiltre = ordre === 'dsc' ? 'Name (Z to A)' : 'Name (A to Z)'
                break;
            }
            case 'prix': {
                identifiantFiltre = ordre === 'dsc' ? 'Price (high to low)' : 'Price (low to high)'
                break;
            }
        }
        cy.get('[class="product_sort_container"]').select(identifiantFiltre)
    }

    verifTriPanier(critere, ordre) {
        const classElm = critere === 'libellé' ? '[class="inventory_item_name"]' : '[class="inventory_item_price"]'
        const listeTextArticle = new Array()
        cy.get(classElm).each((article) => {
            listeTextArticle.push(article.text())
        }).wrap((listeTextArticle)).should((listeTextArticle) => {
            expect(ordre === 'dsc' ? listeTextArticle.reverse() : listeTextArticle.sort()).to.equals(listeTextArticle)
        })
    }
}
