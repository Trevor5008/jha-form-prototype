"use client"
import {
   Container,
   Box,
   Typography
} from "@mui/material"
import OptionInput from "./OptionInput"
import { situationElements } from "@/lib/options"

export default function SelectCOptions() {
   return (
      <Container className="mt-4 px-0">
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
               about the work you and your crews
               will be doing today.
         </Typography>
         <Typography
               variant="body1"
               marginLeft={2}
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
               * All elements identified with a
               Yes must be addressed in Section D
            </Typography>
            <Box
               sx={{
                  width: { tablet: "50%" },
                  marginLeft: { tablet: 2, md: 4 }
               }}
            >
               {situationElements.map(
                  (opt, idx) => {
                     return (
                        <OptionInput
                           key={idx}
                           option={opt}
                        />
                     )
                  }
               )}
            </Box>
      </Container>
   )
}
