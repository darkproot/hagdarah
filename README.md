# HAGDARAH
`HAGDARAH` qui signifie em hebreu **''definition''** permet de receuillir toute les definitions du niveau 2 MSP de ENSPY.

## Ajouter une definition
Pour ajouter une definition, il faut ajouter un objet a la liste contenue dans le fichier `javascript`, les informations concernant la definition comme suit:
```JS
{
    name: 'Titre',
    definition: 'Element permettant de labeliser une section.'
}
```

## Ajouter une equation
Pour ajouter un equation, il faut ajouter un objet a la liste contenue dans le fichier `javascript`, les informations concernant l'equation comme suit:
```JS
{
    isEquation: true,
    equation: '\[\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}\]'
}
```

## Ajouter une UE (Unite d'enseignement)
Pour ajouter une nouvelle unite d'enseignement, il faut une nouvelle carte en ajoutant au fichier `database/card.info.js`, les informations relative a la matiere.
|Clef|Fonction|
|----|--------|
|id|Pour l'identifaint dans le HTML permettant d'ajouter un `Event Listiner`|
|name|Pour le nom de la carte|
|link|Pour le lien dont la racine est le repertoire de `index.html`|
```JS
{
    name: 'Serie et Integrale',
    link: 'pages/serie.html',
    id: 'serie'
}
```