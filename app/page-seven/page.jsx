"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import { TextField } from "@mui/material"
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
            <Typography variant="h2" fontWeight='bold' marginTop={2} marginBottom={1}>
               Situtation/Task
            </Typography>
            <Box marginLeft={2}>
               {situation.map((task) => {
                  return (
                     <TextField
                        label={task}
                        variant="standard"
                        fullWidth
                        sx={{
                           "& .MuiFormLabel-root":
                              {
                                 color: "black",
                                 fontSize: {
                                    xs: 14,
                                    sm: 16
                                 }
                              },
                           paddingRight: 1,
                           marginBottom: 1
                        }}
                     />
                  )
               })}
            </Box>
         </Box>
         <Box>
            <Typography variant="h2" fontWeight='bold' marginTop={2} marginBottom={1}>
               Hazards
            </Typography>
            <Box marginLeft={2}>
               {hazards.map((hazard) => {
                  return (
                     <TextField
                        label={hazard}
                        variant="standard"
                        fullWidth
                        sx={{
                           "& .MuiFormLabel-root":
                              {
                                 color: "black",
                                 fontSize: {
                                    xs: 14,
                                    sm: 16
                                 }
                              },
                           paddingRight: 1,
                           marginBottom: 1
                        }}
                     />
                  )
               })}
            </Box>
         </Box>
         <Box>
            <Typography variant="h2" fontWeight='bold' marginTop={2} marginBottom={1}>
               Hazard Controls
            </Typography>
            <Box marginLeft={2}>
               {controls.map((control) => {
                  return (
                     <TextField
                        label={control}
                        variant="standard"
                        fullWidth
                        sx={{
                           "& .MuiFormLabel-root":
                              {
                                 color: "black",
                                 fontSize: {
                                    xs: 14,
                                    sm: 16
                                 }
                              },
                           paddingRight: 1,
                           marginBottom: 1
                        }}
                     />
                  )
               })}
            </Box>
         </Box>
         <Box>
            <Typography variant="h2" fontWeight='bold' marginTop={2} marginBottom={1}>
               PPE
            </Typography>
            <Box marginLeft={2}>
               {ppe.map((item) => {
                  return (
                     <TextField
                        label={item}
                        variant="standard"
                        fullWidth
                        sx={{
                           "& .MuiFormLabel-root":
                              {
                                 color: "black",
                                 fontSize: {
                                    xs: 14,
                                    sm: 16
                                 }
                              },
                           paddingRight: 1,
                           marginBottom: 1
                        }}
                     />
                  )
               })}
            </Box>
         </Box>
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-six">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-eight">
                  Next
               </Link>
            </Button>
         </Box>
      </Container>
   )
}
