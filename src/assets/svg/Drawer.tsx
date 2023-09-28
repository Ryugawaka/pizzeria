import React from "react";
import { SVGProps } from "../../types/svg";

const Drawer: React.FC<SVGProps> = (props) => {
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
      <g id='Frame 3'>
        <g id='Menu'>
          <g id='Group 64'>
            <rect
              id='Rectangle Copy'
              x='8'
              y='10'
              width='24'
              height='3'
              rx='1.5'
              fill='black'
            />
            <rect
              id='Rectangle Copy 45'
              x='8'
              y='18'
              width='24'
              height='3'
              rx='1.5'
              fill='black'
            />
            <rect
              id='Rectangle Copy 46'
              x='8'
              y='26'
              width='19'
              height='3'
              rx='1.5'
              fill='black'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Drawer;
