import {Then, When} from '@badeball/cypress-cucumber-preprocessor';
import {ArticlesPo} from "../pages/articlesPo";

const articlePo = new ArticlesPo()

When(/^Je trie les articles suivant le libellé décroissant/, () => {
    articlePo.triArticleVisu('libellé' , 'dsc')
});

Then(/^Les articles sont triés par libellé décroissant/, (nbItem) => {
    articlePo.verifTriPanier('libellé' ,'dsc')
});

When(/^Je trie les articles suivant le prix croissant/, () => {
    articlePo.triArticleVisu('prix' , 'asc')
});

Then(/^Les articles sont triés par prix croissant/, (nbItem) => {
    articlePo.verifTriPanier('prix' ,'asc')
});

