const SERIE = [
    {
        name: 'Integrale definie',
        definition: 'Une integrale est <span class="italique">defini au sens de Riemann</span>, si <span class="italique">(1)</span> les bornes a et b de l\'integrale sont deux nombres reels; <span class="italique">(2)</span> la fonction <span class="italique">f</span> dans l\'integrale, appele <span class="italique">integrande</span> est bornee sur l\'intervale ferme <span class="cadre">[a, b]</span>.'
    },
    {
        isEquation: true,
        equation: '\\[ \int_a^b f(x)\ dx \\]'
    },
    {
        name: 'Fonction bornee sur un ensemble',
        definition: 'Soit <span class="italique">E</span>, un ensemble non vide. Une fonction <span class="cadre">f : E --> IR</span> (ou C), est dite <span class="gras">bornee sur E</span> lorsque:' 
    },
    {
        isEquation: true,
        equation: '\\[ \exists\ M\in R\ /\ \ \forall\ x \in E,\ |f(x)| \leq M \\]'
    },
] 