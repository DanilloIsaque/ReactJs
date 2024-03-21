const cors = require('cors');

//chamando o pacote que eu instalei para do meu arquivo para poder usá-lo

const express = require('express');

//crio um objeto app para receber todas as funcoes do express

const app= express();
const livrosImportados =  require('./services/livroServices')     


app.use(cors());

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

app.get('/buscarLivrosPorTitulo/:titulo',(req,res)=>{
    //extrair o titulo que pe enviado da url pelo cliente
    const {titulo} = req.params;
    //chamo a função do serviço e peasso o titulo
    const resultado = livrosImportados.buscarPorTitulo(titulo);
if(resultado){
    res.status(200).send(resultado);
}else{
    res.status(400).send('Recurso não encontrado');
}
    
});

app.listen(8080);