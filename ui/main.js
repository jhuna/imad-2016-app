console.log('Loaded!');

//rewrite text
//var element = document.getElementById("ajit");
//element.innerHTML = 'new value';

//move the image
var img = document.getElementById("madison");
 var marginLeft = 0;
    function moveRight() {
    
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    img.onclick = function () {
    var interval = setInterval(moveRight, 100);
//img.style.marginLeft = '100px';
};

var button = document.getElementById("clickme");
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status == 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }    
        }
    };
    request.open('GET', 'http://jhuna.imad.hasura-app.io/counter', 'true' );
    request.send(null);
};


var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status == 200) {
            var names = request.responseText;
            names = JSON.parse(names);
    var list = '';
    for (var i = 0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }    
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://jhuna.imad.hasura-app.io/submit-name?name=' + name, 'true' );
    request.send(null);
    
    
};
