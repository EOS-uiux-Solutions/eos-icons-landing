import React, { useState } from 'react'
import selectIconContext from '../utils/selectIconContext'
import deSelectIconContext from '../utils/deSelectIconContext'
import { EosIconStore, eosIconsState } from '../utils/EosIcons.store'

const AppContext = props => {
  const { children } = props
  const allSelect = useState(false)
  const allDeSelect = useState(false)

  return (
    <EosIconStore.Provider value={eosIconsState}>
      <deSelectIconContext.Provider value={allDeSelect}>
        <selectIconContext.Provider value={allSelect}>
          {children}
        </selectIconContext.Provider>
      </deSelectIconContext.Provider>
    </EosIconStore.Provider>
  )
}

export default AppContext
