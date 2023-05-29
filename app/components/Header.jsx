"use client"
import { Typography, Box } from "@mui/material"

export default function Header() {
   return (
      <Box
         display="flex"
         border={2}
         justifyContent="space-between"
         paddingY={.5}
      >
         <Typography
            variant="h3"
            textTransform="uppercase"
            fontWeight="bolder"
            marginLeft={1}
         >
            Exhibit M
         </Typography>
         <Typography
            variant="h3"
            textTransform="uppercase"
            fontWeight="bolder"
            marginRight={4}
         >
            Job Hazard Analysis Form (Mandatory)
         </Typography>
      </Box>
   )
}
