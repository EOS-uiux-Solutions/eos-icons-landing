import React from 'react';

const PageHeader = props => {
  const { children } = props;

  return (
    <div className="page-header">
      <h1> {children}</h1>
    </div>
  )
}

export default PageHeader
