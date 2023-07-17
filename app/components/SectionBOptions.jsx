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
                        sx={{
                           marginLeft: 1,
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        }}
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
                           section={0}
                        />
                        {/* Last option exclude reading field */}
                        {idx !== 3 && (
                           <TextField
                              label="Reading"
                              variant="standard"
                              sx={{
                                 fontSize: {
                                    xs: 14,
                                    sm: 16
                                 },
                                 "& .MuiFormLabel-root":
                                    {
                                       color: "black",
                                       fontSize: {
                                          xs: 14,
                                          sm: 16
                                       }
                                    },
                                 paddingRight: 1
                              }}
                           />
                        )}
                     </Box>
                  </Box>
               )
            })}
         </Box>
      </Container>
   )
}
