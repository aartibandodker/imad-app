var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  articleone:{
        title:'article one',
        heading:'article one',
        date:'15 august 2017',
        content:`
        <p>This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.</p>
        <p>This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.</p>
        <p>This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.This is Aricle One.</p>
        `
    },
    articletwo:{
        title:'article two',
        heading:'article two',
        date:'15 August 2018',
        content:`
        <p>This is Aricle two.This is Aricle two.This is Aricle two.This is Aricle two.This is Aricle two.This is Aricle two.</p>
                `
        },
    articlethree:{
        title:'article three',
        heading:'article three',
        date:'15 august 2017',
        content:`
        <p>This is Aricle Three.</p>
        <p>This is Aricle Three.</p>
        `
        }
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=
    `<html>
    <head>
        <title>
            ${title}
        </title>
         <meta name="viewport" content="width=device-width , initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
        <style>
        </style>
    </head>
    
    <body>
        <div class="container">
            <div>${heading}</div>
            <div>${date}
            </div>
            <hr/>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleName', function (req, res) {
   var articleName=req.param.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
