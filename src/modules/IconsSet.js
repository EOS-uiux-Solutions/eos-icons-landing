import React, { useState } from 'react'
import AppContext from '../utils/AppContext'

/* Components */
import Icon from '../components/IconDisplay'
import Tabs from '../components/Tabs'
import Toogle from '../components/Toggle'
import CustomizeIconsPanel from '../components/CustomizeIconsPanel'
import AnimatedIcons from './AnimatedIcons'
import HowTo from '../components/HowToPanel'

const IconsSet = props => {
  const selectIcon = (icon, callback) => {
    setShowPanel(icon !== iconSelected)
    setIconSelected(icon === iconSelected ? '' : icon)
    return callback
  }

  /* Toggle customizable functionality */
  const toggleCustomize = callback => {
    props.action()
    return callback
  }

  // show HowTo panel
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)

  const closeHowTo = () => {
    setShowPanel(false)
    setIconSelected('')
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
          <div className='toolbar'>
            <Toogle
              name='Icon picker'
              onClick={() =>
                toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE' }))
              }
            />
            <input
              className='search-input'
              type='text'
              name='search'
              placeholder='Search Icons...'
              onChange={event =>
                dispatch({ type: 'TOGGLE_SEARCH', search: event.target.value })
              }
            />
          </div>
          <Tabs>
            <div label='Regular Icons'>
              <div className='icons-list'>
                {state.icons.map((ele, index) => {
                  return (
                    <Icon
                      size={36}
                      active={isActive(ele.name, state)}
                      key={index}
                      name={ele.name}
                      action={() =>
                        selectIcon(
                          ele,
                          dispatch({
                            type: state.customize ? 'ADD_MULTIPLE_ICONS' : '',
                            selection: ele.name
                          })
                        )
                      }
                    />
                  )
                })}
              </div>
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
            <div label='Animated Icons'>
              <div className='icons-list'>
                <AnimatedIcons />
              </div>
            </div>
          </Tabs>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default IconsSet
