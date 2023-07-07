"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { selectHazards } from "@/app/features/hazards/hazardsSlice"

export default function PageFour() {
    const hazards = useSelector(selectHazards)
      console.log(hazards)
   return (
      <Container>
         <Box>
            <ul>
               {hazards.map(hazard => {
                  return (
                     <li>{hazard}</li>
                  )
               })}
            </ul>
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
