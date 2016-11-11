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

&nbsp;&nbsp; <a href="/" style="color:white"> Home </a>  &nbsp;&nbsp; <a href="/myresume" style="color:white">    My Resume  </a>  &nbsp;&nbsp;    My app   
    
    </div>    
<br>
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
<div class="container1">
     
<div class="menu">                
        &nbsp;&nbsp; <a href="/" style="color:white"> Home </a>  &nbsp;&nbsp; <a href="/myresume" style="color:white">    My Resume  </a>  &nbsp;&nbsp;    My app
    </div>
    <p>  
    <div class="center">
    <h3>
    Curriculum Vitae
</h3>
<h2>
Smruti Rekha Senapati
</h2>
</div>
<div class="contact">
Date of Birth: 05/04/1991   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          Address for Correspondence: 
Sex: Female	                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        C-31, NABARD Quarters
Nationality: Indian	   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        9A Boat Club Road, Bund Garden
Marital status: Married  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Pune-411001
Phone: +919405880424	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            email: smruti.bpd@gmail.com
</div>
ACADEMIC PROFILE
Degree/Diploma	Year	Institute, City	%marks/CGPA
M.Tech in Electrical Engineering	Pursuing	Biju Pattnaik Technical University	
B.Tech in Electrical Engineering	2014	Biju Pattnaik Technical University	7.62
Diploma in Electrical Engineering	2011	Balasore School of Engineering	73%
Xth Higher Secondary Exam, Odisha	2006	M P K Girls High School, Baripada	58%

CAREER OBJECTIVE
To work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization objective.
PROJECTS
Design and installation of Solar power plant (Sept.'13 - Mar.'14)
B.Tech project completed at BCET, Sergarh/Bhubaneshwar.
Project Sponsored by Innodust, Bhubaneswar
Project Guide: Lect. Chakradhar Panda
ACADEMIC INTERESTS
Power Electronics, Electrical & electronics measurement, Electrical machines.
COURSES TAKEN IN ENGINEERING
Departmental: Network theory, Analog electronic circuits, Electrical machines, Digital electronics circuit, Project Management, Electrical and electronics measurement, Control system engineering, Power electronics, Sensors and transducers, Digital signal processing, Transmission and distribution system, Microprocessor and microcontroller, Computer network and data communication, Power system operation and control, Advanced control systems, Flexible AC transmission system, Power station engineering and economy, Power system protection, Digital image processing, Electrical power quality, Transmission and distribution system.

Non-departmental: Material science and engineering, Fluid mechanics and machines, C++ and Object oriented programming, Organizational behaviour, Database management systems, Biomedical instrumentation, Entrepreneurship development, Physics of semi-conductor devices, Engineering economics and costing, Optimization in engineering, Electromagnetic theory, Environmental engineering and safety.
COMPUTER SKILLS
Languages: C++
Operating Systems: Windows 

ADDITIONAL INFORMATION
Character Traits: Enthusiastic Learner, eager to learn new technologies, honest, good at communication and always prepared to accept challenges.
Background: Born and brought up in Baripada, Mayurbhanj district, Odisha.
Hobbies: Cooking, traveling, movies etc.
Languages known: English, Hindi, Odia.

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
