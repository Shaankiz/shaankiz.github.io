    const menuButton = document.querySelector(".menu_button")
    const navLinks = document.querySelector(".nav-links")
    menuButton.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })