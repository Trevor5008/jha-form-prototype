"use client"
import {
   Container,
   Box,
   Typography,
   TextField
} from "@mui/material"
import OptionInput from "./OptionInput"
import { situationElements } from "@/lib/options"

export default function SelectCOptions() {
   return (
      <Container className="mt-4 px-0">
         {/* C.1 */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">
               C.1{" "}
            </span>
            <span className="font-bold">
               THINK{" "}
            </span>
            about the work you and your crews will
            be doing today.
         </Typography>
         <Typography
            variant="body1"
            marginLeft={1}
         >
            Select{" "}
            <span className="font-bold">
               Yes/No
            </span>{" "}
            for each element
         </Typography>
         <Typography
            variant="body2"
            marginLeft={2}
         >
            * All elements identified with a Yes
            must be addressed in Section D
         </Typography>
         <Box
            sx={{
               width: { tablet: "50%" },
               marginLeft: {
                  xs: 0,
                  tablet: 2,
                  md: 4
               }
            }}
         >
            {situationElements.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                  />
               )
            })}
            <TextField
               label="Other"
               variant="standard"
               sx={{
                  fontSize: {
                     xs: 14,
                     sm: 16
                  },
                  "& .MuiFormLabel-root": {
                     color: "black",
                     fontSize: {
                        xs: 14,
                        sm: 16
                     }
                  },
                  paddingRight: 1,
                  width: "100%",
                  marginBottom: 2
               }}
               helperText="* provide details above"
            />
         </Box>
         {/* C.2 */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.2</span>{" "}
            Hazards
         </Typography>
      </Container>
   )
}
