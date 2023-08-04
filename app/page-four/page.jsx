"use client"
import {
   Container,
   Box,
   Button,
   Typography,
   TextField
} from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import InputAdornment from "@mui/material/InputAdornment"
import Link from "next/link"
import { hazards } from "@/lib/options"
import OptionInput from "../components/OptionInput"
import { useState } from "react"

export default function PageThree() {
   const [otherInputFlds, setOtherInputFlds] =
      useState([{ id: 1, value: "" }])
   const [
      otherInputCounter,
      setOtherInputCounter
   ] = useState(1)
   const [otherWorkFlds, setOtherWorkFlds] =
      useState([{ id: 1, value: "" }])
   const [otherWorkCounter, setOtherWorkCounter] =
      useState(1)

   const handleAddOtherWorkFlds = () => {
      const newId = otherWorkCounter + 1
      setOtherWorkCounter(newId)
      setOtherWorkFlds([
         ...otherWorkFlds,
         { id: newId, value: "" }
      ])
   }

   const handleRemoveOtherWorkFlds = (id) => {
      const updatedOtherWorkFlds =
         otherWorkFlds.filter(
            (field) => field.id !== id
         )
      setOtherWorkFlds(updatedOtherWorkFlds)
   }

   const handleAddOtherFields = () => {
      const newId = otherInputCounter + 1
      setOtherInputCounter(newId)
      setOtherInputFlds([
         ...otherInputFlds,
         { id: newId, value: "" }
      ])
   }

   const handleRemoveOtherFields = (id) => {
      const updatedOtherInputFlds =
         otherInputFlds.filter(
            (field) => field.id !== id
         )
      setOtherInputFlds(updatedOtherInputFlds)
   }

   return (
      <Container>
         {/* C.2 - Hazards */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.2</span>{" "}
            Hazards
         </Typography>
         <Box
            sx={{
               width: { tablet: "50%" },
               marginLeft: {
                  xs: 0,
                  tablet: 2,
                  md: 4
               }
            }}
         >
            {hazards.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     section={2}
                  />
               )
            })}
            {otherWorkFlds.map((el) => {
               return (
                  <TextField
                     label="Work of Others"
                     variant="standard"
                     id={`Work of Others ${el.id}`}
                     key={`Work of Others ${el.id}`}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <DeleteOutlineIcon
                                 onClick={() =>
                                    handleRemoveOtherWorkFlds(
                                       el.id
                                    )
                                 }
                              />
                           </InputAdornment>
                        )
                     }}
                     sx={{
                        fontSize: {
                           xs: 14,
                           sm: 16
                        },
                        "& .MuiFormLabel-root": {
                           color: "black",
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        },
                        paddingRight: 1,
                        width: "100%",
                        marginBottom: 2
                     }}
                     helperText="* provide details above"
                     fullWidth
                  />
               )
            })}
            <Button
               onClick={handleAddOtherWorkFlds}
            >
               Add Work
            </Button>
            {otherInputFlds.map((el) => {
               return (
                  <TextField
                     label="Other Hazard"
                     variant="standard"
                     id={`Other Hazard ${el.id}`}
                     key={`Other Hazard ${el.id}`}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <DeleteOutlineIcon
                                 onClick={() =>
                                    handleRemoveOtherFields(
                                       el.id
                                    )
                                 }
                              />
                           </InputAdornment>
                        )
                     }}
                     sx={{
                        fontSize: {
                           xs: 14,
                           sm: 16
                        },
                        "& .MuiFormLabel-root": {
                           color: "black",
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        },
                        paddingRight: 1,
                        width: "100%",
                        marginBottom: 2
                     }}
                     helperText="* provide details above"
                     fullWidth
                  />
               )
            })}
            <Button
               onClick={handleAddOtherFields}
            >
               Add Hazard
            </Button>
         </Box>
         {/* Navigation */}
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-three">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-five">Next</Link>
            </Button>
         </Box>
      </Container>
   )
}
