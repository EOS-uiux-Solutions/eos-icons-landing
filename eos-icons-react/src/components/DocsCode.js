import React from 'react'

const DocsCode = (props) => {
  const {codes} = props;
  return (
    <code className="docs-code">
      {codes.map((code) => {
        return code;
      })}
    </code>
  )
}

export default DocsCode