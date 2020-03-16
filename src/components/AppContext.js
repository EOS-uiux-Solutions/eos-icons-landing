import React from 'react'
import { EosIconStore, eosIconsState } from '../utils/EosIcons.store'

const AppContext = props => {
  const { children } = props

  return (
    <EosIconStore.Provider value={eosIconsState}>
      {children}
    </EosIconStore.Provider>
  )
}

export default AppContext
