import {When} from '@badeball/cypress-cucumber-preprocessor';
import {ArticlesPo} from "../pages/articlesPo";

const articlePo = new ArticlesPo()

When(/^Je choisis le produit plus cher et le moins cher/, () => {
    articlePo.chooseArticleMaxMin()
});

When(/^On a (\d+) éléments dans le panier/, (nbItem) => {
    articlePo.verifPanier(nbItem)
});

