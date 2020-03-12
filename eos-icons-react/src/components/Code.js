import React from 'react'

const Code = (props) => {
  const { codes } = props

  return (
    <code className="code">
      {codes.map((code) => {
        return code;
      })}
    </code>
  )
}

export default Code
