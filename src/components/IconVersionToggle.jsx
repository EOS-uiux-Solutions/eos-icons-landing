import React, { useState, useEffect, useContext } from 'react'
import LocalStorage from '../utils/LocalStorage'
import AppContext from '../utils/AppContext'

const isSelected = (item, state) => {
  return item === state
}

const IconVersionToggle = () => {
  const [selected, setSelected] = useState(
    LocalStorage.read('icons-theme') ?? 'filled'
  )

  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    try {
      const isStored = LocalStorage.read('icons-theme')
      if (isStored !== selected) {
        LocalStorage.write('icons-theme', selected)
      }

      dispatch({ type: 'SET_ICONS_THEME', action: selected })
    } catch (error) {
      LocalStorage.write('icons-theme', selected)
    }
  }, [dispatch, selected])

  return (
    <div className='icon-version-wrapper'>
      <p>Switch theme:</p>
      <div className='icon-version-toggle'>
        <span
          className={isSelected('filled', selected) ? 'active' : undefined}
          onClick={() => {
            setSelected('filled')
            LocalStorage.write('icons-theme', selected)
          }}
        >
          <svg
            style={{ width: '24px' }}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path
              className='path'
              d='M4,20H20v2H4V20ZM21,5a1,1,0,0,0-1,1,.89864.89864,0,0,0,.064.3317,1.10437,1.10437,0,0,0,.16656.283L18.11185,8.30734,15.9931,10,14.24042,6.92749,12.48773,3.855a1.045,1.045,0,0,0,.36888-.35287A.94573.94573,0,0,0,13,3a1,1,0,1,0-2,0,.94552.94552,0,0,0,.14329.50187,1.0457,1.0457,0,0,0,.36855.35287L9.757,6.92737,8.00214,10,5.88565,8.30753,3.76917,6.61505a1.10382,1.10382,0,0,0,.16675-.28313A.8989.8989,0,0,0,4,6,1,1,0,1,0,3,7a.14725.14725,0,0,0,.04121-.00735A.21241.21241,0,0,1,3.082,6.98346l.459,5.50827L4,18H20l.459-5.50827.459-5.50827a.21241.21241,0,0,1,.04076.00919A.14725.14725,0,0,0,21,7a1,1,0,1,0,0-2Z'
            />
          </svg>
        </span>
        <span
          className={isSelected('outlined', selected) ? 'active' : undefined}
          onClick={() => {
            setSelected('outlined')
            LocalStorage.write('icons-theme', selected)
          }}
        >
          <svg
            style={{ width: '24px' }}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <rect x='3' y='20' width='18' height='2' />
            <path
              className='path'
              d='M21,19H3L2.14746,7.80908A2,2,0,1,1,5,6a1.9143,1.9143,0,0,1-.02393.2998l2.73731,2.189,2.562-4.48584A1.94763,1.94763,0,0,1,10,3a2,2,0,0,1,4,0,1.946,1.946,0,0,1-.27637,1.00391l2.5586,4.48486,2.74121-2.18994A1.90627,1.90627,0,0,1,19,6a2,2,0,1,1,2.85254,1.80908ZM4.91992,17H19.08008l.73047-8.77L15.7041,11.51123,11.99951,5.01709l-3.709,6.49414L4.18945,8.23193Z'
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default IconVersionToggle
