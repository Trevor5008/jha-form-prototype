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
   supervisors,
   situationElements
} from "@/lib/options"
import SectionAOptions from "./components/SectionAOptions"
import SectionBOptions from "./components/SectionBOptions"

export default function Home() {
   return (
      <main className="mx-6 sm:mx-8">
         {/* Title */}
         <Typography
            variant="h1"
            className="my-3 text-center"
         >
            Daily Job Hazard Analysis
         </Typography>
         {/* Description */}
         <Typography
            variant="body1"
            className="block text-center"
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
         <Container
            className="p-0 mt-5"
            sx={{
               display: "flex",
               flexDirection: {
                  xs: "column",
                  sm: "row"
               }
            }}
         >
            {/* Project Name Input */}
            <FormControl
               sx={{
                  marginRight: {
                     sm: ".5rem"
                  },
                  width: {
                     xs: "100%",
                     sm: "50%"
                  },
                  marginBottom: {
                     xs: ".75rem"
                  }
               }}
               required
            >
               <SelectInput
                  name="Project Name and Number"
                  data={projectData}
               />
            </FormControl>
            {/* DateTime Input */}
            <FormControl
               sx={{
                  marginLeft: {
                     sm: ".5rem"
                  },
                  width: {
                     xs: "100%",
                     sm: "50%"
                  },
                  marginBottom: {
                     xs: ".75rem"
                  }
               }}
               required
            >
               <DateTimeInput />
            </FormControl>
         </Container>
         {/* 2nd Row | Company Name, Supervisor */}
         <Container
            className="p-0"
            sx={{
               display: "flex",
               flexDirection: {
                  xs: "column",
                  sm: "row"
               }
            }}
         >
            {/* Company Name */}
            <FormControl
               sx={{
                  marginRight: {
                     sm: ".5rem"
                  },
                  width: {
                     xs: "100%",
                     sm: "50%"
                  },
                  marginBottom: {
                     xs: ".75rem"
                  }
               }}
               required
            >
               <SelectInput
                  name="Company Name"
                  data={companyNames}
               />
            </FormControl>
            {/* Supervisor */}
            <FormControl
               sx={{
                  marginLeft: {
                     sm: ".5rem"
                  },
                  width: {
                     xs: "100%",
                     sm: "50%"
                  },
                  marginBottom: {
                     xs: ".75rem"
                  }
               }}
               required
            >
               <SelectInput
                  name="Supervisor"
                  data={supervisors}
               />
            </FormControl>
         </Container>
         {/* 3rd Row | Project Description*/}
         <Container className="p-0 flex">
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
         <Container className="mt-6 px-0">
            <Typography
               variant="h3"
               marginBottom={1}
            >
               <span className="font-bold" >A.</span> Are Permits Required? Are they
               displayed and properly signed by
               the PSC/PSA?
            </Typography>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: {
                     xs: "column",
                     tablet: "row"
                  }
               }}
               paddingX={1}
            >
               <Box
                  sx={{
                     width: {
                        tablet: "48%"
                     },
                     marginLeft: {
                        tablet: 0
                     }
                  }}
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
               <Box
                  sx={{
                     width: { tablet: "50%" },
                     marginLeft: { tablet: 2, md: 4 }
                  }}
               >
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
                           "& .MuiFormLabel-root":
                              {
                                 color: "black"
                              }
                        }}
                     />
                  </Box>
               </Box>
            </Box>
         </Container>
         {/* Section B */}
         <Container className="mt-4 px-0">
            <Typography
               variant="h3"
               marginBottom={1}
            >
               <span className="font-bold" >B.</span> Atmospheric Monitoring
            </Typography>
            <Box display="flex flex-column" paddingX={1}>
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
         {/* Section C */}
         <Container className="mt-4 px-0">
         <Typography
               variant="h3"
               marginBottom={1}
            >
               <span className="font-bold" >C.1 </span> 
               <span className="font-bold" >THINK </span>
               about the work you and your crews will be doing today.
            </Typography>
            <Box
                  sx={{
                     width: { tablet: "50%" },
                     marginLeft: { tablet: 2, md: 4 }
                  }}
               >
            {situationElements.map((opt, idx) => {
               return <SectionAOptions option={opt} />
            })}
            </Box>
         </Container>
      </main>
   )
}
