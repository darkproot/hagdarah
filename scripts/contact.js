for (const element of CONTACT) {
    document.getElementById(element.id)
        .addEventListener('click', () => window.open(element.link, '_blank'))
}