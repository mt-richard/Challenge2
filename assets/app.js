let navbar = document.querySelector('.links');
let menubar = document.querySelector('#menubar');

menubar.onclick = () =>{
    navbar.classList.toggle('active');
    menubar.classList.toggle('times')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}