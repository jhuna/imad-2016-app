var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    index: {
    title: 'About me | Smruti Rekha Senapati',
    content: `  
<div class="container">    
     <h1>
        <a href="/" style="text-decoration:none">Smruti Rekha Senapati</a>
    </h1>
<div class="menu">

&nbsp;&nbsp; <a href="/"> Home </a>  &nbsp;&nbsp; <a href="/myresume">    My Resume  </a>  &nbsp;&nbsp;    My app   
    
    </div>    
<div>
    <center>
        <img src="https://4.bp.blogspot.com/-ro0FfxfjGQg/WCMELfxEaAI/AAAAAAAAAS4/reHknJ2K8CUA1k-YzKGpyUmWbeQVMz6YwCLcB/s1600/me.jpg"/>
    </center>
                
    
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
},
myresume: {
    title: 'My resume | Smruti Rekha Senapati',
    content: `  
     <h1>
        <a href="/" style="text-decoration:none">Smruti Rekha Senapati</a>
    </h1>
<div class="container">
<div class="menu">                
        <p>
        Home       My Resume       My app   
    </p>
    </div>
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
}
};


function createTemplate (data) {
var title = data.title;
var content = data.content;
var htmltemplate = `
<HTML>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width initial-scale=1">
<link href="/ui/style.css" type="text/css" rel="stylesheet">
</head>

<BODY>
${content}
</BODY>
</HTML>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.send(createTemplate(articles.index));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/myresume', function (req, res) {
  res.send(createTemplate(articles.myresume));
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
