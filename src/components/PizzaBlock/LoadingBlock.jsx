import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
    <ContentLoader 
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="284" rx="0" ry="0" width="280" height="35" /> 
      <rect x="0" y="338" rx="6" ry="6" width="280" height="84" /> 
      <circle cx="131" cy="160" r="102" /> 
      <rect x="0" y="438" rx="3" ry="3" width="84" height="35" /> 
      <rect x="127" y="434" rx="19" ry="19" width="152" height="51" />
    </ContentLoader>
  )

  export default LoadingBlock
  