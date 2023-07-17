"use client"
import Header from "./components/Header"
import PageOne from "./components/PageOne"
import Link from "next/link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export default function Home() {
   return (
      <>
         <Header />
         <PageOne />
         <Box
            display="flex"
            justifyContent="center"
         >
            <Button variant="standard">
               <Link href="/page-two">Next</Link>
            </Button>
         </Box>
      </>
   )
}
