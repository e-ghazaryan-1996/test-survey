import { FormControl, FormControlProps, SxProps, Theme } from "@mui/material";
import { controlStyles } from "./form-styles";

interface FormControlSxProps extends FormControlProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const FormControlSx: React.FC<FormControlSxProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <FormControl
      sx={{
        ...controlStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </FormControl>
  );
};

export default FormControlSx;
