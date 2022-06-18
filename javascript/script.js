// let p = document.getElementById ('title1');
// console.log (p)

function burgerMod () {
    const cont = document.getElementsByClassName ('container').item(0);
    const nav = document.getElementsByTagName ('nav'). item(0);
    nav.classList.toggle ('change');
    cont.classList.toggle ('modify');
}
function clickHandler () {
    alert('Logged in succesfully')
    console.log ('click was succesful')
}