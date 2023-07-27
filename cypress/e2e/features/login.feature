#language:fr
Fonctionnalité:  Login

  Scénario: Je me connecte
    Etant donné a standard account
    Quand Je mets username standard_user et password secret_sauce dans le formulaire
    Quand Je clique sur le bouton login
    Alors Je suis connecté
    Quand Je choisis le produit plus cher et le moins cher
    Alors On a 2 éléments dans le panier
    Quand I remove the most costly item
    Et go to checkout page
    Alors I should have only Item total equal the lowest cost item
    Et I can “Finished” the checkout


