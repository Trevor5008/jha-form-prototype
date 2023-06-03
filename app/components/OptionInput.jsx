import { useState } from "react"
import {
   FormControl,
   FormControlLabel,
   FormLabel,
   RadioGroup,
   Radio
} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined"

export default function OptionInput({
   option,
   hasLabel
}) {
   const [value, setValue] = useState(false)

   const handleChange = (evt) =>
      setValue(evt.target.value)

   return (
      <FormControl
         className="mb-2 flex flex-nowrap items-center justify-between"
         fullWidth
         sx={{ flexDirection: "row" }}
      >
         {hasLabel && (
            <FormLabel
               id={`${option} radio group`}
               className="text-black"
               sx={{
                  fontSize: {
                     xs: 14,
                     sm: 16
                  },
                  width: '50%'
               }}
            >
               {option}
            </FormLabel>
         )}
         <RadioGroup
            aria-labelledby={`${option} radio group`}
            name={`${option} radio group`}
            value={value}
            onChange={handleChange}
            sx={{
               display: "inline-block",
               marginLeft: 1
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
                     xs: 2
                  },
                  '& .MuiTypography-root': {
                     fontSize: {
                        xs: 14,
                        sm: 16
                     }
                  },
                  '& .MuiSvgIcon-root': {
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
                     checkedIcon={<CheckIcon />}
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
                  '& .MuiTypography-root': {
                     fontSize: {
                        xs: 14,
                        sm: 16
                     }
                  },
                  '& .MuiButtonBase-root': {
                     width: {
                        xs: 34,
                        sm: 40
                     }
                  },
                  '& .MuiSvgIcon-root': {
                     width: {
                        xs: 20,
                        sm: 24
                     }
                  }
               }}
            />
         </RadioGroup>
      </FormControl>
   )
}
