import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
   typography: {
      h1: {
         fontSize: 30,
         lineHeight: '45px',
         '@media (minWidth: 750px)': {
            fontSize: 40,
            lineHeight: '60px'
         }
      },
      h2: {
         fontSize: 20,
         '@media (minWidth: 750px)': {
            fontSize: 30
         }
      },
      h3: {
         fontSize: 14,
         '@media (minWidth: 750px)': {
            fontSize: 20
         }
      },
      h4: {
        fontSize: 17
      },
      body1: {
         textAlign: 'center'
      }
   }
})
