# HAGDARAH
`HAGDARAH` qui signifie en hebreu **''definition''** permet de receuillir toute les definitions du niveau 2 MSP de ENSPY.

## Ajouter un element
Pour ajouter un element, il faut ajouter un objet a la liste contenue dans le fichier `javascript` de l'UE contenu dans le repertoire `database/`.
- Pour une __definition__,
```JS
{
    name: 'Titre',
    definition: 'Element permettant de labeliser une section.'
}
```
- Pour ajouter les autres type,

|Type (`type`)|Valeur (`value`)|Exemple|
|----------|-------------|-------|
|`text`|Le texte avec les differentes span|De meme, si une  <span class="italique">f est continue sur [a, b]</span>, alors f est <span class="italique">bornee sur [a, b]</span>.|
|`equation`|L'equation ecrit en `Latex`|`\\[ \\int_a^b f(x)\\ dx \\]`|

## Ajouter une UE (Unite d'enseignement)
Pour ajouter une nouvelle unite d'enseignement, il faut une nouvelle carte en ajoutant au fichier `database/card.info.js`, les informations relative a la matiere.
|Clef|Fonction|
|----|--------|
|`id`|Pour l'identifaint dans le HTML permettant d'ajouter un `Event Listiner`|
|`name`|Pour le nom de la carte|
|`link`|Pour le lien dont la racine est le repertoire de `index.html`|
```JS
{
    name: 'Serie et Integrale',
    link: 'pages/serie.html',
    id: 'serie'
}
```

## Ajouter un fichier pour le telechargement
Pour ajouter un fichier afin de le mettre a la disposition pour le telechargement, il faut le placer dans le repertoire `/public/pdf/`. Ensuite ajouter dans le ficher `/database/exercices.info.js`, les informations du fichier comme suit:

|Clef|Fonctions|
|----|---------|
|`title`|Titre du secteur ou appartient le fichier|
|`links`|Liste des fichiers d'un meme domaine|
|`lenght`|Taille du fichier|

```JS
{
    title: 'Domaine',
    links: [
        {
            title: 'Nom du fichier',
            link: 'Nom_complet.pdf',
            lenght: '3.46 Mo'
        }
    ]
}
```