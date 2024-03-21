import { useEffect, useState } from "react"
import { Centralizar, Container, ImagemLogo, Texto } from "../navbat/styles/Imagem";
import { Titulo } from "../navbat/styles/textos";

const Resultado  = ({livros}) => {
    if(livros.lenght === 0){
        return <p>Não existe livro correspondente para essa pesquisa</p>
    }
    return(
        <Centralizar>
        <>
        {
            livros.map((livro)=>{
                return(
                    <>
                    <Container direcao="column">
                        <Titulo>{livro.titulo}</Titulo>
                        <ImagemLogo src={livro.imagem} />
                        <Texto> {livro.preco}</Texto>
                        </Container>
                 
                    
                    </>
                    
                )
            })
        }
        </>
        </Centralizar>
        
    )
}

export default Resultado;