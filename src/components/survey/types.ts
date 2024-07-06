import { Dayjs } from "dayjs";

export interface ISurveyForm {
  name: string;
  deadline: Dayjs | null;
  notes: string;
  person: string;
}
