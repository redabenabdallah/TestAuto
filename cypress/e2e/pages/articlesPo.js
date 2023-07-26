import {PageArticles} from "../../webElements/pageArticles";

export class ArticlesPo {

    pageArticles = new PageArticles()

    chooseArticleMaxMin() {
        const listeItemPrix = new Array()
        cy.get('body').find(this.pageArticles.elmPrix).each((item) => {
            listeItemPrix.push(parseFloat(item.text().replace("$", "").trimEnd().trimStart()))
        }).wrap(listeItemPrix).then((listeItemPrix) => {
            cy.get('body').find(this.pageArticles.elmPrix).contains(listeItemPrix.sort(function (a, b) {
                return a - b
            }).at(0)).eq(0).next('button').click()
            cy.get('body').find(this.pageArticles.elmPrix).contains(listeItemPrix.sort(function (a, b) {
                return a - b
            }).at(listeItemPrix.length - 1)).eq(0).next('button').click()
        })
    }

    verifPanier(nbItem) {
        cy.get(this.pageArticles.elmPanier).should('have.text', nbItem)
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
        cy.get(this.pageArticles.elmTriSelect).select(identifiantFiltre)
        cy.get('[class="active_option"]').should('have.text', identifiantFiltre)
    }

    verifTriListeArticle(critere, ordre) {
        const classElm = critere === 'libellé' ? this.pageArticles.elmTitreArticle: this.pageArticles.elmPrix
        const listeTextArticle = new Array()
        cy.get(classElm).each((article) => {
            listeTextArticle.push(article.text())
        }).wrap((listeTextArticle)).should((listeTextArticle) => {
            expect(ordre === 'dsc' ? listeTextArticle.reverse() : listeTextArticle.sort()).to.equals(listeTextArticle)
        })
    }
}
