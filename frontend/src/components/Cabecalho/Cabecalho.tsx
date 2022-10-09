import { CabecalhoContainer, Fundo, Logo } from "./Cabecalho.style";

const Cabecalho =() =>{
    return(      
        
        <Fundo >
            <CabecalhoContainer>
                <div>
                    <Logo src="/img/02.png" />
                </div>
            </CabecalhoContainer>

        </Fundo>


    )
}

export default Cabecalho;