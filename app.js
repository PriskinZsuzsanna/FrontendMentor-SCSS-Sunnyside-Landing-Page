//Menu

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('open');
    
})

document.querySelector('ul').addEventListener('click', () => {
    document.querySelector('ul').classList.remove('open');
})

//Scroll -sticky nav

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
    document.querySelector('ul').classList.toggle('scroll', window.scrollY > 50)
    document.querySelector('ul').classList.remove('open', window.scrollY > 50)
});

