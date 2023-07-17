"use client"
import SectionAOptions from "../components/SectionAOptions"
import SectionBOptions from "../components/SectionBOptions"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Link from "next/link"

export default function PageTwo() {
   return (
      <Container>
         <SectionAOptions />
         <SectionBOptions />
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-one">Previous</Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-three">Next</Link>
            </Button>
         </Box>
      </Container>
   )
}