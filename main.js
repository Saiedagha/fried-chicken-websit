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
const scrollheader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')    
}
window.addEventListener('scroll', scrollheader)

// *=== show scroll up ///
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
     this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

// === Scroll sections active link ===
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


// === scroll reveal animation///