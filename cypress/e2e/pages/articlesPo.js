import {PageArticles} from "../../webElements/pageArticles";
import {DataSet} from "../../dataVariables/DataSet";

export class ArticlesPo {

    pageArticles = new PageArticles()
    dataSet = new DataSet()

    chooseArticleMaxMin() {
        const listeItemPrix = new Array()
        cy.get('body').find(this.pageArticles.elmPrix).each((item) => {
            listeItemPrix.push(parseFloat(item.text().replace("$", "").trimEnd().trimStart()))
        }).wrap(listeItemPrix).then((listeItemPrix) => {
            let listSortPrix = listeItemPrix.sort(function (a, b) {
                return a - b
            })
            this.dataSet.listSortPrix = listSortPrix
            cy.get('body').find(this.pageArticles.elmPrix).contains(listSortPrix.at(0)).eq(0).next('button').click()
            cy.get('body').find(this.pageArticles.elmPrix).contains(listSortPrix.at(listeItemPrix.length - 1)).eq(0).next('button').click()
        })
    }

    verifPanier(nbItem) {
        cy.get(this.pageArticles.elmPanier).should('have.text', nbItem)
    }

    triArticleVisu(critere, ordre) {
        let identifiantFiltre = ''
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
        const classElm = critere === 'libellé' ? this.pageArticles.elmTitreArticle : this.pageArticles.elmPrix
        const listeTextArticle = new Array()
        cy.get(classElm).each((article) => {
            listeTextArticle.push(article.text())
        }).wrap((listeTextArticle)).should((listeTextArticle) => {
            expect(ordre === 'dsc' ? listeTextArticle.reverse() : listeTextArticle.sort()).to.equals(listeTextArticle)
        })
    }

    removeItem() {
        this.triArticleVisu('prix', 'asc')
        cy.get('body').find(this.pageArticles.elmPrix).last().next('button').click()
    }

    checkPanier() {
        cy.get(this.pageArticles.elmVisuPanier).click()
        cy.url().then((monUrl) => {
            expect(monUrl).to.equals('https://www.saucedemo.com/cart.html')
        })
    }

    checkPrixItemPanier(indexListe) {
        cy.get(this.pageArticles.elmPrix).should('have.text', '$' + this.dataSet.listSortPrix.at(indexListe))
    }

    checkoutPanier() {
        cy.get(this.pageArticles.elmCheckoutBtn).click()
        cy.url().then((monUrl) => {
            expect(monUrl).to.equals('https://www.saucedemo.com/checkout-step-one.html')
        })
    }
}
