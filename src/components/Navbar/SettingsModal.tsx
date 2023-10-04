import useTheme from '@helpers/useTheme'

import { ModalProps } from './HamburgerModal'

import { useClickAway } from '@uidotdev/usehooks'

import cn from '@utils/cn'

import { Icon } from '@icon'

import Toggle from '@components/ui/toggle'

function SettingsModal(props: ModalProps) {
  let { theme, handleTheme } = useTheme()

  const ref = useClickAway<HTMLDivElement>(() => {
    props.setIsOpen(false)
  })

  const handleThemeChange = (e: any) => {
    const theme = e.target.checked ? 'dark' : 'ligth'
    handleTheme(theme)
  }

  return (
    <div
      ref={ref}
      className={cn(
        'info-modal-shadow  easy-in  absolute -bottom-[100%] left-[50%] flex w-full max-w-[520px] translate-x-[-50%] flex-col rounded-lg bg-[color:var(--color-tone-7)] leading-none text-[color:var(--color-tone-1)] opacity-0 duration-[200ms]',
        props.isOpen && 'opacity-1   bottom-0 sm:bottom-[200px]',
        !props.isOpen && '-bottom-[100%] opacity-0'
      )}
    >
      <div className="relative p-4">
        <h2 className="mb-[15px] text-center font-bold uppercase tracking-[.5px]">
          Settings
        </h2>

        <Icon
          icon="close"
          className="absolute right-4 top-4 h-[20px] w-[20px] cursor-pointer"
          onClick={() => props.setIsOpen(false)}
        />

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">Hard Mode</h3>
            <p className="text-[12px] font-thin text-[color:var(--color-tone-2)]">
              Any revealed hints must be used in subsequent guesses
            </p>
          </div>
          <Toggle />
        </div>

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">Dark Theme</h3>
          </div>

          <input
            checked={theme === 'dark'}
            onChange={handleThemeChange}
            id="theme"
            className="peer sr-only"
            type="checkbox"
          />
          <label
            htmlFor="theme"
            className="relative h-[20px] w-8 cursor-pointer rounded-full bg-[color:var(--color-tone-3)] ease-linear 
            before:absolute before:left-[2px] before:top-[2px] before:h-4 before:w-[50%] before:rounded-full before:bg-[color:var(--white)] before:duration-100 peer-checked:bg-[color:var(--green)] peer-checked:before:left-[14px]
            "
          ></label>
        </div>

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">High Contrast Modee</h3>
            <p className="text-[12px] font-thin text-[color:var(--color-tone-2)]">
              For improved color vision
            </p>
          </div>
          <Toggle />
        </div>

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">Feedback</h3>
          </div>
          <div className="font-thin text-[color:var(--color-tone-2)]">
            Email
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">Report a Bug</h3>
          </div>
          <div className="font-thin text-[color:var(--color-tone-2)]">
            Email
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">Community</h3>
          </div>
          <div className="font-thin text-[color:var(--color-tone-2)]">
            Wordle Review
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-b-[#dfdfdf] py-4">
          <div>
            <h3 className="text-[18px] leading-none">Questions?</h3>
          </div>
          <div className="font-thin text-[color:var(--color-tone-2)]">FAQ</div>
        </div>

        <div className="flex items-center justify-between py-4 text-[12px] font-thin text-[color:var(--color-tone-2)]">
          <div>© 2023 The New York Times Company</div>
          <div>#832</div>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
