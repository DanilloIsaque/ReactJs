//chamando o pacote que eu instalei para do meu arquivo para poder usá-lo

const express = require('express');

//crio um objeto app para receber todas as funcoes do express

const app= express();
const livrosImportados =  require('./services/livroServices')       

app.get('/minhaRota', (req, res)=>{
    
    res.status(200).json([{
        "titulo":"Harry Potter",
        "author":"Joao"
    },
    {
        "titulo":"Harry Potter",
        "author":"Joao"
    }
])

});

app.get('/livros',(req, res)=>{

res.status(200).json(livrosImportados.buscarLivros());

});

app.listen(8080);