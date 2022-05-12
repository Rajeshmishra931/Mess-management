import React, { useState } from "react";
import Writer from "../components/Writer/Writer";
import axios from "axios";

const Write = () => {
  const [text, setText] = useState("");
  const onWrite = async (message) => {
    try {
      setText(message);
      const ndef = new window.NDEFReader();
      // This line will avoid showing the native NFC UI reader
      await ndef.scan();
      await ndef.write({ records: [{ recordType: "text", data: message }] });
      
      alert(`Value Saved!`);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  

  return <Writer writeFn={onWrite} />;
};

export default Write;
