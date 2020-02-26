import React from 'react'
import PageHeader from '../components/PageHeader'
import IconsSet from '../components/IconsSet'
import Tabs from '../components/Tabs'

const Cheatsheet = props => {
  return (
    <>
      <PageHeader theme='purple'>
        <h2>
          Cheatsheet: find the ligature of the icon you are looking for, plus,
          get an overview of all the available icons.
        </h2>
      </PageHeader>
      <Tabs>
        <div label='Regular Icons'>
          <IconsSet />
        </div>
        <div label='Animated Icons'>These are animated icons.</div>
      </Tabs>
    </>
  )
}

export default Cheatsheet
