document.getElementById('mobile-nav-button').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
    document.getElementById('page').classList.toggle('overflow');
    document.getElementById('cache').classList.toggle('active');
    document.getElementById('bottom-slide').classList.toggle('active')
})

document.getElementById('cache').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
    document.getElementById('page').classList.toggle('overflow');
    document.getElementById('cache').classList.toggle('active');
    document.getElementById('bottom-slide').classList.toggle('active')
})

document.getElementById('bottom-slide').addEventListener('click', () => {
    window.scroll({
        top: document.getElementById('producten').offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

[...document.getElementsByClassName('slideTo')].forEach((element) => {
    console.log(element.getAttribute('href'))
    element.addEventListener('click', (e) => {
        e.preventDefault()
        window.scroll({
            top: document.getElementById(element.getAttribute('href').substring(1)).offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    });
});

  
  

