import {styled} from "@mui/material"

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(10,2,10,2)};
    
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: ${({theme}) => theme.spacing(20)};

    ${({theme}) => theme.breakpoints.down('md')}{
        grid-template-columns: 1fr;
    }

`;
export const ItemList = styled('li')`
  list-style: none;
`;
export const Photo= styled('img')`
   width: 350px;
   height:350px;
   border-radius: 20px;
   border-color: ${({theme}) => theme.palette.primary.main};
`;
export const Informations = styled('div')`
  
`;
export const Name = styled('div')`
   margin: ${({theme}) => theme.spacing(2, 0, 0, 0)} ;
   font-weight: bold;
   font-family:'quicksand';
   
`;
export const Value = styled('p')`
   margin: 0;
   font-weight:bold;
   color: ${({theme})=> theme.palette.primary.main};
`;
export const Descrition = styled('p')`
    word-break: break-word;
    text-align: justify;
    font-weight: 150;
    color: ${({theme})=> theme.palette.text.secondary};
   
`;
