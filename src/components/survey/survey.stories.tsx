import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import SurveyForm from "./survey-form";

const meta: Meta<typeof SurveyForm> = {
  title: "Example/SurveyForm",
  component: SurveyForm,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const FilledForm: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Fill inputs", async () => {
      await userEvent.type(canvas.getByPlaceholderText("Name"), "John Doe");
      await userEvent.type(canvas.getByPlaceholderText("notes"), "Heyyy");
    });
    await step("Submit form", async () => {
      await userEvent.click(canvas.getByTestId("submit-button"));
    });
  },
};

export default meta;
