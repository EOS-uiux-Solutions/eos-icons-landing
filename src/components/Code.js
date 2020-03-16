import React, { useEffect } from 'react'


const Code = (props) => {
  const { codes, type } = props
  useEffect(() => {
    Prism.highlightAll();
  })
  return (
    <pre className={`code ${type}`}>
      <code>
        {codes.map((code) => {
          return code
        })}
      </code>
    </pre>
  )
}

export default Code
