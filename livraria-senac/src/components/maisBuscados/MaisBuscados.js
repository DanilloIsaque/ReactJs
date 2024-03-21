import { useEffect, useState } from "react"
import { Centralizar, Container, ImagemLogo, Texto } from "../navbat/styles/Imagem";
import { Titulo } from "../navbat/styles/textos";


const MaisBuscados= () => { 
    //gerenciador de estados
    const [livros,setLivro] = useState([]);

    useEffect(()=>{//atualizar as coisas em tempo real
            const buscarLivros = async()=>{
                try {
                    const resposta = await fetch('http://localhost:8080/livros');
                    const dados = await resposta.json();
                    setLivro(dados);//joga dentro de livros
                } catch (error) {
                    console.error(error);
                }
            }
            buscarLivros()
    },[])

    return(
        
        <Centralizar>
            
        <>
      
        {
            livros.map((livro)=>{
                return(
                    <>
                    <Container direcao="column">
                       

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

export default MaisBuscados;