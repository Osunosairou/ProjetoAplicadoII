const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const PORT = 4000;
const APPLICANTS_FILE = __dirname + '/output/applicants.json';
const JOBS_FILE = __dirname + '/output/jobs.json';
const cors = require('cors')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// === Aplicantes ===

// GET pra pegar o JSON dos aplicantes
app.get('/aplicantes', (req, res) => {
    res.status(200).sendFile(APPLICANTS_FILE)
})

// POST pra cadastrar aplicante no JSON
app.post('/cadastrar/aplicante', (req, res) => {
    fs.readFile(APPLICANTS_FILE, 'utf8', (_, data) => {
        const newData = JSON.parse(data);
        newData.push(req.body);

        fs.writeFile(APPLICANTS_FILE, JSON.stringify(newData), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                res.send(err) ;
            }else{
                res.send("JSON file has been saved.");
            }
        });
    });
})

// === Vagas ===

// GET pra pegar o JSON das vagas

app.get('/vagas', (req, res) => {
    res.status(200).sendFile(JOBS_FILE)
})

app.post('/cadastrar/vaga', (req, res) => {
    fs.readFile(JOBS_FILE, 'utf8', (_, data) => {
        const newData = JSON.parse(data);
        newData.push(req.body);

        fs.writeFile(JOBS_FILE, JSON.stringify(newData), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                res.send(err) ;
            }else{
                res.send("JSON file has been saved.");
            }
        });
    });
})

// === Login ===

// POST pra login no site
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === '123') {
        res.send('Login as admin successful');
    } else if(username === 'user' && password === '123'){
        res.send('Login as user successful');
    } else {
        res.status(400).send('Login failed');
    }
})
    
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


