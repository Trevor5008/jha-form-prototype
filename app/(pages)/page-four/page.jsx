"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Link from "next/link"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function PageFour() {
    const searchParams = useSearchParams()

    useEffect(() => {
        for (let el of searchParams.values()) {
            console.log(el)
        }
    }, [])

   return (
      <Container>
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
