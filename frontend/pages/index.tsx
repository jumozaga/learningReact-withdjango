import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'
import { regioes } from '../src/mock/regioes'


const Home: NextPage = () => {
  const {listRegioes} = useIndex();
  
  return (
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <Lista regioes={listRegioes}></Lista>
      </Box>
    
  )
}

export default Home
