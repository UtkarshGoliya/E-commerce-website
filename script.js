var landing = document.querySelector('#container')
var sign = document.querySelector('#sign-up');

function showsignin(){
    landing.style.display = ('none');
    sign.style.display = ('block');
}

function showlandingpage(){
    sign.style.display = ('none');
    landing.style.display = ('block');
}