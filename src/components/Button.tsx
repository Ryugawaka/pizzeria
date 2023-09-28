import React from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  text: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { className, onClick, disabled = false, text } = props;
  return (
    <button
      className={"button " + className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
