import {
   Container,
   Typography,
   Box,
   TextField
} from "@mui/material"
import OptionInput from "./OptionInput"
import { sectionAOpts } from "@/lib/options"

export default function SectionAOptions() {
   return (
      <Container className="my-6 px-0">
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">A.</span>{" "}
            Are Permits Required? Are they
            displayed and properly signed by the
            PSC/PSA?
         </Typography>
         <Box
            sx={{
               display: "flex",
               flexDirection: {
                  xs: "column",
                  tablet: "row"
               }
            }}
            paddingX={1}
         >
            <Box
               sx={{
                  width: {
                     tablet: "48%"
                  },
                  marginLeft: {
                     tablet: 0
                  }
               }}
            >
               {sectionAOpts
                  .slice(0, 3)
                  .map((opt, idx) => {
                     return (
                        <OptionInput
                           key={idx}
                           option={opt}
                        />
                     )
                  })}
            </Box>
            <Box
               sx={{
                  width: {
                     tablet: "50%"
                  },
                  marginLeft: {
                     tablet: 0
                  }
               }}
            >
               {sectionAOpts
                  .slice(3)
                  .map((opt, idx) => {
                     return (
                        <OptionInput
                           key={idx}
                           option={opt}
                        />
                     )
                  })}
               <TextField
                  label="Other"
                  variant="standard"
                  
                  fullWidth
                  sx={{
                     "& .MuiFormLabel-root": {
                        color: "black"
                     }
                  }}
               />
            </Box>
         </Box>
      </Container>
   )
}
