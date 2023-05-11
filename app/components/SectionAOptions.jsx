import { useState } from "react"
import {
   FormControl,
   FormControlLabel,
   FormLabel
} from "@mui/material"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import CheckIcon from "@mui/icons-material/Check"
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined"

export default function CheckOptions({ option }) {
   const [value, setValue] = useState(false)

   const handleChange = (evt) =>
      setValue(evt.target.value)

   return (
      <FormControl
         className="mb-2 flex flex-nowrap items-center justify-between"
         sx={{ flexDirection: "row" }}
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
               sx={{
                  visibility:
                     option === "Other" &&
                     "hidden",
                  marginRight: {
                     xs: "14px",
                     sm: "10px"
                  }
               }}
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
               sx={{
                  visibility:
                     option === "Other" &&
                     "hidden"
               }}
            />
         </RadioGroup>
      </FormControl>
   )
}
