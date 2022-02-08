const express = require('express');
const bodyparser = require('body-parser');

const app = new express();
//const faker = require('faker');

app.use(bodyparser());

app.get('/:cpf', (req, res) => {
    const {cpf} = req.params;
    res.status(200).json({
        cpf,
        nome: "Marcelo 1",
        datadeNascimento: "1974-05-28 20:00:00"
    })
})

app.listen(8082, () => console.log('API CPF rodando.'))