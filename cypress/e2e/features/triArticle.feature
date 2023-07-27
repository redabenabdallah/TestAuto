#language:fr
Fonctionnalité:  Tri des articles

  Scénario: Je trie les article par libellé décroissant
    Etant donné Je suis sur la home page d'accueil https://www.saucedemo.com/
    Quand Je mets username standard_user et password secret_sauce dans le formulaire
    Quand Je clique sur le bouton login
    Alors Je suis connecté
	Quand Je trie les articles suivant le libellé décroissant
	Alors Les articles sont triés par libellé décroissant

  Scénario: Je trie les article par prix croissant
    Etant donné Je suis sur la home page d'accueil https://www.saucedemo.com/
    Quand Je mets username standard_user et password secret_sauce dans le formulaire
    Quand Je clique sur le bouton login
    Alors Je suis connecté
    Quand Je trie les articles suivant le prix croissant
    Alors Les articles sont triés par prix croissant

