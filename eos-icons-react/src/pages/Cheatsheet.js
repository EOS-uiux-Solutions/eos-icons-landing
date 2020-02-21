import React from 'react'
import PageHeader from '../components/PageHeader'
import DownloadEosIcons from '../components/DownloadEosIcons'

const Cheatsheet = () => {
  return (
    <div>
      <PageHeader theme='purple'>
        <h2>
          Cheatsheet: find the ligature of the icon you are looking for, plus,
          get an overview of all the available icons.
        </h2>
      </PageHeader>
      <DownloadEosIcons />
    </div>
  )
}

export default Cheatsheet
