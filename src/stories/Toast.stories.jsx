import { Toast } from "../components/index";

const ToastStory = {
  component: Toast,
  title: "Toast 🍞",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    message: "hello world!",
  },
};

export const Info = {
  args: {
    message: "This is an information message",
    type: "info",
  },
};

export const Success = {
  args: {
    message: "This is a success message",
    type: "success",
  },
};
export const Error = {
  args: {
    message: "This is an error message",
    type: "error",
  },
};

export const Warning = {
  args: {
    message: "This is a warning message",
    type: "warning",
  },
};

export default ToastStory;
