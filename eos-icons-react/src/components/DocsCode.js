import React from 'react'

const DocsCode = (props) => {
  const {codes} = props;
  return (
    <code classnam="docs-code">
      {codes.map((code) => {
        return code;
      })}
    </code>
  )
}

export default DocsCode