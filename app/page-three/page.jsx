"use client"
import SectionCOptions from "../components/SectionCOptions"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Link from "next/link"

export default function PageThree() {
   return (
      <Container>
         <SectionCOptions />
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-two">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-four">
                  Next
               </Link>
            </Button>
         </Box>
      </Container>
   )
}
