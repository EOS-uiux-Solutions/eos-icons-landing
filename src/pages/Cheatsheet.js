import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import DownloadEosIcons from '../components/DownloadEosIcons'
import IconsSet from '../modules/IconsSet'
import Button from '../components/Button'

const Cheatsheet = () => {
  const [header, setHeader] = useState(true)

  const manageHeader = () => {
    setHeader(!header)
  }

  return (
    <div>
      {header ? (
        <PageHeader theme='purple'>
          <h2>
            Cheatsheet: find the ligature of the icon you are looking for, plus,
            get an overview of all the available icons.
          </h2>
        </PageHeader>
      ) : (
          <PageHeader theme='purple'>
            <div>
              <h2>Click on Icons to select them</h2>
              <p>
                To continue building an old font, upload icons-config.json
              <Button> file here </Button>
              </p>
            </div>
          </PageHeader>
        )}
      <DownloadEosIcons />
      <IconsSet action={manageHeader} />
    </div>
  )
}

export default Cheatsheet
