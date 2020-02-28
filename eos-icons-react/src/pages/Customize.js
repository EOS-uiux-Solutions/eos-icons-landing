import React, { useState } from 'react'
import Tabs from '../components/Tabs'
import PageHeader from '../components/PageHeader'
import GeneratingFont from '../components/GeneratingFont'
import Modal from '../components/Modal'
import Button from '../components/Button'

const Customize = () => {
  const [modal, showModal] = useState(false)

  return (
    <div>
      <PageHeader theme='purple'>
        <h2>Click on Icons to select them</h2>
        <p>
          To continue building an old font, upload icons-config.json
          <Button> file here </Button>
        </p>
      </PageHeader>
      {modal ? (
        <Modal>
          <GeneratingFont redirect='/thankyou' />
        </Modal>
      ) : null}
      <Tabs>
        <div label='Regular Icons'>These are regular icons.</div>
        <div label='Animated Icons'>These are animated icons.</div>
      </Tabs>
    </div>
  )
}

export default Customize
