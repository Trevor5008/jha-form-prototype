"use client"
import {
   FormGroup,
   FormControlLabel,
   Checkbox,
   Typography,
   Box
} from "@mui/material"

export default function CheckOptions({
   option,
   column
}) {
   return (
      <FormGroup className="flex flex-row flex-nowrap items-center justify-between">
         <Typography
            variant="body1"
            display="flex"
            position="absolute"
            left={column === 2 && "50%"}
         >
            {option}
         </Typography>
            <Box>
               <FormControlLabel
                  control={<Checkbox />}
                  label="Yes"
                  sx={{
                     position: "relative",
                     marginLeft: "11rem",
                     visibility: option === 'Other' && 'hidden'
                  }}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  label="No"
                  sx={{
                     position: "relative",
                     visibility: option === 'Other' && 'hidden'
                  }}
               />
            </Box>
      </FormGroup>
   )
}
