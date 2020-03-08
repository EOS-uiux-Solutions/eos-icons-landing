import React from 'react'

const DocsSubHeading = (props) => {
  const {children, heading} = props;
  return (
    <div className="docs">
        <h3>{heading}</h3>
        {children}
    </div>
  )
}

export default DocsSubHeading