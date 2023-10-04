import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import NavBar from '@components/Navbar'

import { useAppSelector } from '@libs/Modal/hook'

import ModalWrapper from '@components/Navbar/ModalWrapper'

import cn from '@utils/cn'

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false)

  const CurrentModal = useAppSelector((state) => state.currentModal)

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn({
          'fixed left-0 top-0 h-full w-full': isOpen,
          'bg-[color:var(--modal-bg-color)]':
            isOpen && CurrentModal?.name !== 'hamburger',
        })}
      >
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
          <CurrentModal.element isOpen={isOpen} setIsOpen={setIsOpen} />
        </ModalWrapper>
      </div>
      <Outlet />
    </>
  )
}

export default MainLayout
