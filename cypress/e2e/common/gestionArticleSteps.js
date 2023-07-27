import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {ArticlesPo} from "../pages/articlesPo";

const articlePo = new ArticlesPo()

When(/^Je choisis le produit plus cher et le moins cher/, () => {
    articlePo.chooseArticleMaxMin()
});

When(/^On a (\d+) éléments dans le panier/, (nbItem) => {
    articlePo.verifPanier(nbItem)
});

When(/^I remove the most costly item/, () => {
    articlePo.removeItem()
});

When(/^go to checkout page/, () => {
    articlePo.checkPanier()
});

Then(/^I should have only Item total equal the lowest cost item/, () => {
    articlePo.checkPrixItemPanier(0)
});

Then(/^I can “Finished” the checkout/, () => {
    articlePo.checkoutPanier()
});
