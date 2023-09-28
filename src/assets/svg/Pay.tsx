import React from "react";
import { SVGProps } from "../../types/svg";

const Pay: React.FC<SVGProps> = (props) => {
  const { className, width, height } = props;
  return (
    <svg
      className={className}
      width={width || "80"}
      height={height || "80"}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Frame 27'>
        <g id='icon-pay'>
          <g id='Group 57'>
            <circle id='Oval' cx='18' cy='45' r='2' fill='black' />
            <circle id='Oval Copy 6' cx='27' cy='45' r='2' fill='black' />
            <circle id='Oval Copy 7' cx='36' cy='45' r='2' fill='black' />
            <circle id='Oval Copy 10' cx='18' cy='53' r='2' fill='black' />
            <circle id='Oval Copy 9' cx='27' cy='53' r='2' fill='black' />
            <circle id='Oval Copy 8' cx='36' cy='53' r='2' fill='black' />
            <circle id='Oval Copy 13' cx='18' cy='61' r='2' fill='black' />
            <circle id='Oval Copy 12' cx='27' cy='61' r='2' fill='black' />
            <circle id='Oval Copy 11' cx='36' cy='61' r='2' fill='black' />
            <path
              id='Path'
              d='M35 16H41C43.2091 16 45 17.7909 45 20V67C45 69.2091 43.2091 71 41 71H13C10.7909 71 9 69.2091 9 67V20C9 17.7909 10.7909 16 13 16H19V16'
              stroke='black'
              strokeWidth='2'
            />
            <path
              id='Rectangle Copy 40'
              d='M45 21H47C48.1046 21 49 21.8954 49 23V51C49 52.1046 48.1046 53 47 53H45V21Z'
              stroke='black'
              strokeWidth='2'
            />
            <path
              id='Rectangle Copy 41'
              d='M49 24H68C69.6569 24 71 25.3431 71 27V47C71 48.6569 69.6569 50 68 50H49V24Z'
              stroke='black'
              strokeWidth='2'
            />
            <rect
              id='Rectangle Copy 42'
              x='49'
              y='29'
              width='22'
              height='6'
              stroke='black'
              strokeWidth='2'
            />
            <rect
              id='Rectangle Copy 39'
              x='19'
              y='8'
              width='16'
              height='12'
              stroke='#E52D2D'
              strokeWidth='2'
              strokeLinejoin='round'
            />
            <path
              id='Path_2'
              d='M38 20H16'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <rect
              id='Rectangle Copy 38'
              x='14'
              y='25'
              width='26'
              height='11'
              rx='1'
              stroke='black'
              strokeWidth='2'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Pay;
