import React from 'react';

const PageHeader = params => {
  const { children } = params;

  return (
    <div className="page-header">
      <h1> {children}</h1>
    </div>
  )
}

export default PageHeader
