import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ReadOnlyProps } from "../../../types/helper";
import type { Dayjs } from "dayjs";

interface DatePickerSxProps {
  value: Dayjs | null;
  handleDateChange: (date: Dayjs | null) => void;
  label: string;
}

const DatePickerSx: React.FC<ReadOnlyProps<DatePickerSxProps>> = ({
  label,
  value,
  handleDateChange,
}) => {
  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} value={value} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default DatePickerSx;
