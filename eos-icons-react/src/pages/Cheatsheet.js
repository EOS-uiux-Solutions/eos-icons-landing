import React from 'react'
import PageHeader from '../components/PageHeader'
import Tabs from '../components/Tabs'

const Cheatsheet = () => {
  return (
    <div>
      <PageHeader>
        Cheatsheet: find the ligature of the icon you are looking for, plus, get
        an overview of all the available icons.
      </PageHeader>
      <Tabs>
        <div label='Regular Icons'>These are regular icons.</div>
        <div label='Animated Icons'>These are animated icons.</div>
      </Tabs>
    </div>
  )
}

export default Cheatsheet
