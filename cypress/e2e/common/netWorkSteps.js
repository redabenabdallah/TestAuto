import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {NetWorkPo} from "../pages/netWorkPo";

const netWorkPo = new NetWorkPo()

When(/^Je teste le endPoint (.*) avec la methode (.*)/, (endPoint, methode) => {
    netWorkPo.goRequest(endPoint, methode)
});

When(/^Pour les paramètres suivants (.*), je teste le endPoint (.*) avec la methode (.*)/, (body, endPoint, methode) => {
    netWorkPo.goRequestWithBody(endPoint, methode, body)
});

Then(/^La réponse est conforme au fichier json (.*)/, (responseExpected) => {
    netWorkPo.checkResponse(responseExpected)
});

Then(/^Le statut de la réponse est (\d+)/, (statutResponseExpected) => {
    netWorkPo.checkResponseStatut(statutResponseExpected)
});

