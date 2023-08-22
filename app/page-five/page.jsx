"use client"
import { useState, useEffect } from "react"
import OptionInput from "../components/OptionInput"
import {
   Autocomplete,
   Button,
   Container,
   Box,
   Typography,
   Link,
   FormControl,
   FormControlLabel,
   FormLabel,
   RadioGroup,
   Radio,
   TextField,
   InputAdornment,
   Tooltip
} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { hazardControls } from "../../lib/options"

export default function PageFour() {
   const [hasStandBy, setHasStandBy] =
      useState(false)
   const [workerCounter, setWorkerCounter] =
      useState(0)
   const [workers, setWorkers] = useState([])

   function handleStandByAdd(evt) {
      setHasStandBy(evt.target.value === "true")
      if (evt.target.value === "true") {
         setWorkerCounter(1)
         setWorkers([
            ...workers,
            { id: 1, value: "" }
         ])
      } else {
         setWorkerCounter(0)
         setWorkers([])
      }
   }

   function addWorker() {
      setWorkerCounter(workerCounter + 1)
      setWorkers([
         ...workers,
         { id: workerCounter + 1, value: "" }
      ])
   }

   function handleWorkerChange(evt) {
      console.log(evt.target.valuxe)
   }

   useEffect(() => {
      console.log(workers)
   }, [workers])

   function removeWorker(id) {
      const workerFlds = workers.filter(
         field => field.id !== id
      )
      setWorkers(workerFlds)
   }


   const competentPeople = [
      { label: "Sosa, Tony", id: 1 },
      { label: "Amason, Dan", id: 4},
   ]

   return (
      <Container>
         {/* C.3 - Controls */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.3</span>{" "}
            Hazard Controls
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
            {hazardControls.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     section={3}
                  />
               )
            })}
            {/* Stand-By Persons Option Select*/}
            <FormControl
               className="mb-2 flex flex-nowrap items-center justify-between"
               fullWidth
               sx={{ flexDirection: "row" }}
            >
               <FormLabel
                  id={`stand-by persons radio group`}
                  className="text-black"
                  sx={{
                     fontSize: {
                        xs: 14,
                        sm: 16
                     },
                     width: "50%"
                  }}
               >
                  Stand-By Persons?
               </FormLabel>
               <RadioGroup
                  aria-labelledby={`stand-by persons radio group`}
                  name={`stand-by persons`}
                  onChange={handleStandByAdd}
                  value={hasStandBy}
                  sx={{
                     display: "inline-block",
                     marginLeft: 1
                  }}
               >
                  <FormControlLabel
                     value={true}
                     control={
                        <Radio
                           checkedIcon={
                              <CheckIcon />
                           }
                           icon={
                              <CheckBoxOutlineBlankOutlinedIcon />
                           }
                        />
                     }
                     label="Yes"
                     sx={{
                        marginRight: {
                           xs: 2
                        },
                        "& .MuiTypography-root": {
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        },
                        "& .MuiSvgIcon-root": {
                           width: {
                              xs: 20,
                              sm: 24
                           }
                        }
                     }}
                  />
                  <FormControlLabel
                     value={false}
                     control={
                        <Radio
                           checkedIcon={
                              <CheckIcon />
                           }
                           icon={
                              <CheckBoxOutlineBlankOutlinedIcon />
                           }
                        />
                     }
                     label="No"
                     sx={{
                        marginRight: {
                           xs: 0,
                           sm: 1
                        },
                        "& .MuiTypography-root": {
                           fontSize: {
                              xs: 14,
                              sm: 16
                           }
                        },
                        "& .MuiButtonBase-root": {
                           width: {
                              xs: 34,
                              sm: 40
                           }
                        },
                        "& .MuiSvgIcon-root": {
                           width: {
                              xs: 20,
                              sm: 24
                           }
                        }
                     }}
                  />
               </RadioGroup>
            </FormControl>
            {hasStandBy &&
               // Spotter/Flagger/Traffic Control field(s)
               workers.map((obj, idx) => {
                  return (
                     <TextField
                        key={idx}
                        id={obj.id}
                        label="Worker"
                        variant="standard"
                        onChange={handleWorkerChange}
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 <DeleteOutlineIcon
                                    style={{ cursor: 'pointer' }}
                                    onClick={() =>
                                       removeWorker(
                                          obj.id
                                       )
                                    }
                                 />
                              </InputAdornment>
                           )
                        }}
                        sx={{
                           marginLeft: 2,
                           fontSize: {
                              xs: 14,
                              sm: 16
                           },
                           "& .MuiFormLabel-root":
                              {
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
                     />
                  )
               })}
            {hasStandBy && (
               <Button onClick={addWorker}>
                  Add Worker
               </Button>
            )}
            <Autocomplete
               disablePortal
               id="competent-person"
               options={competentPeople}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     label="Competent Person"
                  />
               )}
            />
         </Box>
         {/* Navigation */}
         <Box
            display="flex"
            justifyContent="space-evenly"
         >
            <Button variant="standard">
               <Link href="/page-four">
                  Previous
               </Link>
            </Button>
            <Button variant="standard">
               <Link href="/page-six">Next</Link>
            </Button>
         </Box>
      </Container>
   )
}
