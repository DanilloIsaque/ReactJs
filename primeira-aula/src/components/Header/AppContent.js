import './AppContent.css'; 
import { Button, Input, Typography } from "@mui/material";
function AppContent(){
    return(
        <>
      
            <Typography variant="h6" className="logo" >
            <div id="content"> 
             <div class='divMargin'>
                    <h1 class="centro" >Faça mercado no iFood</h1>
                    <p class="centro">Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
                    <div class="centro"> 
                    <Input type='text' placeholder='Em qual endereço você está?' className='input'></Input>
                    <Button  className='btn_red'>Ver mercados próximos</Button>
                    </div>
                    <div class="centroBtn"> 
                    <Button className='btn2'>Frios</Button>
                    <Button className='btn2'>Latícinios</Button>
                    <Button className='btn2'>Feira</Button>
                    <Button className='btn2'>Bebidas</Button>
                    <Button className='btn2'>Doces</Button>
                    <Button className='btn2'>Massas Frescas</Button>
                    <Button className='btn2'>Limpeza</Button>
                    </div>
                    <div class="centroBtn">
                    <Button className='btn2'>Padaria</Button>
                    <Button className='btn2'>Higiene</Button>
                    <Button className='btn2'>Congelados</Button>
                    <Button className='btn2'>Carnes</Button>
                    <Button className='btn2'>Cervejas</Button>
                    </div>
                </div>
            </div>
            <div className='container'>
          
            <div className='card'>
                <h3 className='tituloCard'>Restaurante</h3>
                <div className='divBotao'>
                <Button className='tituloButton' >Ver Opções   </Button>
                <img src="./assets/hamburguer.png" className='imagem'/>
                </div>
          </div>
            <div className='card2'>
            <h3 className='tituloCard'>Mercado</h3>
                <div className='divBotao'>
                <Button className='tituloButton2'>Ver Lojas  </Button>
                <img src="./assets/carrinho.png" className='imagem'/>
                </div>
             </div>
            </div>
            </Typography>
        
        </>
    );
}
export default AppContent;