for (const element of CONTACT) {
    document.getElementById(element.id)
        .addEventListener('click', () => window.location = element.link)
}