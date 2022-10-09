import { Button, listClasses } from "@mui/material";
import { Descrition, Informations, ItemList, ListStyled, Name, Photo, Value } from "./Lista.style";
import {regioesBr} from "../../mock/list";

const Lista = () => {
    return( 
        <ListStyled>
            {regioesBr && regioesBr.map( item => (
                <ItemList>
                    <Photo src="/img/NordesteBrasil.jpg"></Photo>
                    <Informations>
                        <Name>{item.name}</Name>
                        <Value>{item.value}</Value>
                        <Descrition>{item.description}</Descrition>
                        <Button sx={{width:'70%'}}> {item.button}</Button>
                    </Informations>
                </ItemList>
            ))}
        </ListStyled>


    

    
    )
}

export default Lista;