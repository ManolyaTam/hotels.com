import { Button } from "../components/index";

const ButtonStory = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Default",
  },
};

export const Contained = {
  args: {
    label: "Contained",
    variant: "contained",
  },
};

export const Outlined = {
  args: {
    label: "outlined",
    variant: "outlined",
  },
};
export const Text = {
  args: {
    label: "Text",
    variant: "text",
  },
};

export default ButtonStory;
