Feature:  Test web Service avec Cypress

  Scenario: Je teste le webservice https://jsonplaceholder.cypress.io/comments
    When Je teste le endPoint https://jsonplaceholder.cypress.io/comments avec la methode GET
    Then La réponse est conforme au fichier json responseGetAllComments.json

  Scenario Outline: Je teste le webservice https://jsonplaceholder.cypress.io/comments avec id et postId en paramètres
    When Pour les paramètres suivants id=<id>&postId=<postId>, je teste le endPoint https://jsonplaceholder.cypress.io/comments avec la methode GET
    Then La réponse est conforme au fichier json <jsonExpected>

    Examples:
      | id | postId | jsonExpected               |
      | 1  | 1      | responseGetId1PostId1.json |
      | 2  | 1      | responseGetId2PostId1.json |

  Scenario: Je teste le webservice POST https://jsonplaceholder.typicode.com/posts
    When Pour les paramètres suivants {title: 'foo',body: 'bar',userId: 1,}, je teste le endPoint https://jsonplaceholder.typicode.com/posts avec la methode POST
    Then Le statut de la réponse est 201
