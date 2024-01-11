import { Input } from "../components/index";

const InputStory = {
  component: Input,
  title: "Input Field",
  tags: ["autodocs"],
};

export const Text = {
  args: {
    type: "text",
    label: "Text",
  },
};

export const Password = {
  args: {
    type: "password",
    label: "Password",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

export const Normal = {
  args: {
    size: "Normal",
  },
};

export default InputStory;
