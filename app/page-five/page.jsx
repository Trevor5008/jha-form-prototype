"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import OptionInput from "../components/OptionInput"
import { TextField } from "@mui/material"
import { useSelector } from "react-redux"
import { selectSituation } from "@/app/features/situations/situationsSlice"
import { selectHazards } from "@/app/features/hazards/hazardsSlice"
import { selectControls } from "@/app/features/hazard-controls/hazardControlsSlice"
import { selectPpe } from "@/app/features/ppe/ppeSlice"
import { hazardControls } from "../../lib/options"

export default function PageFour() {
   const hazards = useSelector(selectHazards)
   const controls = useSelector(selectControls)
   const ppe = useSelector(selectPpe)
   const situation = useSelector(selectSituation)

   return (
      <Container>
         {/* C.3 - Controls */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.3</span>{" "}
            Hazard Controls
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
            {hazardControls.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     section={3}
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
         {/* Navigation */}
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-four">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-six">Next</Link>
            </Button>
         </Box>
      </Container>
   )
}
