import React, { useEffect } from 'react'


const Code = (props) => {
  const { codes, type } = props
  console.log('codes: ', codes);
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
