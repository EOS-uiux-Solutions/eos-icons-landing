import React from 'react'

const DocsHeading = (props) => {
  const {children, heading} = props;
  return (
    <div className="docs-heading">
        <h1>{heading}</h1>
        {children}
    </div>
  )
}

export default DocsHeading