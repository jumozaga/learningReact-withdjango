import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'
import { regioes } from '../src/mock/regioes'


const Home: NextPage = () => {
  
  return (
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <Lista regioes={regioes}></Lista>
      </Box>
    
  )
}

export default Home
