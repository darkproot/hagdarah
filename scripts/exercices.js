const generate_min_card = (element) => {
    return `<div class="min-card">
                <p>${element.title}</p>
                <button onclick="${download(element.title)}">Telecharger</button>
            </div>`
}

const generate_all_min_card = (links) => {
    let result = ''
    for (const element of links) {
        result += generate_min_card(element)
    }
    
    return result
}

const generate_card = () => {
    let result = ''
    for (const element of EXERCICES) 
        result += `<div class="card">
                        <h2>${element.title}</h2>
                         ${generate_all_min_card(element.links)}
                    </div>`
    
    return result
}

// Ajouter les card
document.getElementById('container').innerHTML = generate_card()

// Fonction pour telecharger le fichier
function download(path, name) {
    const link = document.createElement('a')
    link.href = path
    link.download = name + '.pdf'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}