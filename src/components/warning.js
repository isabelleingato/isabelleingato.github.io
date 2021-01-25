import React from "react";
import warningStyles from "./warning.module.scss";

export default function Warning({ children }) {
  return <div className={warningStyles.container}>Site Under Construction</div>;
}
