import { useEffect, useState } from "react"

const mulher = {};

const MaisBuscados=()=>{
    //gerenciador de estados
    const [livros,setLivro] = useState([]);

    useEffect(()=>{//atualizar as coisas em tempo real
            const buscarLivros = async()=>{
                try {
                    const resposta =fetch('http://localhost:8080/livros');
                    const dados = await resposta.json();
                    setLivro(dados);//joga dentro de livros
                } catch (error) {
                    console.error(error);
                }
            }
    },[])

    return(
        <>
        </>
        
    )
}