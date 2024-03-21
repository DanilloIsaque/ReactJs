import styled from "styled-components";
//Nossos componentes de estilos para os textos (titulo,subtitulo,texto..)


//criar um componente
export const Titulo = styled.h1` //só posso yusar ele em outro arquivo se exportar
    font-size:${props=>props.tamanho || '32px'}; // se n for informado, será 32 px
    color:${props=>props.cor || 'black'};
    line-weight:1.5rem;
        
`;
export const Input = styled.input`
    width: 600px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 1px;
    background-color:#fff;
`;



//props passar valor pro meu componente