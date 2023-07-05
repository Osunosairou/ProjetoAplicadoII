const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    const obj = {
        name: "tel",
        surname: "nichol"
    }
    res.send(JSON.stringify(obj))
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})



// app.get('/curriculos', (req, res) => {
//     res.status(200).send('pageJsons/TelaCurriculos.json');
// });