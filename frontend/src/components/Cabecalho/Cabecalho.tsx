import { CabecalhoContainer, Fundo, Logo } from "./Cabecalho.style";

const Cabecalho =() =>{
    return(      
        
        <Fundo >
            <CabecalhoContainer>
                <div>
                    <Logo src="/img/02.png" />
                </div>
            </CabecalhoContainer>
            <p>
                <h3><em>BRASIL REGIÕES BRASILEIRAS </em> <br />
                <i>Meu primeiro React</i></h3>
            </p>
        </Fundo>


    )
}

export default Cabecalho;