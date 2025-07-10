const avatar = document.getElementById('avatar');
const menu = document.getElementById('user-menu');
const closeIcon = document.getElementById('close-icon')

avatar.addEventListener("click", ()=>{
    menu.classList.add('show-user-menu');
})

closeIcon.addEventListener("click", ()=>{
    menu.classList.remove('show-user-menu');
})