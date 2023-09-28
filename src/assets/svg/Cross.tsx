import React from "react";
import { SVGProps } from "../../types/svg";

const Cross: React.FC<SVGProps> = (props) => {
  const { className, width, height } = props;
  return (
    <svg
      className={className}
      width={width || "40"}
      height={height || "40"}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='12.5754'
        y='10.9541'
        width='24'
        height='3'
        rx='1.5'
        transform='rotate(45 12.5754 10.9541)'
        fill='white'
      />
      <rect
        width='24'
        height='3'
        rx='1.5'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 27.4247 10.9541)'
        fill='white'
      />
    </svg>
  );
};

export default Cross;
