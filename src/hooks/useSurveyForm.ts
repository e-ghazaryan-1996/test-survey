import { ISurveyForm } from "@/components/survey/types";
import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import useCreateBoard from "./useCreateBoard";

const useSurveyForm = () => {
  const [formvalue, setFormvalue] = useState<ISurveyForm>({
    name: "e.g. ESG Assessment 2022",
    deadline: dayjs("2024-06-07"),
    notes: "",
    person: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [createBoard] = useCreateBoard();

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

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting("loading");
      await createBoard({
        variables: {
          board_name: formvalue.name,
          board_kind: formvalue.notes,
        },
      });
      setIsSubmitting("success");
    } catch (e) {
      setIsSubmitting("error");
    }
  };

  return {
    formvalue,
    handleDateChange,
    handleFormValue,
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
  };
};

export default useSurveyForm;
