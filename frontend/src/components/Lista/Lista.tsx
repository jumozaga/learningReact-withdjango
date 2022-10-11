import { Button, listClasses, useThemeProps } from "@mui/material";
import { Descrition, EmpytList, Informations, ItemList, ListStyled, Name, Photo, Value } from "./Lista.style";
//import {regioesBr} from "../../mock/list";
import { Regiao } from "../../@types/regioes";

interface ListaProps{
    regioes:Regiao[],
}
const Lista = (props:ListaProps) => {
    return( 
    <div>
       {props.regioes.length > 0 ?
       (
            <ListStyled>
             {props.regioes.map( item => (
                 <ItemList key={item.id}>
                     <Photo src={item.photo}></Photo>
                     <Informations>
                         <Name>{item.name}</Name>
                         <Value>{item.value}</Value>
                         <Descrition>{item.description}</Descrition>
                         <Button sx={{width:'70%'}}> Saber Mais !</Button>
                     </Informations>
                 </ItemList>
             ))}
            </ListStyled>  

       ) :( <EmpytList> Desculpe, nada foi encontrado</EmpytList>)}
    </div>     

    )
}

export default Lista;