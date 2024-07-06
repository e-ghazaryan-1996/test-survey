import { Button, ButtonProps } from "@mui/material";

interface ButtonSxProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonSx: React.FC<ButtonSxProps> = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        width: "142px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.light",
        borderRadius: "100px",
        ...props.sx,
      }}
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonSx;
