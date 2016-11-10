var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    title: 'About me | Smruti Rekha Senapati',
    heading: 'Smruti Rekha Senapati',
    content: `  
<div class="container">    
     <h1>
        <a href="/" style="text-decoration:none">Smruti Rekha Senapati</a>
    </h1>
<div>
    <center>
        <img src="https://4.bp.blogspot.com/-ro0FfxfjGQg/WCMELfxEaAI/AAAAAAAAAS4/reHknJ2K8CUA1k-YzKGpyUmWbeQVMz6YwCLcB/s1600/me.jpg"/>
    </center>
<div class="menu">                
    <p>
        My Resume
    </p>    
    <p>  
        Hi! I am Smruti and this is my first web-app.
    </p>
    <p> 
        I am from Baripada, Odisha, India.
        I have a Bachelor's in Electrical Engineering from Biju Pattnaik University of Technology, Rourkela, Odisha.
    </p>
    <p>
        I am pursuing a M.Tech also in Electrical Engineeirng from BPUT through Seemanta College of Engineering, Baripada.
    </p>
    <p>
        I currently reside in Pune.
    </p>
<div class="center">
    <p>
    <font size="-1" color="red">
    &copy; 2016 Copyright Smruti Rekha Senapati
    </font>
    </p>
</div>`
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-two', function (req, res) {
  res.send('article two will be served here');
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-three', function (req, res) {
  res.send('article three will be served here');
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
