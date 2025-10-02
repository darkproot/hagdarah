const PROBABILITE = [
    {
        name: 'Disposition',
        definition: 'Soit <span class="italique">&Omega;</span> un ensemble tel que <span class="cadre">card (&Omega;) = n</span>. On appele <span class="gras">disposition de &Omega;</span> un ensemble forme d\'element choisie dans &Omega;. Un element de la disposition est caracterise par <span class="italique">sa reccurence</span> et <span class="italique">sa position</span> dans la disposition.'
    },
    {
        type: 'text',
        value: 'Une disposition est dite <span class="gras">ordonnee</span> lorsqu\'on <span class="italique">tient compte de l\'ordre</span> d\'apparition des elements, sinon elle est dite <span class="gras">non-ordonnee</span>.'
    },
    {
        type: 'text',
        value: 'Une disposition est dite <span class="gras">sans repetition</span> si les elements de la disposition <span class="italique">apparaissent au plus une fois</span>, sinon elle est dite <span class="gras">avec repetition</span>.'
    },
    {
        name: 'Arrangement',
        definition: 'On appelle <span class="gras">arrangement avec repetition</span> ou <span class="italique">nombre d\'application</span> de p elements choisis parmis les n de &Omega;, toute <span class="italique">disposition ordonnee avec eventuellement des repetitions</span> de p elements parmis n.'
    },
    {
        type: 'equation',
        value: '\\[ A_p^n\\ = n^p \\]'
    },
    {
        type: 'text',
        value: 'On appelle <span class="gras">arrangement sans repetition</span> ou <span class="italique">arrangement de p elements choisis parmis les n de &Omega;</span> ou <span class="italique">nombre d\'application injective</span> toute <span class="italique">disposition ordonnee et sans repetitions</span> de p elements parmis n.'
    },
    {
        type: 'equation',
        value: '\\[ A_p^n\\ = \\frac{n!}{(n-p)!} \\]'
    },
    {
        name: 'Permutations',
        definition: 'On appele <span class="gras">permuation sans repetition</span> ou <span class="italique">permutation de n elements de &Omega;</span>, toute <span class="italique">disposition ordonnee et sans repetition</span> de n objets.'
    },
    {
        type: 'equation',
        value: '\\[ A_n^n\\ = n! \\]'
    },
    {
        type: 'text',
        value: 'On appelle <span class="gras">permutation avec repetition</span> des n elements de &Omega;, toute <span class="italique">disposition ordonne avec eventuellements des repetitions</span> des n elements.'
    },
    {
        type: 'equation',
        value: '\\[ P_n^5 (\\alpha_1,\\alpha_2,\\dots,\\alpha_t) = \\frac{n!}{\\alpha_1!\\alpha_2!\\cdots\\alpha_t!} \\]'
    },
    {
        name: 'Combinaison',
        definition: 'On appelle <span class="gras">combinaison sans repetition</span> ou <span class="italique">combinaison de p objets parmis n</span> toute <span class="italique">non disposition ordonnee et sans repetitions</span> de p objets parmis n.'
    },
    {
        type: 'equation',
        value: '\\[ C_n^p = \\frac{A_n^p}{p!} = \\frac{n!}{p!(n-p)!} \\]'
    },
    {
        type: 'text',
        value: 'On appelle <span class="gras">combinaison avec repetition</span> de p objets parmis n, toute <span class="italique">disposition non ordonne avec eventuellements des repetitions</span> de p elements parmis n.'
    },
    {
        type: 'equation',
        value: '\\[ K_n^p = C_{p+n-1}^p = C_{p+n-1}^{n-1} \\]'
    },
    {
        name: 'Derangement',
        definition: 'On appelle <span class="gras">derangement</span> de n objets, toute <span class="italique">permutations</span> de ces objets dans laquelle <span class="italique">aucun objet ne garde sa position initiale</span>.'
    },
    {
        type: 'equation',
        value: '\\[ D_n = n! \\sum_{k-0}^n \\frac{(-1)^k}{k!} \\]'
    },
    {
        name: 'Nombre d\'application surjective',
        definition: 'Une application de <span class="italique">E</span> vers <span class="italique">F</span> est dite <span class="gras">surjective</span> si chaque element de F a <span class="italique">au moins un antecedant</span>. Le nombre de ces application est de:'
    },
    {
        type: 'equation',
        value: '\\[ S_p^n = n^p - \\sum_{i=1}^{n-1} C_n^i S_p^{n-1} \\]'
    },
    {
        name: 'Probabilite - Definitions',
        definition: 'La <span class="gras">probabilite</span> designe le degre <span class="italique">vraissemblance</span>, la chance qu\'a un evenement de se produire.'
    },
    {
        type: 'text',
        value: 'Une <span class="gras">experience</span> ou une <span class="italique">epreuve</span> est dite <span class="italique">aleatoire</span>, si on ne peut pas prevoir son resultat et si repete dans des conditions identiques, elle peut donner des resultats differents. Le <span class="gras">resultat d\'une epreuve</span> notee <span class="italique">&omega;</span> est une eventualite ou un evenement elementaire. L\'<span class="gras">ensemble des evenements elementaire</span> pour une experience aleatoire donnee constitue l\'espace fondamental appele <span class="italique">univers</span> et est notee <span class="italique">&Omega;</span>.'
    },
    {
        type: 'text',
        value: 'Un <span class="gras">evenement quelconque</span> est un ensemble d\'evenement elementaire et constitue une partie de l\'univers dont on peut dire a la fin s\'il est realise ou non.'
    },
    {
        name: 'Probabilite - Evenement remarquables',
        definition: 'L\'<span class="gras">evenement impossible</span> note <span class="italique">&empty; ou { }</span>, est l\'evenement <span class="italique">qui ne peut etre realise</span> quelque soit la situation de l\'epreuve.'
    },
    {
        type: 'text',
        value: 'L\'<span class="gras">evenement cartain</span>note <span class="italique">&Omega;</span> est l\'evenement'
    },
]