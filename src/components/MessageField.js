import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const MessageField = ({ name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;

        if (e.target.value === "") return;

        if (e.key === "Enter") {
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};

export default MessageField;
