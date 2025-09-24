function generate_definition(data) {
    let result = ''
    for (const element of data) {
        switch (element.type) {
            case 'equation':
                result += `<p class='equation'>${element.value}</p>`
                break;

            case 'text':
                result += `<p class="texte">${element.value}</p>`
                break;
        
            default:
                result += `
                    <div class="definition">
                        <p class="definition-title">${element.name}</p>
                        <p>${element.definition}</p>
                    </div>`
                break;
        }
    }
    return result
}

// Pour revenir au debut de la page
document.getElementById('refresh')
    .addEventListener('click' , () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}))