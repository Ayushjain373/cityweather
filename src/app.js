const express = require('express');// yha se ek function mil rha hai
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');


 const homePath = path.join(__dirname,"../public");

const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
app.set('views',template_path)
app.set('view engine', 'hbs');

app.use(express.static(homePath))
hbs.registerPartials(partial_path);

app.get('/',(req,res)=>{

    res.render('index')
})

app.get('/about',(req,res)=>{

    res.render('about')
})
app.get('/weather',(req,res)=>{

    res.render('weather')
})

app.get('*',(req,res)=>{

    res.render('404error',{

        errormsg:'OOPS! Page Note Found 🤯'
    });
})
app.get('/about/*',(req,res)=>{

    res.render('404error',{

        errormsg:'OOPS! Page Note Found 🤯'
    });
})
app.get('/weather/*',(req,res)=>{

    res.render('404error',{

        errormsg:'OOPS! Page Note Found 🤯'
    });
})


app.listen(port,(err)=>{

    console.log(err)

    console.log(`listening to the port ${port}`);
})