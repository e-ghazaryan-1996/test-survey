export const controlStyles = {
  "& .Mui-focused": {
    "&.MuiFormLabel-root": {
      color: "primary.light",
    },
    "& fieldset": {
      border: "none",
    },
    "& fieldset::after": {
      content: '""',
      position: "absolute",
      top: "34px",
      left: 0,
      width: "100%",
      height: "8px",
      backgroundSize: "100% 100%",
      border: "2px solid #2E3EFF",
      borderBottomLeftRadius: "24px",
      borderBottomRightRadius: "24px",
      borderTop: 0,
    },
  },
  "& fieldset": {
    border: "none",
  },
  "& fieldset::after": {
    content: '""',
    position: "absolute",
    top: "34px",
    left: 0,
    width: "100%",
    height: "8px",
    border: "1px solid #C7C5D0",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    borderTop: 0,
  },
};
