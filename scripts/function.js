function generate_definition(data) {
    let result = ''
    for (const element of data) {
        result += `
            <div class="definition">
                <p class="definition-title">${element.name}</p>
                <p>${element.definition}</p>
            </div>`
    }
    return result
}