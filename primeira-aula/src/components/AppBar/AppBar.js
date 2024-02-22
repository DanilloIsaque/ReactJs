import { Button, Toolbar, Typography } from "@mui/material";
import './AppBar.css'; 

function AppBar(){
    return(
        <>
        <Toolbar className="toolBar">
            <Typography variant="h6" className="logo" >
            <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" id="logo" alt="Logo" />
            </Typography>
            <div className="navLinks">
                <Typography className="link" href="" >Entregador</Typography>
                <Typography className="link" href="" >Restaurante e mercado</Typography>
                <Typography className="link" href="" >Carreiras</Typography>
                <Typography className="link" href="" >Ifood card</Typography>
            </div>
            <div className="navLinks">
                <Typography href="">criar conta</Typography>
                <Button className="btn_red">Botão</Button>
            </div>
        </Toolbar>
           
        </>
    );
}
export default AppBar;