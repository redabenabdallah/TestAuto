#language:fr
Fonctionnalité:  Tri des articles

  Scénario: Je trie les article par libellé décroissant
    Etant donné a standard account
    Quand Je mets username standard_user et password secret_sauce dans le formulaire
    Quand Je clique sur le bouton login
    Alors Je suis connecté
	Quand Je trie les articles suivant le libellé décroissant
	Alors Les articles sont triés par libellé décroissant

  Scénario: Je trie les article par prix croissant
    Etant donné a standard account
    Quand Je mets username standard_user et password secret_sauce dans le formulaire
    Quand Je clique sur le bouton login
    Alors Je suis connecté
    Quand Je trie les articles suivant le prix croissant
    Alors Les articles sont triés par prix croissant

