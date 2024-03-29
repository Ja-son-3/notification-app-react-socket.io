import * as React from "react"

const SvgComponent = (props) => (
  <svg
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    width={510}
    height={510}
    style={{
      enableBackground: "new 0 0 510 510",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M255 478.53c24.588 0 44.706-20.118 44.706-44.706h-89.412c0 24.588 20.118 44.705 44.706 44.705zm145.294-134.118V221.47c0-69.295-46.941-125.177-111.765-140.824V65c0-17.882-15.647-33.53-33.529-33.53-17.882 0-33.53 15.648-33.53 33.53v15.647c-64.823 15.647-111.764 71.53-111.764 140.824v122.94L65 389.119v22.353h380v-22.353l-44.706-44.706z" />
  </svg>
)

export default SvgComponent
