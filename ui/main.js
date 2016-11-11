console.log('Loaded!');

//rewrite text
var element = document.getElementById('ajit');

element.innerHTML = 'new value';

//move the image
var img1 = document.getElementById('madi');
img1.onclick  = function() {
    img1.style.marginleft = "100px";
};