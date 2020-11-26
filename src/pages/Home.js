import React, { useState, useEffect, useContext } from 'react'
import AppContext from '../utils/AppContext'
import { globalHistory } from '@reach/router'
import { Helmet } from 'react-helmet'

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
        <>
          <Helmet>
            <title>More than 1000 free icons | EOS Icons</title>
            <meta
              name='description'
              content='EOS icons are open source and they are fully customizable. Available as a ligature font face, SVG, PNG, font, CDN, NPM, Rubygem.'
            />
            <meta
              name='keywords'
              content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
            />
          </Helmet>
          <div>
            <IconsSet action={manageHeader} />
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default Home
