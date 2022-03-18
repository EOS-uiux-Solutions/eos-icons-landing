import React, { useState, useEffect } from 'react'
import AppContext from '../utils/AppContext'
import { Helmet } from 'react-helmet'

import IconsSet from '../modules/IconsSet'
import scrollToTop from '../utils/scrollToTop'

const Home = (props) => {
  const [header, setHeader] = useState(true)

  useEffect(() => {
    scrollToTop()
  }, [])

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
              content='EOS icons are open source and they are fully customizable. Available as a ligature-based font face, SVG, PNG, font, CDN, NPM, Rubygem.'
            />
            <meta
              name='keywords'
              content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
            />
          </Helmet>
          <div>
            <IconsSet action={manageHeader} container={props.container} />
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default Home
