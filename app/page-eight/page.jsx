"use client"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import { TextField } from "@mui/material"
import { emergencyResponse } from "@/lib/options"
import { selectResponses } from "../features/emergency-response/emergencyResponseSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addResponse, removeResponse } from '../features/emergency-response/emergencyResponseSlice'

export default function PageFour() {
   const dispatch = useDispatch()
   const responses = useSelector(selectResponses)

   function handleInputFieldChange(e, task) {
      dispatch(addResponse({ key: task, value: e.target.value }))
   }
   return (
      <Container>
         {/* Section E - Emergency Response */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">E.</span>{" "}
            Emergency Response
         </Typography>
         <Box marginLeft={2}>
               {emergencyResponse.map((task) => {
                  return (
                     <TextField
                        label={task}
                        variant="standard"
                        fullWidth
                        type="text"
                        onChange={(e) => handleInputFieldChange(e, task)}
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
               <Typography variant="h3" marginTop={2}>Report Emergencies To?</Typography>
               <TextField
                  label="Name & Number"
                  variant="standard"
                  fullWidth
                  sx={{
                     "& .MuiFormLabel-root":
                        {
                           color: "black",
                           paddingLeft: 2,
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        },
                     paddingRight: 1,
                     paddingLeft: 2,
                     marginBottom: 1
                  }}
               />
               <TextField
                  label="Name & Number"
                  variant="standard"
                  fullWidth
                  sx={{
                     "& .MuiFormLabel-root":
                        {
                           color: "black",
                           paddingLeft: 2,
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        },
                     paddingRight: 1,
                     paddingLeft: 2,
                     marginBottom: 1
                  }}
               />
               <ul>
                  {emergencyResponse.map((item) => {
                     return <li>{responses[item]}</li>
                  })}
               </ul>
            </Box>
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-seven">
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
