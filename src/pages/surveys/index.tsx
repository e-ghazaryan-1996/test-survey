import SurveyForm from "@/components/survey/survey-form";
import { Box, Typography } from "@mui/material";

const SurveysPage = () => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        border: "1px solid #C7C5D0",
        padding: "32px",
        maxWidth: "856px",
        width: "100%",
        color: "#1B1B1F",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1">Create a survey</Typography>
      </Box>
      <Box marginTop="32px">
        <SurveyForm />
      </Box>
    </Box>
  );
};

export default SurveysPage;
