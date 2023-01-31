import {When} from '@badeball/cypress-cucumber-preprocessor';
import {ResultatsPo} from "../pages/resultatsPo";

const resultatsPo = new ResultatsPo()

When(/^J'ai une liste de résultats qui sont liés à (.*)/, (site) => {
    resultatsPo.checkResultatRecherche(site, 1500)
});
