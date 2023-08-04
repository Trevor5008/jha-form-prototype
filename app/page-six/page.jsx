"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import OptionInput from "../components/OptionInput"
import { TextField } from "@mui/material"
import { properPpe } from "@/lib/options"

export default function PageFour() {

   return (
      <Container>
         {/* C.4 - PPE */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.4</span>{" "}
            Proper PPE
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
            {properPpe.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     section={4}
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
         {/* Navigation */}
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-five">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-seven">
                  Next
               </Link>
            </Button>
         </Box>
      </Container>
   )
}
