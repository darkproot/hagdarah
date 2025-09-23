function generate_definition(data) {
    let result = ''
    for (const element of data) {
        if (!element.isEquation) {
            result += `
            <div class="definition">
                <p class="definition-title">${element.name}</p>
                <p>${element.definition}</p>
            </div>`
        } else {
            result += `<p class='equation'>${element.equation}</p>`
        }
    }
    return result
}

document.getElementById('refresh')
    .addEventListener('click' , () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}))