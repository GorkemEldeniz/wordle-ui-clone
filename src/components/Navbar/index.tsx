import Button from '@components/ui/button'

import { useAppDispatch } from '@libs/Modal/hook'

import { setModal } from '@libs/Modal'

interface NavBarProps {
  isOpen: boolean
  setIsOpen: (params: boolean) => void
}

function NavBar({ isOpen, setIsOpen }: NavBarProps) {
  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true)
    }
  }

  return (
    <div className="relative flex h-[41px] items-center justify-between border-b-[1px] border-b-[color:var(--color-tone-4)] bg-[color:var(--color-tone-7)] px-[20px] sm:h-[66px]">
      <Button
        onClick={() => {
          dispatch(setModal('hamburger'))
          handleOpenModal()
        }}
        onlyIcon
        className="pr-2 pt-[2px]"
        icon="hamburger"
      />
      <div className="flex-1">
        <h1 className="md:center text-left font-nyt-karnakcondensed text-3xl font-bold tracking-wider text-[color:var(--color-tone-1)]">
          Wordle
        </h1>
      </div>
      <ol className="flex">
        <li>
          <Button
            onClick={() => {
              dispatch(setModal('info'))
              handleOpenModal()
            }}
            className="h-[35px] px-[6px]"
            onlyIcon
            icon="info"
          />
        </li>
        <li>
          <Button
            onClick={() => {
              dispatch(setModal('stats'))
              handleOpenModal()
            }}
            className="h-[35px] px-[6px]"
            onlyIcon
            icon="stats"
          />
        </li>
        <li>
          <Button
            onClick={() => {
              dispatch(setModal('settings'))
              handleOpenModal()
            }}
            className="h-[35px] px-[6px]"
            onlyIcon
            icon="settings"
          />
        </li>
      </ol>
      <Button
        label="Subscribe to game"
        className="ml-[10px]  px-[25px] text-[12px] font-semibold tracking-wide lg:ml-[30px] lg:text-[14px]"
      />
    </div>
  )
}

export default NavBar
