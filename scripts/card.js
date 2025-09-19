function generate_card(name, id) {
    return `<div class="card" id="${id}">
                <p>${name}</p>
            </div>`
}

function allCard() {
    let result = '';
    for (const element of DATA) {
        result += generate_card(element.name, element.id)
    }
    return result
}

document.getElementById('card-container')
    .innerHTML = allCard()

for (const element of DATA) {
    document.getElementById(element.id)
        .addEventListener('click', () => location.href = element.link)
}
