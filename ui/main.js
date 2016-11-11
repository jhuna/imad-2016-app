console.log('Loaded!');

//rewrite text
//var element = document.getElementById("ajit");
//element.innerHTML = 'new value';

//move the image
var img = document.getElementById("madison");
img.onclick = function () { 
    function moveRight() {
    var marginLeft = 0;
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    var interval = setInterval(moveRight, 100);
//img.style.marginLeft = '100px';
};