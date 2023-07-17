"use client"
import SectionCOptions from "../../components/SectionCOptions"
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
               <Link href="/page-three">
                  Next
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
