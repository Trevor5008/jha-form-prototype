"use client"
import {
   Container,
   Box,
   Typography,
   TextField,
   FormLabel
} from "@mui/material"
import OptionInput from "./OptionInput"
import { sectionBOpts } from "@/lib/options"

export default function SelectBOptions() {
   return (
      <Container className="mt-4 px-0">
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">B.</span>{" "}
            Atmospheric Monitoring
         </Typography>
         <Box
            sx={{
               display: "flex",
               flexDirection: {
                  xs: "column",
                  tablet: "row"
               },
               paddingX: {
                  sm: 1
               }
            }}
         >
            {sectionBOpts.map((option, idx) => {
               return (
                  <Box
                     display="flex"
                     sx={{
                        flexDirection: "column"
                     }}
                  >
                     <FormLabel
                        className="text-black"
                        sx={{ marginLeft: 1 }}
                     >
                        {option}
                     </FormLabel>
                     <Box
                        display="flex"
                        sx={{
                           flexDirection: "row",
                           alignItems: "baseline"
                        }}
                     >
                        <OptionInput
                           key={idx}
                           option={option}
                           hasLabel={false}
                        />
                        <TextField
                           label="Reading"
                           variant="standard"
                           sx={{
                              "& .MuiFormLabel-root":
                                 {
                                    color: "black"
                                 },
                                 paddingRight: 1
                           }}
                        />
                     </Box>
                  </Box>
               )
            })}
         </Box>
      </Container>
   )
}
