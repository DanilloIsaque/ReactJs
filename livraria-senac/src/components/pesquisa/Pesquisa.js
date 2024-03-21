import { useState } from "react"
import { Container, Texto } from "../navbat/styles/Imagem"
import { Input, Titulo } from "../navbat/styles/textos"
import Resultado from "./Resultado";

const Pesquisa = () =>{
    const [termoBusca, setTermoBusca] = useState('');
    const [livros, setLivros] = useState([]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // busco os dados na api com base no valor que é passado para o termpBusca
            const response = await fetch(`http://localhost:8080/buscarLivrosPorTitulo/${termoBusca}`)
            //converto esses dados para um formato compatível
            const data = await response.json();
            //insiro esses dados dentro da função que manipula os livros
            setLivros([data]);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Container direcao="column">
            <Titulo color="">Encontre seus livros aqui</Titulo>
            <Texto>Insira texto aqui</Texto>
            <Input
            placeholder="Digite o nome do livro"
            value={termoBusca}
            onChange={(e)=> setTermoBusca(e.target.value)}/>
            <button onClick={handleSubmit}>Pesquisar</button>
            <Resultado livros={livros}/>
        </Container>
    )
}

export default Pesquisa;