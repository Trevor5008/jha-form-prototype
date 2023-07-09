"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import { useSelector } from "react-redux"
import { selectSituation } from "@/app/features/situations/situationsSlice"
import { selectHazards } from "@/app/features/hazards/hazardsSlice"
import { selectControls } from "@/app/features/hazard-controls/hazardControlsSlice"
import { selectPpe } from "@/app/features/ppe/ppeSlice"

export default function PageFour() {
   const hazards = useSelector(selectHazards)
   const controls = useSelector(selectControls)
   const ppe = useSelector(selectPpe)
   const situation = useSelector(selectSituation)

   return (
      <Container>
         <Box>
            <Typography variant="h2">
               Situtation/Task
            </Typography>
            <Box marginLeft={1}>
               <ul>
                  {situation.map((task) => {
                     return <li>{task}</li>
                  })}
               </ul>
            </Box>
         </Box>
         <Box>
            <Typography variant="h2">
               Hazards
            </Typography>
            <Box marginLeft={1}>
               <ul>
                  {hazards.map((hazard) => {
                     return <li>{hazard}</li>
                  })}
               </ul>
            </Box>
         </Box>
         <Box>
            <Typography variant="h2">
               Hazard Controls
            </Typography>
            <Box marginLeft={1}>
               <ul>
                  {controls.map((control) => {
                     return <li>{control}</li>
                  })}
               </ul>
            </Box>
         </Box>
         <Box>
            <Typography variant="h2">
               PPE
            </Typography>
            <Box marginLeft={1}>
               <ul>
                  {ppe.map((item) => {
                     return <li>{item}</li>
                  })}
               </ul>
            </Box>
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
         </Box>
         <Box
            display="flex"
            justifyContent="center"
            paddingY={1}
         >
            <Button
               variant="outlined"
               type="submit"
               sx={{
                  width: "100%",
                  color: "black",
                  borderColor: "black"
               }}
            >
               Submit
            </Button>
         </Box>
      </Container>
   )
}
