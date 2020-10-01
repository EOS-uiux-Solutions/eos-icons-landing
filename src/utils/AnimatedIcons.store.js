import eosIcons from 'eos-icons/dist/js/eos-icons.json'
const AnimatedIconsList = eosIcons
  .filter((ele) => ele.type === 'animated')
  .map((icon) => icon.name)

export default AnimatedIconsList
