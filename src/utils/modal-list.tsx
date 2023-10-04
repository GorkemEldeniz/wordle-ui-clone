import HamburgerModal from '@components/Navbar/HamburgerModal'
import InfoModal from '@components/Navbar/InfoModal'
import StatModal from '@components/Navbar/StatModal'
import SettingsModal from '@components/Navbar/SettingsModal'

const Modals = [
  {
    name: 'hamburger',
    element: HamburgerModal,
  },
  {
    name: 'info',
    element: InfoModal,
  },
  {
    name: 'stats',
    element: StatModal,
  },
  {
    name: 'settings',
    element: SettingsModal,
  },
]

export default Modals
