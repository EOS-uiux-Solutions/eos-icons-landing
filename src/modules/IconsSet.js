import React, { useState, useEffect } from 'react'
import AppContext from '../utils/AppContext'

/* Components */
import Icon from '../components/IconDisplay'
import Tabs from '../components/Tabs'
import Toogle from '../components/Toggle'
import CustomizeIconsPanel from '../components/CustomizeIconsPanel'
import AnimatedIcons from './AnimatedIcons'
import HowTo from '../components/HowToPanel'
import { eosIconsState } from '../utils/EosIcons.store'
import PageHeader from '../components/PageHeader'

const IconsSet = (props) => {
  const selectIcon = (icon, callback) => {
    setShowPanel(icon !== iconSelected)
    setIconSelected(icon === iconSelected ? '' : icon)
    window.history.replaceState(
      '',
      'EOS Icons',
      `${window.location.pathname}?iconName=${icon.name}`
    )
    return callback
  }

  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    props.action()
    return callback
  }

  // show HowTo panel
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)

  const [tab, setActiveTab] = useState('Static Icons')

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const urlIconName = urlParams.get('iconName')

  useEffect(() => {
    if (urlIconName) {
      const iconDetails = eosIconsState.icons.filter(
        (icon) => icon.name === urlIconName
      )
      if (iconDetails.length) {
        setShowPanel(true)
        setIconSelected({ name: urlIconName, tags: iconDetails[0].tags })
      }
    }
  }, [urlIconName])

  const closeHowTo = () => {
    setShowPanel(false)
    setIconSelected('')
    window.history.replaceState('', 'EOS Icons', `${window.location.pathname}`)
  }

  // Mark icon as active
  const isActive = (current, appState) => {
    if (appState.customize) {
      return appState.multipleIcons.indexOf(current) >= 0
    } else {
      return current === iconSelected.name
    }
  }

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <>
          <PageHeader>
            <h1>More than 1000 free icons</h1>
            <div className='icons-control'>
              <div className='icons-control-search'>
                <i className='eos-icons'>search</i>
                <input
                  className='search-input'
                  type='text'
                  name='search'
                  onChange={(event) =>
                    dispatch({
                      type:
                        tab === 'Static Icons'
                          ? 'TOGGLE_SEARCH_REGULAR_ICONS'
                          : 'TOGGLE_SEARCH_ANIMATED_ICONS',
                      search: event.target.value
                    })
                  }
                />
              </div>
              <div className='icons-control-toggle'>
                <Toogle
                  name='Select multiple'
                  id='js-icon-picker'
                  onClick={() =>
                    toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE' }))
                  }
                />
              </div>
            </div>
            <div className='icon-information'>
              {!state.customize ? (
                <div className='how-to-use-block'>
                  <HowTo
                    show={showPanel}
                    iconName={iconSelected.name}
                    iconTags={iconSelected.tags}
                    type='static'
                    close={closeHowTo}
                  />
                </div>
              ) : (
                <div className='how-to-use-block'>
                  <CustomizeIconsPanel
                    selectAll={() => dispatch({ type: 'ADD_ALL_ICONS' })}
                    deselectAll={() => dispatch({ type: 'REMOVE_ALL_ICONS' })}
                  />
                </div>
              )}
            </div>
          </PageHeader>
          <div className='container icons-set'>
            <Tabs
              setTab={setActiveTab}
              customize={state.customize}
              showPanel={showPanel}
            >
              <div label='Static Icons'>
                <div className='icons-list' style={{ flexDirection: 'column' }}>
                  {state.iconsCategory.map((categoryObject, index) => {
                    return categoryObject.icons.length > 0 ? (
                      <div className='icons-list-category' key={index}>
                        <div className='icons-list-category-icons'>
                          {categoryObject.icons.map((icon, i) => (
                            <Icon
                              size={36}
                              active={isActive(icon.name, state)}
                              key={i}
                              name={icon.name}
                              action={() =>
                                selectIcon(
                                  icon,
                                  dispatch({
                                    type: state.customize
                                      ? 'ADD_MULTIPLE_ICONS'
                                      : '',
                                    selection: icon.name
                                  })
                                )
                              }
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      ''
                    )
                  })}
                </div>
              </div>
              <div label='Animated Icons'>
                <div className='total-icons'>
                  <strong>
                    <b>Total icons: {state.animatedIcons.length}</b>
                  </strong>
                </div>
                <div className='icons-list'>
                  <AnimatedIcons animatedIconsList={state.animatedIcons} />
                </div>
              </div>
            </Tabs>
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

// TODO: Add the upload json functionality
// {
//   <div>
//   <h2>Click on Icons to select them</h2>
//   <p>
//     To continue building an old font, upload icons-config.json
//                 </p>
//   <label className='btn btn-default upload' htmlFor='upload-file'>
//     <i className='eos-icons eos-18'>cloud_upload</i>
//                   Upload JSON
//                 </label>
//   <input
//     type='file'
//     id='upload-file'
//     hidden
//     name='file'
//     onChange={(event) => search(event.target.files[0], dispatch)}
//   />
// </div>
// }

// const search = (file, dispatch) => {
//   const fileReader = new window.FileReader()

//   fileReader.onload = function (fileData) {
//     const iconsArray = JSON.parse(fileData.target.result)
//     let data = []
//     try {
//       // works for both versions for now
//       if (Object.prototype.hasOwnProperty.call(iconsArray, 'icons'))
//         data = iconsArray.icons
//       if (Object.prototype.hasOwnProperty.call(iconsArray, 'extended_icons'))
//         data = iconsArray.extended_icons
//       return dispatch({
//         type: 'UPLOAD_PREVIOUS_SELECTION',
//         data: data
//       })
//     } catch (error) {
//       alert('JSON file seems to be incorrect')
//     }
//   }
//   return fileReader.readAsText(file)
// }
export default IconsSet
