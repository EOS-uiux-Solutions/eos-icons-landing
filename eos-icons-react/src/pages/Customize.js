import React from 'react'
import Tabs from '../components/Tabs'
import PageHeader from '../components/PageHeader'

const Customize = () => {
  return (
    <div>
      <PageHeader theme='purple'>
        <h2>Click on Icons to select them</h2>
        <p>
          To continue building an old font, upload icons-config.json
          <button> file here </button>
        </p>
      </PageHeader>

      <Tabs>
        <div label='Regular Icons'>These are regular icons.</div>
        <div label='Animated Icons'>These are animated icons.</div>
      </Tabs>
    </div>
  )
}

export default Customize
