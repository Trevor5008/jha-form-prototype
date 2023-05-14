"use client"
import {
   Container,
   Box,
   Typography,
   TextField
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
            display="flex flex-column"
            paddingX={1}
         >
            {sectionBOpts.map((option, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={option}
                     column={2}
                  />
               )
            })}
            <TextField
               // id={`${option} reading`}
               label="Reading"
               variant="standard"
               className="w-[30%]"
               // sx={{
               //    visibility:
               //       option ===
               //       "Are concentration levels safe?"
               //          ? "hidden"
               //          : "",
               //    "& .MuiFormLabel-root": {
               //       color: "black"
               //    }
               // }}
            />
         </Box>
      </Container>
   )
}
