"use client"
import SectionCOptions from "../../components/SectionCOptions"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Link from "next/link"
import { useState } from "react"

export default function PageThree() {
   const [selections, setSelections] = useState(
      []
   )

   const handleOptionsChange = (options) => {
      const updatedSelections = options
      setSelections(updatedSelections)
   }

   return (
      <Container>
         <SectionCOptions
            onOptionsChange={handleOptionsChange}
            selections={selections}
         />
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
               <Link
                  href={{
                     pathname: "/page-four",
                     query: {
                        data: selections
                     }
                  }}
               >
                  Next
               </Link>
            </Button>
         </Box>
      </Container>
   )
}
