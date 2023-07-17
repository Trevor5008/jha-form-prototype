import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"

export default function DateTimeInput() {
   return (
      <LocalizationProvider
         dateAdapter={AdapterDayjs}
      >
         <DateTimePicker
            label="Shift Date and Time"
            slotProps={{
               textField: {
                  required: true
               }
            }}
         />
      </LocalizationProvider>
   )
}
