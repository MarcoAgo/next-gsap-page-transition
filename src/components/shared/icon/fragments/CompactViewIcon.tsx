import React from "react";

const CompactViewIcon: React.FC = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="52" viewBox="0 0 64 52">
      <defs>
        <filter id="Rettangolo_13" x="20" y="0" width="44" height="52" filterUnits="userSpaceOnUse">
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood floodColor="#666"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rettangolo_14" x="10" y="0" width="44" height="52" filterUnits="userSpaceOnUse">
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur-2"/>
          <feFlood floodColor="#666"/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rettangolo_15" x="0" y="0" width="44" height="52" filterUnits="userSpaceOnUse">
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur-3"/>
          <feFlood floodColor="#666"/>
          <feComposite operator="in" in2="blur-3"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Raggruppa_2" data-name="Raggruppa 2" transform="translate(-1575 -963)">
        <g transform="matrix(1, 0, 0, 1, 1575, 963)" filter="url(#Rettangolo_13)">
          <rect id="Rettangolo_13-2" data-name="Rettangolo 13" width="26" height="34" rx="13" transform="translate(29 6)" fill="#fff2d9"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, 1575, 963)" filter="url(#Rettangolo_14)">
          <rect id="Rettangolo_14-2" data-name="Rettangolo 14" width="26" height="34" rx="13" transform="translate(19 6)" fill="#fff2d9"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, 1575, 963)" filter="url(#Rettangolo_15)">
          <rect id="Rettangolo_15-2" data-name="Rettangolo 15" width="26" height="34" rx="13" transform="translate(9 6)" fill="#fff2d9"/>
        </g>
      </g>
    </svg>

  )
}

export default CompactViewIcon;
