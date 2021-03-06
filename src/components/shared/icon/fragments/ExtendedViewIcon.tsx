import React from "react";

const ExtendedViewIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="52" viewBox="0 0 56 52">
      <defs>
        <filter id="Rettangolo_16" x="0" y="0" width="29" height="52" filterUnits="userSpaceOnUse">
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rettangolo_17" x="13" y="0" width="29" height="52" filterUnits="userSpaceOnUse">
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3" result="blur-2"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rettangolo_18" x="26" y="0" width="30" height="52" filterUnits="userSpaceOnUse">
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur-3"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur-3"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Raggruppa_1" data-name="Raggruppa 1" transform="translate(-1658 -963)">
        <g transform="matrix(1, 0, 0, 1, 1658, 963)" filter="url(#Rettangolo_16)">
          <rect id="Rettangolo_16-2" data-name="Rettangolo 16" width="11" height="34" rx="5.5" transform="translate(9 6)" fill="#fff2d9"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, 1658, 963)" filter="url(#Rettangolo_17)">
          <rect id="Rettangolo_17-2" data-name="Rettangolo 17" width="11" height="34" rx="5.5" transform="translate(22 6)" fill="#fff2d9" opacity="0.997"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, 1658, 963)" filter="url(#Rettangolo_18)">
          <rect id="Rettangolo_18-2" data-name="Rettangolo 18" width="12" height="34" rx="6" transform="translate(35 6)" fill="#fff2d9" opacity="0.997"/>
        </g>
      </g>
    </svg>
  )
}

export default ExtendedViewIcon;
