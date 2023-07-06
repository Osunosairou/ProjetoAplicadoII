const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// === Aplicantes ===

// GET pra pegar o JSON dos aplicantes
app.get('/aplicantes', (req, res) => {
    res.status(200).sendFile(__dirname +  '/output/applicants.json')
})

// POST pra cadastrar aplicante no JSON
app.post('/cadastrar/aplicante', (req, res) => {
    // let jsonData = req.body;
    // let jsonObj = JSON.parse(jsonData);
    // let jsonContent = JSON.stringify(jsonObj);
    // res.send(console.log(jsonContent));

    fs.writeFile(__dirname + '/output/applicants.json', req.body, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            res.send(console.log(err)) ;
        }else{
            res.send(console.log("JSON file has been saved."));
        }
     
        
    });
    
})

// === Vagas ===

// GET pra pegar o JSON das vagas

app.get('/vagas', (req, res) => {
    res.status(200).sendFile(__dirname +  '/output/jobs.json')
})

app.post('/cadastrar/vaga', (req, res) => {
    let jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
    let jsonObj = JSON.parse(jsonData);
    let jsonContent = JSON.stringify(jsonObj);

    fs.writeFile(__dirname + '/output/jobs.json', jsonContent, 'utf8', function (err) {
        res.send('asdfsdgdfs');
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            res.send(console.log(err)) ;
        }else{
            console.log("JSON file has been saved.");
        }
     
        
    });
    
})

// === Login ===

// POST pra login no site
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === 'admin') {
        res.send('Login as admin successful');
    }
    else if(username === 'user' && password === 'user'){
        res.send('Login as user successful');
    }
    else {
        res.send('Login failed');
    }
})
    
    
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


