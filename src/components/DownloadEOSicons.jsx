import React from 'react'
import axios from 'axios'
import Button from '../components/Button'

const getEOSIconsVersion = async () => {
  const eosIconsPackage = await axios.get(
    'https://cdn.jsdelivr.net/npm/eos-icons/package.json'
  )

  window.open(
    `https://registry.npmjs.org/eos-icons/-/eos-icons-${eosIconsPackage.data.version}.tgz`,
    '_blank'
  )
}

const downloadEOSicons = () => {
  return <Button onClick={getEOSIconsVersion}>Download EOS Icons</Button>
}

export default downloadEOSicons
