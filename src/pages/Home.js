import React, { useState, useEffect, useContext } from 'react'
import AppContext from '../utils/AppContext'
import { globalHistory } from '@reach/router'

import IconsSet from '../modules/IconsSet'

const Home = () => {
  const [header, setHeader] = useState(true)
  const { state, dispatch } = useContext(AppContext)

  useEffect(() => {
    return globalHistory.listen(() =>
      state.customize ? dispatch({ type: 'TOGGLE_CUSTOMIZE' }) : ''
    )
  })

  const manageHeader = () => {
    setHeader(!header)
  }

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <div>
          <IconsSet action={manageHeader} />
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default Home
