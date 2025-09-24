const open_side_bar = () => {
    document.getElementById('navbar').classList.add('show')
    document.getElementById('show-button').classList.add('hide')
}
const close_side_bar = () => {
    document.getElementById('navbar').classList.remove('show')
    document.getElementById('show-button').classList.remove('hide')
}
document.getElementById('show-button').addEventListener('click', open_side_bar)
document.getElementById('hide-button').addEventListener('click', close_side_bar)