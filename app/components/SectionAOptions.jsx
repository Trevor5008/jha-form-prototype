import {
   FormGroup,
   FormControlLabel,
   Checkbox,
   Typography,
   Box
} from "@mui/material"

export default function CheckOptions({ option }) {
   return (
      <FormGroup className="flex flex-nowrap flex-row items-center justify-between">
         <Typography
            variant="body1"
            display="flex"
         >
            {option}
         </Typography>
         <Box>
            <FormControlLabel
               control={<Checkbox />}
               label="Yes"
               sx={{
                  visibility:
                     option === "Other" &&
                     "hidden",
                  marginRight: {
                     xs: '14px',
                     sm: '10px'
                  }
               }}
            />
            <FormControlLabel
               control={<Checkbox />}
               label="No"
               sx={{
                  visibility:
                     option === "Other" &&
                     "hidden"
               }}
            />
         </Box>
      </FormGroup>
   )
}
