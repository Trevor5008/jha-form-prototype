"use client"
import {
   Container,
   Box,
   Button,
   Typography,
   TextField
} from "@mui/material"
import Link from "next/link"
import {
   situationElements,
   hazards
} from "@/lib/options"
import OptionInput from "../components/OptionInput"

export default function PageThree() {
   return (
      <Container>
         {/* C.2 - Hazards */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.2</span>{" "}
            Hazards
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
            {hazards.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     section={2}
                  />
               )
            })}
            <TextField
               label="Work of Others"
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
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-three">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-five">Next</Link>
            </Button>
         </Box>
      </Container>
   )
}
