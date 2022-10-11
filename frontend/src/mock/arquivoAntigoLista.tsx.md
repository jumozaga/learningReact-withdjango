   import {regioesBr} from "../../mock/list";     
        
           <ListStyled>
             {regioesBr && regioesBr.map( item => (
                 <ItemList key={item.photo}>
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