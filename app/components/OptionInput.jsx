import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHazard, removeHazard } from "../features/hazards/hazardsSlice"
import { addControl, removeControl } from "../features/hazard-controls/hazardControlsSlice"
import { addPpe, removePpe } from "../features/ppe/ppeSlice"
import { addSituation, removeSituation } from '../features/situations/situationsSlice'
import { selectHazards } from '../features/hazards/hazardsSlice'
import { selectSituation } from '../features/situations/situationsSlice'
import { selectControls } from '../features/hazard-controls/hazardControlsSlice'
import { selectPpe } from '../features/ppe/ppeSlice'
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
   hasLabel,
   section
}) {
   const situation = useSelector(selectSituation)
   const hazards = useSelector(selectHazards)
   const controls = useSelector(selectControls)
   const ppe = useSelector(selectPpe)

   const dispatch = useDispatch()

   let data;
   switch (section) {
      case 1:
         data = situation
         break
      case 2:
         data = hazards
         break
      case 3:
         data = controls
         break
      case 4:
         data = ppe
         break
      default:
         data = null
   }

   const handlerAdd = (name) => {
      switch (section) {
         case 1:
            return addSituation(name)
         case 2:
            return addHazard(name)
         case 3: 
            return addControl(name)
         case 4:
            return addPpe(name)
         default: 
            return
      }
   }

   const handlerRemove = (name) => {
      switch (section) {
         case 1:
            return removeSituation(name)
         case 2:
            return removeHazard(name)
         case 3: 
            return removeControl(name)
         case 4:
            return removePpe(name)
         default: 
            return
      }
   }

   const handleChange = (evt) => {
      if (evt.target.value === 'true') {
         dispatch(handlerAdd(evt.target.name))
      } else {
         dispatch(handlerRemove(evt.target.name))
      }
   }

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
            name={`${option}`}
            onChange={handleChange}
            section={section}
            value={data.includes(option) ? true : false}
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
