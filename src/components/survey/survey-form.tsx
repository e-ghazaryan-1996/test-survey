import {
  Backdrop,
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FormControlSx from "@/components/shared/form-control/form-control-sx";
import DatePickerSx from "@/components/shared/date-picker/date-picker-sx";
import ButtonSx from "@/components/shared/button/button-sx";
import useSurveyForm from "@/hooks/useSurveyForm";

const names = ["Oliver Hansen", "Van Henry", "April Tucker"];

const SurveyForm = () => {
  const {
    formvalue,
    handleDateChange,
    handleFormValue,
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
  } = useSurveyForm();

  return (
    <Box display="flex" flexDirection="column" gap="32px">
      <FormControlSx>
        <InputLabel htmlFor="name">Survey Name</InputLabel>
        <OutlinedInput
          id="name"
          label="Name"
          placeholder="Name"
          value={formvalue.name}
          onChange={handleFormValue}
        />
        <Typography variant="subtitle2" component="p" marginLeft="16px">
          This will be presented to recipients
        </Typography>
      </FormControlSx>
      <FormControlSx>
        <InputLabel id="demo-multiple-name-label">Form</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={formvalue.person}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="subtitle2" component="p" marginLeft="16px">
          Your survey recipients will be asked to fill in these form
        </Typography>
      </FormControlSx>
      <FormControl>
        <Box display="flex" flexDirection="column" gap="8px">
          <FormLabel
            sx={{
              color: "secondary.main",
              fontSize: "12px",
            }}
            id="Recipents group label"
          >
            Recipents
          </FormLabel>
          <RadioGroup
            row
            sx={{
              alignItems: "center",
              gap: "32px",
            }}
            aria-labelledby="Recipents group label"
            name="recipents-button-group"
          >
            <FormControlLabel
              sx={{
                color: "secondary.main",
                fontSize: "14px",
              }}
              value="One survey per user"
              control={
                <Radio
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "primary.light",
                    },
                  }}
                />
              }
              label="One survey per user"
            />
            <FormControlLabel
              value="One survey per contributor"
              control={
                <Radio
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "primary.light",
                    },
                  }}
                />
              }
              label="One survey per contributor"
            />
            <InfoOutlinedIcon fontSize="small" />
          </RadioGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "secondary.main",
                  "&.Mui-checked": {
                    color: "primary.light",
                  },
                }}
                checked={true}
                name="send"
              />
            }
            label="Send to all listed contributors and users via email"
          />
        </Box>
      </FormControl>
      <FormControlSx
        sx={{
          maxWidth: "189px",
        }}
      >
        <DatePickerSx
          label="Deadline for responses"
          value={formvalue.deadline}
          handleDateChange={handleDateChange}
        />
      </FormControlSx>
      <FormControlSx>
        <InputLabel htmlFor="notes">Notes for recipients (optional)</InputLabel>
        <OutlinedInput
          sx={{
            marginTop: "52px",
          }}
          id="notes"
          name="notes"
          placeholder="notes"
          label="Name"
          value={formvalue.notes}
          onChange={handleFormValue}
        />
        <Typography variant="subtitle2" component="p" marginLeft="16px">
          This will be presented to recipients
        </Typography>
      </FormControlSx>
      <Box display="flex" flexDirection="column" gap="12px">
        <ButtonSx data-testId="submit-button" onClick={handleSubmit}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20",
              color: "white",
            }}
            component="span"
          >
            Save Survey
          </Typography>
        </ButtonSx>
        <Typography variant="subtitle2" component="p">
          This will be presented to recipients
        </Typography>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting !== "idle"}
        onClick={() => setIsSubmitting("idle")}
      >
        {isSubmitting === "loading" && <CircularProgress color="inherit" />}
        {isSubmitting === "success" && <Typography>Success!</Typography>}
        {isSubmitting === "error" && <Typography>Error!</Typography>}
      </Backdrop>
    </Box>
  );
};

export default SurveyForm;
