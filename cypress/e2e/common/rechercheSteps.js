import {When} from '@badeball/cypress-cucumber-preprocessor';
import {RecherchePo} from "../pages/recherchePo";

const recherchePo = new RecherchePo()

When(/^Je recherche avec un loyer (\d+) euros max sur (.*)$/, (prix, site) => {
    recherchePo.rechercheAppart(prix, site)
});

