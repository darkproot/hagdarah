const ELECTROCINETIQUE = [
    {
        name: 'Intensite',
        definition: 'L\'<span class="gras">intensite electrique</span> est un grandeur algebrique correspond au debit de charge.'
    },
    {
        name: 'Reseau electrique',
        definition: 'Un <span class="gras">reseau electrique</span> est un systeme de dipole electrocinetique relie par des conducteurs filiforme et sans resistance.'
    },
    {
        name: 'Noeud',
        definition: 'Un <span class="gras">noeud</span> est un point du reseau de resistance negligeable ou aboutisse au moins 03 branches.'
    },
    {
        name: 'Branche',
        definition: 'Une <span class="gras">branche</span> est un segment du reseau comportant au moins un dipole et delimite par 02 noeuds consecutif.'
    },
    {
        name: 'Maille',
        definition: 'Une <span class="gras">Maille</span> est un circuit ferme dans un reseau ne passant au maximium une fois par un noeud donne.'
    },
    {
        name: 'Maille independante',
        definition: 'Une maille est dite <span class="gras">independante</span> si elle comporte au moins une branche qui n\'est pas incluse dans les autres mailles. Dans un circuit de <span class="italique">n noeuds</span>, <span class="italique">b branches</span> et de <span class="italique">m mailles</span>, on a la relation <span class="cadre">b = (n - 1) + m</span>.'
    },
    {
        name: 'Dipole passif-actif',
        definition: 'Un dipole est dit <span class="gras">passif</span> s\'il ne peut fournir de l\'energie electrique de facon permanente (consomme de l\'energie). Sa caracteristique <span class="italique">passe par l\'origine</span>. Un dipole est dit <span class="gras">actif</span> s\'il est capable de fournir de l\'energie electrique de facon permanente.'
    },
    {
        name: 'Dipole symetrique-lineaire',
        definition: 'Un dipole est dit <span class="gras">symetrique</span> si sa caracteristique admet le couple <span class="italique">(0, 0)</span> comme centre de symetrie. Un dipole est dit <span class="gras">lineaire</span> si sa caracteristique est definie est definie par une <span class="italique">fonction lineaire</span> (<span class="cadre">I = pU + q</span> ou <span class="cadre">U = aI + b</span>) ou une <span class="italique">equation differentielle lineaire a coefficient constant</span>.'
    },
    {
        name: 'Source ideale de courant-tension',
        definition: 'Une source <span class="gras">ideale de courant</span> est un dipole qui debite un courant constant quel que soit la tension appliquee aux bornes. Et une source <span class="gras">ideale de tension</span> est un dipole dont la tension aux bornes est constant quel que soit le courant qui le traverse.'
    },
]