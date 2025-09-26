const generate_min_card = (element) => {
    return `<div class="min-card">
                <div class="card-side-bar"></div>
                <p>${element.title}</p>
                <a href="../public/pdf/${element.link}" download="${element.title + '.pdf'}">Telecharger</a>
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

// Fonction pour telecharger le fichier (Inutiliser)
function download(path, name) {
    const link = document.createElement('a')
    link.href = path
    link.download = name + '.pdf'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}