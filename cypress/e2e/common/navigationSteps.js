import {When} from '@badeball/cypress-cucumber-preprocessor';
import {NavigationPo} from "../pages/navigationPo";

const navigationPo = new NavigationPo()

When(/^Je suis sur la home page d'accueil/, () => {
    navigationPo.goToPage()
});

