import React, { useContext } from 'react'
import AppContext from '../utils/AppContext'

export const TagSelector = ({ disabled }) => {
  const { state, dispatch } = useContext(AppContext)

  return (
    <div className={`category-filter ${disabled ? 'disabled' : ''}`}>
      <label htmlFor='tag'>Tags: </label>

      <select
        className={`custom-select ${disabled ? 'disabled' : ''}`}
        name='pets'
        id='tag'
        onChange={(e) => {
          dispatch({
            type: 'TOGGLE_ICON_TAGS',
            selection: e.target.value
          })
        }}
        disabled={disabled}
      >
        <option value='all'>All</option>

        {state.iconsTagsList.map((ele, i) => {
          return (
            <option key={i} value={ele}>
              {ele}
            </option>
          )
        })}
      </select>
    </div>
  )
}
