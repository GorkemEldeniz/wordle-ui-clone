import games from '@utils/games-list'
import times from '@utils/times-list'

import cn from '@utils/cn'

import { Icon } from '@icon'

import Button from '@components/ui/button'

export interface ModalProps {
  isOpen: boolean
  setIsOpen: (params: boolean) => void
}

function HamburgerModal(props: ModalProps) {
  return (
    <div
      className={cn(
        'hamburger-modal-shadow absolute left-[-100%] top-[41px] h-[600px] w-full overflow-y-auto bg-[color:var(--color-tone-7)] text-[color:var(--color-tone-1)] duration-[300ms] ease-linear  sm:top-[67px] sm:w-fit',
        props.isOpen && 'left-0',
        !props.isOpen && 'left-[-100%]'
      )}
    >
      <div className="relative">
        <header className="flex justify-between px-[18px] pt-[18px]">
          <Icon icon="logo" width="95" height="18" />
          <Icon
            icon="close"
            width="20"
            height="20"
            className="cursor-pointer"
            onClick={() => props.setIsOpen(false)}
          />
        </header>

        <p className="text- mb-[24px] mt-[32px] px-[18px] text-[12px] font-bold uppercase leading-[12px]">
          More From New York Times Games
        </p>

        <ol>
          {games.map((game, index) => (
            <li
              className="flex h-[40px] cursor-pointer items-center px-[18px] hover:bg-[color:var(--color-nav-hover)]"
              key={index}
            >
              {game.image ? (
                <img
                  className="mr-[10px] h-[20px] w-[28px] pr-[8px]"
                  src={game.image}
                  alt={game.name}
                />
              ) : (
                <span className="mr-[10px] h-[20px] w-[28px] pr-[8px] font-[500]"></span>
              )}
              <span>{game.name}</span>
            </li>
          ))}
        </ol>
        <div className="my-[8px] px-[18px]">
          <hr />
        </div>
        <ol>
          {times.map((time, index) => (
            <li
              className="flex h-[40px] cursor-pointer items-center px-[18px] hover:bg-[color:var(--color-nav-hover)]"
              key={index}
            >
              {time.image ? (
                <img
                  className="mr-[10px] h-[20px] w-[28px] pr-[8px]"
                  src={time.image}
                  alt={time.name}
                />
              ) : (
                <span className="mr-[10px] h-[20px] w-[28px] pr-[8px] font-[500]"></span>
              )}
              <span>{time.name}</span>
            </li>
          ))}
        </ol>
        <div className="my-[8px] px-[18px]">
          <hr />
        </div>

        <p className="flex h-[40px] items-center px-[18px] text-[14px] font-thin">
          Privacy Policy
        </p>
        <div className="profile-shadow sticky bottom-0 left-0 border-t-[1px] border-[color:var(--color-tone-1)] bg-[color:var(--color-tone-7)] py-[5px]">
          <h2 className="my-[16px] px-[10px]  text-[12px] font-bold uppercase tracking-widest">
            Profile
          </h2>
          <p className="cursor-pointer px-[10px] py-[16px] text-[16px] font-thin hover:bg-[color:var(--color-nav-hover)]">
            Account details.
          </p>
          <div className="flex gap-[8px] px-[10px] py-[8px]">
            <Button
              label="Subscribe"
              className="h-[39px] flex-grow justify-center rounded-sm bg-[color:var(--color-tone-1)] px-[33px] text-[12px] font-bold uppercase tracking-wide text-[color:var(--color-tone-7)] hover:opacity-50"
            />
            <Button
              label="Log Out"
              className="h-[39px] flex-grow justify-center rounded-sm bg-[color:var(--color-tone-7)] px-[33px] text-[12px] font-bold uppercase tracking-wide text-[color:var(--color-tone-1)] hover:opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HamburgerModal
