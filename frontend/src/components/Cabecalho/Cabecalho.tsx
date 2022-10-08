import { CabecalhoContainer, Fundo, Logo } from "./Cabecalho.style";

const Cabecalho =() =>{
    return(
        
        <Fundo>
            <CabecalhoContainer>
                <div>                
                    <Logo src="/img/02.png" />
                </div>
                <p> 
                    BRASIL - REGIÕES BRASILEIRAS <br /> 
                     <i>Meu primeiro React</i>
                </p>
             </CabecalhoContainer>
        </Fundo>

    )
}

export default Cabecalho;