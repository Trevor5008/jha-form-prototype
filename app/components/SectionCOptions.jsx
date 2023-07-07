"use client"
import {
   Container,
   Box,
   Typography,
   TextField
} from "@mui/material"
import OptionInput from "./OptionInput"
import {
   situationElements,
   hazards,
   hazardControls,
   properPpe
} from "@/lib/options"
import { useState } from "react"

export default function SelectCOptions({ onOptionsChange }) {
   const [options, setOptions] = useState([])

   const handleOptionChange = (section, option, val) => {
      const updatedOptions = options
      // check if option is already present
      if (!updatedOptions.find((el) => el[1] === option)) {
         updatedOptions.push([section, option, val])
      } else {
         updatedOptions.find((el) => el[1] === option)
            [2] = val
      }
      setOptions(updatedOptions)
      onOptionsChange(updatedOptions)
   }

   return (
      <Container className="mt-4 px-0">
         <Box marginBottom={2}>
         <Typography
            variant="h3"
            marginBottom={0.5}
         >
            <span className="font-bold">
               THINK{" "}
            </span>
            about the work you and your crews will
            be doing today.
         </Typography>
         <Typography
            variant="body1"
            marginLeft={1}
         >
            Select{" "}
            <span className="font-bold">
               Yes/No
            </span>{" "}
            for each element
         </Typography>
         <Typography
            variant="body2"
            marginLeft={2}
         >
            * All elements identified with a Yes
            must be addressed in Section D
         </Typography>
         </Box>
         {/* C.1 */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.1</span>{" "}
            Task/Scope
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
            {situationElements.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     onOptionChange={handleOptionChange}
                     section={1}
                  />
               )
            })}
            <TextField
               label="Other"
               variant="standard"
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
            />
         </Box>
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
                     onOptionChange={handleOptionChange}
                     section={2}
                  />
               )
            })}
            <TextField
               label="Work of Others"
               variant="standard"
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
            />
            <TextField
               label="Other"
               variant="standard"
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
            />
         </Box>
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
                     onOptionChange={handleOptionChange}
                  />
               )
            })}
            <TextField
               label="Work of Others"
               variant="standard"
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
            />
            <TextField
               label="Other"
               variant="standard"
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
            />
         </Box>
         {/* C.4 - PPE */}
         <Typography
            variant="h3"
            marginBottom={1}
         >
            <span className="font-bold">C.4</span>{" "}
            Proper PPE
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
            {properPpe.map((opt, idx) => {
               return (
                  <OptionInput
                     key={idx}
                     option={opt}
                     hasLabel={true}
                     section={4}
                     onOptionChange={handleOptionChange}
                  />
               )
            })}
            <TextField
               label="Other"
               variant="standard"
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
            />
         </Box>
      </Container>
   )
}
