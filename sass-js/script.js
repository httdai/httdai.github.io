particlesJS.load('particles-js', 'sass-js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
/*function navScroll(event)
{
    const idScroll = event.target.dataset.scrollto;
    let elmnt = document.getElementById(idScroll);

    window.scrollTo(elmnt.offsetLeft, navtaget.offsetTop - document.getElementById('menu').parentNode.clientHeight);

}*/

function navScroll(event)
{
    const idScroll = event.target.dataset.scrollto;
    let elmnt = document.getElementById(idScroll);
    window.scrollTo(elmnt.offsetLeft, elmnt.offsetTop - document.getElementById('menu').parentNode.clientHeight);
}
window.onload = function (){}
