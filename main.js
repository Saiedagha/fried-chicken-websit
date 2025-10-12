// *========= show menu ======*//
const navmenu = document.getElementById("nav-menu"),
      navtoggle = document.getElementById("nav-toggle"),
      navclose = document.getElementById("nav-close")

//   menu show //
if(navtoggle){
    navtoggle.addEventListener('click' , () => {
        navmenu.classList.add('show-menu');
    })
}

// menu hidden //
if(navclose){
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}

// *=== remove menu mobile ===*//
const navlink = document.querySelectorAll('.nav-link')

const linkaction = () =>{
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

// *=== add shadow header ===*//


// *=== show scroll up ///


// === scroll sections active link///


// === scroll reveal animation///