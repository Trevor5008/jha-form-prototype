"use client"
import { useState } from "react"
import Radio from "@mui/material/Radio"
import TextField from "@mui/material/TextField"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import CheckIcon from "@mui/icons-material/Check"
import CheckBoxOutlineBlankOutlinedIcon 
   from "@mui/icons-material/CheckBoxOutlineBlankOutlined"

export default function SelectBOptions({
   option
}) {
   const [value, setValue] = useState(false)

   const handleChange = (evt) => {
      setValue(evt.target.value)
   }

   return (
      <FormControl
         className="flex justify-between items-center mb-2"
         fullWidth
         sx={{
            flexDirection: "row"
         }}
      >
         <FormLabel
            id={`${option} radio group`}
            className="text-black"
         >
            {option}
         </FormLabel>
         <RadioGroup
            aria-labelledby={`${option} radio group`}
            name={`${option} radio group`}
            value={value}
            onChange={handleChange}
            className="absolute left-[40%]"
            sx={{
               display: "inline-block"
            }}
         >
            <FormControlLabel
               value={true}
               control={
                  <Radio
                     checkedIcon={<CheckIcon />}
                     icon={
                        <CheckBoxOutlineBlankOutlinedIcon />
                     }
                  />
               }
               label="Yes"
            />
            <FormControlLabel
               value={false}
               control={
                  <Radio
                     checkedIcon={<CheckIcon />}
                     icon={
                        <CheckBoxOutlineBlankOutlinedIcon />
                     }
                  />
               }
               label="No"
            />
         </RadioGroup>
         <TextField
            id={`${option} reading`}
            label="Reading"
            variant="standard"
            className="w-[30%]"
            sx={{
               visibility:
                  option ===
                  "Are concentration levels safe?"
                     ? "hidden"
                     : "",
               "& .MuiFormLabel-root": {
                  color: "black"
               }
            }}
         />
      </FormControl>
   )
}
