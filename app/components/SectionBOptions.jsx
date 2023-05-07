"use client"
import { useState } from "react"
import Radio from "@mui/material/Radio"
import TextField from "@mui/material/TextField"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

export default function SelectBOptions({
   option
}) {
   const [value, setValue] = useState("female")

   const handleChange = (evt) => {
      setValue(evt.target.value)
   }

   return (
      <FormControl
         className="flex flex-row justify-between items-center mb-2"
         fullWidth
      >
         <FormLabel id={`${option} radio group`} className="text-black">
            {option}
         </FormLabel>
         <RadioGroup
            aria-labelledby={`${option} radio group`}
            name={`${option} radio group`}
            value={value}
            onChange={handleChange}
            className="inline-block absolute left-[40%]"
         >
            <FormControlLabel
               value={true}
               control={<Radio />}
               label="Yes"
            />
            <FormControlLabel
               value={false}
               control={<Radio />}
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
                '& .MuiFormLabel-root': {
                    color: 'black'
                }
            }}
         />
      </FormControl>
   )
}
