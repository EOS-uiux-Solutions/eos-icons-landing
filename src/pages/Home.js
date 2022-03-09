import React, { useState, useEffect, useContext } from 'react'
import AppContext from '../utils/AppContext'
import { globalHistory } from '@reach/router'
import { Helmet } from 'react-helmet'

import IconsSet from '../modules/IconsSet'
import scrollToTop from '../utils/scrollToTop'

const Home = (props) => {
  const [header, setHeader] = useState(true)
  const { state, dispatch } = useContext(AppContext)
  const payload = React.useRef(null)

  useEffect(() => {
    return globalHistory.listen(() =>
      state.customize ? dispatch({ type: 'TOGGLE_CUSTOMIZE' }) : ''
    )
  })

  useEffect(() => {
    scrollToTop()
  }, [])

  const manageHeader = () => {
    setHeader(!header)
  }

  useEffect(() => {
    props.payload.current = payload.current
  }, [props.payload])

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <>
          <Helmet>
            <title>More than 1000 free icons | EOS Icons</title>
            <meta
              name='description'
              content='EOS icons are open source and they are fully customizable. Available as a ligature-based font face, SVG, PNG, font, CDN, NPM, Rubygem.'
            />
            <meta
              name='keywords'
              content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
            />
          </Helmet>
          <div>
            <IconsSet action={manageHeader} payload={payload} />
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default Home
