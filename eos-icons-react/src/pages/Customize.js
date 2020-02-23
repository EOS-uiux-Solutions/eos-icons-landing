import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import GeneratingFont from '../components/GeneratingFont'
import Modal from '../components/Modal'

function Customize () {
  const [modal, showModal] = useState(false)

  return (
    <div>
      <PageHeader theme='purple'>
        <h2>Click on Icons to select them</h2>
        <p>
          To continue building an old font, upload icons-config.json
          <button> file here </button>
        </p>
      </PageHeader>
      {modal ? (
        <Modal>
          <GeneratingFont />
        </Modal>
      ) : null}
    </div>
  )
}

export default Customize
