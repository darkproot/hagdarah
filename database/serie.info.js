const SERIE = [
    {
        name: 'Integrale definie',
        definition: 'Une integrale est <span class="italique">defini au sens de Riemann</span>, si <span class="italique">(1)</span> les bornes a et b de l\'integrale sont deux nombres reels; <span class="italique">(2)</span> la fonction <span class="italique">&fnof;</span> dans l\'integrale, appele <span class="italique">integrande</span> est bornee sur l\'intervale ferme <span class="cadre">[a, b]</span>.'
    },
    {
        type: 'equation',
        value: '\\[ \\int_a^b f(x)\\ dx \\]'
    },
    {
        name: 'Fonction bornee sur un ensemble',
        definition: 'Soit <span class="italique">E</span>, un ensemble non vide. Une fonction <span class="cadre">&fnof; : E &rarr; &reals;</span> (ou &complexes;), est dite <span class="gras">bornee sur E</span> lorsque:' 
    },
    {
        type: 'equation',
        value: '\\[ \\exists\ M\\in R\\ /\\ \\ \\forall\ x \\in E,\\ |f(x)| \\leq M \\]'
    },
    {
        type: 'text',
        value: 'De meme, si une fonction <span class="italique">&fnof; est continue sur [a, b]</span>, alors &fnof; est <span class="italique">bornee sur [a, b]</span> (et non [a, b[, non ]a, b], non ]a, b[).'
    },
    {
        name: 'Point adherent - adherence',
        definition: 'Soit <span class="italique">A &sub; &reals;</span>. Un <span class="gras">point adherent</span> a A est tout nombre reels <span class="italique">x0</span> dont tout voisinage dans <span class="italique">&reals;</span> contient toujours (au moins) un element de A, ie verifiant:'
    },
    {
        type: 'equation',
        value: '\\[ \\forall\\ r\\ > 0,\\ A \\cap [x_0-r, x_0+r]\\ \\neq\\ \\emptyset \\]'
    },
    {
        type: 'text',
        value: 'L\' <span class="italique">adherence</span> de A est un <span class="italique">sous-ensemble</span> de &reals;, forme des nombres reels qui sont des points adherents a A.'
    },
    {
        name: 'Fonction bornee au voisinage dans A de x0',
        definition: 'Soient <span class="italique">A &sub; &reals;</span> et un nombre reel <span class="italique">x0 appartenant a (A bar)</span>. Une fonction <span class="cadre">&fnof; : A &rarr; &reals;</span> (ou &complexes;), est dite <span class="gras">bornee au voisinage de x0 dans A</span>, lorsque:'
    },
    {
        type: 'equation',
        value: '\\[ \\exists\\ r>0,\\  \\exists\\ M\\in R_+\\ /\\ \\forall\\ x\\in A\\cap [x_0-r,x_0+r],\\ |f(x)| \\leq M \\]'
    },
    {
        type: 'equation',
        value: '\\[ \\exists\\ r>0,\\  \\exists\\ M\\in R_+\\ /\\ \\forall\\ x\\in A,\\ |x-x_0|\\leq r\\ \\Rightarrow\\ |f(x)| \\leq M  \\]'
    },
] 