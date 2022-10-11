import { createTheme } from '@mui/material';

const tema = createTheme({
    palette: {
        primary: {
            main: '#006A4E',
        },
        secondary: {
            main: '#7ff8a3d1',
        },
        text: {
            primary: '#002D62',
            secondary: '#002D62',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '0',
                    backgroundColor: '#006A4E',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#00A877',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default tema;