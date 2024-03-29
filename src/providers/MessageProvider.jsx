import { createContext, useState } from "react";
import { Toast } from "../components/index";
export const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [messageType, setMessageType] = useState("success");
  const [messageContent, setMessageContent] = useState("");

  const showMessage = (type, content) => {
    setMessageType(type);
    setMessageContent(content);
    setOpen(true);
  };

  const hideMessage = () => {
    setOpen(false);
  };

  return (
    <MessageContext.Provider value={{ showMessage, hideMessage }}>
      {children}
      <Toast
        message={messageContent}
        type={messageType}
        isOpen={open}
        onClose={hideMessage}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      />
    </MessageContext.Provider>
  );
};

export default MessageProvider;
