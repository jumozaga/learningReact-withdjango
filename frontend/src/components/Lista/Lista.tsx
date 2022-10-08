import { Button } from "@mui/material";
import { Descrition, Informations, ItemList, ListStyled, Name, Photo, Value } from "./Lista.style";

const Lista = () => {
    return(
    <ListStyled>
        <ItemList>            
            <Photo src="/img/NorteBrasil.jpg"></Photo>
            <Informations>
                <Name>REGIÃO NORTE DO BRASIL</Name>
                <Value>População: 17,71 milhões</Value>
                <Descrition>Região Norte é uma das cinco regiões do Brasil. É a região mais extensa do país, com uma área de 1.797.000 km², correspondendo a 23,3% do território nacional. É a região menos densamente povoada, com uma população de 17,71 milhões de habitantes, o que corresponde a 8,6% da população brasileira. A região Norte é formada pelos estados do Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins.</Descrition>
                <Button sx={{width:'70%'}}> Saber Mais</Button>
            </Informations>               
        </ItemList>
              
        <ItemList>
                <Photo src="/img/NordesteBrasil.jpg"></Photo>
                <Informations>
                    <Name>REGIÃO NORDESTE DO BRASIL</Name>
                    <Value>População de 53 milhões</Value>
                    <Descrition>Região Nordeste é uma das cinco regiões do Brasil. É a segunda região mais extensa do país, com uma área de 1.570.000 km², correspondendo a 20,5% do território nacional. É a segunda região mais densamente povoada, com uma população de 53 milhões de habitantes, o que corresponde a 25,5% da população brasileira. A região Nordeste é formada pelos estados do Alagoas, Bahia, Ceará, Maranhão, Paraíba, Pernambuco, Piauí, Rio Grande do Norte e Sergipe.</Descrition>
                    <Button sx={{width:'70%'}}> Saber Mais</Button>
                </Informations>
        </ItemList>  

      
        <ItemList>
                <Photo src="/img/CentroOesteBrasil.jpg"></Photo>
                <Informations>
                    <Name>REGIÃO CENTRO-OESTE DO BRASIL</Name>
                    <Value>População de 22,6 milhões</Value>
                    <Descrition>Região Centro-Oeste é uma das cinco regiões do Brasil. É a terceira região mais extensa do país, com uma área de 2.700.000 km², correspondendo a 35,5% do território nacional. É a terceira região mais densamente povoada, com uma população de 22,6 milhões de habitantes, o que corresponde a 10,7% da população brasileira. A região Centro-Oeste é formada pelos estados do Distrito Federal, Goiás, Mato Grosso e Mato Grosso do Sul.</Descrition>
                    <Button sx={{width:'70%'}}> Saber Mais</Button>
                </Informations>
        </ItemList>
     
        <ItemList>
                <Photo src="/img/SudesteBrasil.jpg"></Photo>
                <Informations>
                    <Name>REGIÃO SUDESTE DO BRASIL</Name>
                    <Value>População de 71,5 milhões</Value>
                    <Descrition>Região Sudeste é uma das cinco regiões do Brasil. É a quarta região mais extensa do país, com uma área de 2.100.000 km², correspondendo a 27,7% do território nacional. É a quarta região mais densamente povoada, com uma população de 71,5 milhões de habitantes, o que corresponde a 33,8% da população brasileira. A região Sudeste é formada pelos estados do Espírito Santo, Minas Gerais, Rio de Janeiro e São Paulo.</Descrition>
                    <Button sx={{width:'70%'}}> Saber Mais</Button>
                </Informations>
        </ItemList>  
       
        <ItemList>
                <Photo src="/img/SulBrasil.jpg"></Photo>
                <Informations>
                    <Name>REGIÃO SUL DO BRASIL</Name>
                    <Value>População de 30,5 milhões</Value>
                    <Descrition>Região Sul é uma das cinco regiões do Brasil. É a quinta região mais extensa do país, com uma área de 1.200.000 km², correspondendo a 15,8% do território nacional. É a quinta região mais densamente povoada, com uma população de 30,5 milhões de habitantes, o que corresponde a 14,4% da população brasileira. A região Sul é formada pelos estados do Paraná, Santa Catarina e Rio Grande do Sul.</Descrition>
                    <Button sx={{width:'70%'}}> Saber Mais</Button>
                </Informations>
        </ItemList>

    </ListStyled>
    
    )
}

export default Lista;