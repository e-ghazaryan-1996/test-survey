import { ISurveyForm } from "@/components/survey/types";
import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const useSurveyForm = () => {
  const [formvalue, setFormvalue] = useState<ISurveyForm>({
    name: "e.g. ESG Assessment 2022",
    deadline: dayjs("2024-06-07"),
    notes: "",
    person: "",
  });

  const handleDateChange = (date: Dayjs | null) => {
    setFormvalue((prev) => ({ ...prev, deadline: date }));
  };

  const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormvalue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setFormvalue((prev) => ({ ...prev, person: value }));
  };

  return {
    formvalue,
    handleDateChange,
    handleFormValue,
    handleChange,
  };
};

export default useSurveyForm;
