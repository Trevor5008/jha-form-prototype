"use client"
import {
   Typography,
   Container,
   TextField,
   FormHelperText,
   Box
} from "@mui/material"
import { FormControl } from "@mui/material"
import DateTimeInput from "./components/DateTimeInput"
import SelectInput from "./components/SelectInput"
import {
   sectionAOpts,
   sectionBOpts,
   projectData,
   companyNames,
   supervisors
} from "@/lib/options"
import SectionAOptions from "./components/SectionAOptions"
import SectionBOptions from "./components/SectionBOptions"

export default function Home() {
   return (
      <main className="mx-8">
         {/* Title */}
         <Typography
            variant="h1"
            className="text-center my-3"
         >
            Daily Job Hazard Analysis
         </Typography>
         {/* Description */}
         <Typography
            variant="body1"
            className="block"
         >
            This JHA is valid only for the work
            and date specified. This JHA shall be
            posted at the immediate work area
            while the work is ongoing. If the
            noted conditions change, the JHA shall
            be re-evaluated to incorporate changes
            and reissued immediately. Any
            emergency or incident automatically
            invalidates this JHA. When this JHA
            expires, it must be returned to the
            PSC/PSA for record purposes
         </Typography>
         {/* 1st Row */}
         <Container className="flex p-0 mt-5">
            {/* Project Name Input */}
            <FormControl
               className="mr-2 w-1/2"
               required
            >
               <SelectInput
                  name="Project Name and Number"
                  data={projectData}
               />
            </FormControl>
            {/* DateTime Input */}
            <FormControl
               className="ml-2 w-1/2"
               required
            >
               <DateTimeInput />
            </FormControl>
         </Container>
         {/* 2nd Row | Company Name, Supervisor */}
         <Container className="flex p-0 mt-4">
            {/* Company Name */}
            <FormControl
               className="mr-2 w-1/2"
               required
            >
               <SelectInput
                  name="Company Name"
                  data={companyNames}
               />
            </FormControl>
            {/* Supervisor */}
            <FormControl
               className="ml-2 w-1/2"
               required
            >
               <SelectInput
                  name="Supervisor"
                  data={supervisors}
               />
            </FormControl>
         </Container>
         {/* 3rd Row | Project Description*/}
         <Container className="flex p-0 mt-4">
            <FormControl fullWidth>
               <TextField
                  id="outlined-multiline-flexible"
                  label="Description of work to be performed:"
                  multiline
                  rows={4}
                  required
               />
               {/* <FormHelperText>Describe work to be performed</FormHelperText> */}
            </FormControl>
         </Container>
         {/* Section A */}
         <Container className="mt-4">
            <Typography
               variant="h3"
               marginBottom={1}
            >
               A. Are Permits Required? Are they
               displayed and properly signed by
               the PSC/PSA?
            </Typography>
            <Box display="flex">
               <Box
                  width="48%"
                  marginLeft={2}
               >
                  {sectionAOpts
                     .slice(0, 3)
                     .map((option, idx) => {
                        return (
                           <SectionAOptions
                              key={idx}
                              option={option}
                              column={1}
                           />
                        )
                     })}
               </Box>
               <Box width="50%">
                  {sectionAOpts
                     .slice(3)
                     .map((option, idx) => {
                        return (
                           <SectionAOptions
                              key={idx}
                              option={option}
                              column={2}
                           />
                        )
                     })}
                  <Box width="100%">
                     <TextField
                        label="Other"
                        variant="standard"
                        fullWidth
                        sx={{
                           '& .MuiFormLabel-root': {
                              color: 'black'
                           }
                        }}
                     />
                  </Box>
               </Box>
            </Box>
         </Container>
         {/* Section B */}
         <Container className="mt-4">
            <Typography
               variant="h3"
               marginBottom={1}
            >
               B. Atmospheric Monitoring
            </Typography>
            <Box display="flex flex-column">
               {sectionBOpts.map(
                  (option, idx) => {
                     return (
                        <SectionBOptions
                           key={idx}
                           option={option}
                           column={2}
                        />
                     )
                  }
               )}
            </Box>
         </Container>
      </main>
   )
}
