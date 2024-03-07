//biblioteca para ler arquivos
const fs = require('fs');

//crio uma constante que recebe
const meuLivros = fs.readFileSync('livros.json','utf-8');




//criamos uma funcao que retorna os livros contidos na constante meuLivros
//e exporto para que ela fique disponível no projeto
exports.buscarLivros = () => {
    return JSON.parse(meuLivros);

}