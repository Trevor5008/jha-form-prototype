"use client"
import { useState } from "react"
import {
   Container,
   Box,
   Button,
   Typography,
   TextField,
   InputAdornment
} from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import Link from "next/link"
import { hazards } from "@/lib/options"
import OptionInput from "../components/OptionInput"

export default function PageFour() {
   // "other work" fields
   const [otherWorkFlds, setOtherWorkFlds] =
      useState([
         { id: "Other Trades 1", value: "" }
      ])
   const [otherWorkCounter, setOtherWorkCounter] =
      useState(1)

   // "other hazards" fields
   const [otherHazardFlds, setOtherHazardFlds] =
      useState([
         { id: "Other Hazards 1", value: "" }
      ])
   const [
      otherHazardCounter,
      setOtherHazardCounter
   ] = useState(1)

   // Adds new "other work" field
   const handleAddOtherWorkFld = () => {
      const allValues = otherWorkFlds.every(
         (el) => el.value !== ""
      )
      if (allValues) {
         const counter = otherWorkCounter + 1
         setOtherWorkCounter(counter)
         setOtherWorkFlds([
            ...otherWorkFlds,
            {
               id: `Other Trades ${counter}`,
               value: ""
            }
         ])
      }
   }

   // Removes "other work" field by id
   const handleRemoveOtherWorkFld = (id) => {
      const updatedOtherWorkFlds =
         otherWorkFlds.filter(
            (field) => field.id !== id
         )
      setOtherWorkFlds(updatedOtherWorkFlds)
   }

   // Adds "other work" value to assc. id
   const addOtherWork = (evt, id) => {
      const updatedOtherWork = otherWorkFlds.map(
         (el) => {
            if (el.id === id) {
               el.value = evt.target.value
            }
            return el
         }
      )
      setOtherWorkFlds(updatedOtherWork)
   }

   // Adds new "other hazard" field
   const handleAddOtherHazardFld = () => {
      const allValues = otherHazardFlds.every(
         (el) => el.value !== ""
      )
      if (allValues) {
         const counter = otherHazardCounter + 1
         setOtherHazardFlds([
            ...otherHazardFlds,
            {
               id: `Other Hazards ${counter}`,
               value: ""
            }
         ])
         setOtherHazardCounter(counter)
      }
   }

   // Removes "other hazard" field by id
   const handleRemoveOtherHazardFld = (id) => {
      const updateOtherHazardFlds =
         otherHazardFlds.filter(
            (obj) => obj.id !== id
         )
      setOtherHazardFlds(updateOtherHazardFlds)
   }

   // Adds "other hazard" value to assc. id
   const addOtherHazard = (evt, id) => {
      const updatedOtherHazards =
         otherHazardFlds.map((el) => {
            if (el.id === id) {
               el.value = evt.target.value
            }
            return el
         })
      setOtherHazardFlds(updatedOtherHazards)
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
            {/* Other Trades in Work Area */}
            {otherWorkFlds.map((el) => {
               return (
                  <TextField
                     label="Other Trades in Work Area"
                     variant="standard"
                     id={el.id}
                     key={el.id}
                     onChange={(evt) =>
                        addOtherWork(evt, el.id)
                     }
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <DeleteOutlineIcon
                                 style={{
                                    cursor:
                                       "pointer"
                                 }}
                                 onClick={() =>
                                    handleRemoveOtherWorkFld(
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
                        "& .MuiInputBase-input": {
                           paddingLeft: 1
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
               onClick={handleAddOtherWorkFld}
            >
               Add Work
            </Button>
            {/* Other Hazards */}
            {otherHazardFlds.map((el) => {
               return (
                  <TextField
                     label="Other Hazards"
                     variant="standard"
                     id={el.id}
                     key={el.id}
                     onChange={(evt) =>
                        addOtherHazard(evt, el.id)
                     }
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <DeleteOutlineIcon
                                 style={{
                                    cursor:
                                       "pointer"
                                 }}
                                 onClick={() =>
                                    handleRemoveOtherHazardFld(
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
                        "& .MuiInputBase-input": {
                           paddingLeft: 1
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
               onClick={handleAddOtherHazardFld}
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
