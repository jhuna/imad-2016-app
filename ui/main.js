console.log('Loaded!');

//rewrite text
var element = document.getElementById('ajit');

element.innerHTML = 'new value';

//move the image
var img = document.getElementById('madi');
img.onclick  = function() {
    img.style.marginleft = "100px";
};