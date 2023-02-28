const botao = document.querySelector('.botao')
const modal = document.querySelector('.modal')
const fecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src

botao.addEventListener('click', () => {
    modal.classList.add('aberto')
    video.setAttribute('src', linkDoVideo)
})

fecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto')
    video.setAttribute('src', '')
})


