import {
   InputLabel,
   Select,
   MenuItem
} from "@mui/material"

export default function SelectInput({
   name,
   data
}) {
   return (
      <>
         <InputLabel id="demo-simple-select-label">
            {name}
         </InputLabel>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            label={name}
            //  onChange={handleChange}
         >
            {data.map((person) => {
               const idx = person.indexOf("-")
               const val = person.slice(idx + 2)
               return (
                  <MenuItem
                     key={idx}
                     value={val}
                  >
                     {person}
                  </MenuItem>
               )
            })}
         </Select>
      </>
   )
}
