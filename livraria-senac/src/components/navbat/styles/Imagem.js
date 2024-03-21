import styled from "styled-components";

export const ImagemLogo = styled.img`
    width:400px;
    height:200px;
    background-size:cover;
  
`;

export const Centralizar = styled.div`
display:flex;
    gap:24px;
`;

export const Container = styled.div`
display:flex;
flex-direction:${props => props.direcao || 'row'};
align-itens:center;

`;

export const Texto = styled.p`
    font-size:${props => props.tamanho || '32px'}
    color:${props => props.cor || 'white'}
    line-weight:400;
    line-height:1.5rem;
`;

