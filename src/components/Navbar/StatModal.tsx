import cn from '@utils/cn'

import { ModalProps } from './HamburgerModal'

import { Icon } from '@icon'

import Button from '@components/ui/button'

function StatModal(props: ModalProps) {
  return (
    <div
      className={cn(
        'info-modal-shadow easy-in absolute -bottom-[100%] left-[50%] h-fit w-full max-w-[518px] translate-x-[-50%] rounded-lg bg-[color:var(--color-tone-7)]  text-[color:var(--color-tone-1)] opacity-0 duration-[200ms]',
        props.isOpen && 'opacity-1 bottom-0 sm:bottom-[200px]',
        !props.isOpen && '-bottom-[100%] opacity-0'
      )}
    >
      <div className="relative flex flex-col items-start p-4 pt-8">
        <Icon
          icon="close"
          width="20"
          height="20"
          className="absolute right-4 top-4 h-[20px] w-[20px] cursor-pointer"
          onClick={() => props.setIsOpen(false)}
        />
        <h2 className="w-[250px] self-center pt-[50px] text-[14px] font-bold uppercase">
          Statistics
        </h2>

        <ul className="mb-[10px] flex w-[320px] self-center">
          <li className="ml-3 flex-1 text-center">
            <div className="text-[44px] leading-none">0</div>
            <div className="text-[10px] font-thin leading-[14px] tracking-[.1em]">
              Played
            </div>
          </li>
          <li className="ml-3 flex-1 text-center">
            <div className="text-[44px] leading-none">0</div>
            <div className="text-[10px] font-thin leading-[14px] tracking-[.1em]">
              Win %
            </div>
          </li>
          <li className="ml-3 flex-1 text-center">
            <div className="text-[44px] leading-none">0</div>
            <div className="text-[10px] font-thin leading-[14px] tracking-[.1em]">
              Current Streak
            </div>
          </li>
          <li className="ml-3 flex-1 text-center">
            <div className="text-[44px] leading-none">0</div>
            <div className="text-[10px] font-thin leading-[14px] tracking-[.1em]">
              Max Streak
            </div>
          </li>
        </ul>

        <div className="mb-[10px] w-[250px] self-center">
          <h1 className="text-[14px] font-bold uppercase leading-[18px] tracking-[.05em]">
            Guess Distribution
          </h1>
          <div className="mb-[10px]">No Data</div>
        </div>

        <div className="flex w-[343px] self-center border-y border-y-[#dfdfdf] py-4">
          <img
            className="mr-[6px] h-[35px] w-[40px]"
            src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/WordleBot-Walking-Icon-Normalized.svg"
            alt="worlde-bot"
          />

          <p className="text-[14px] font-bold leading-[17.5px]">
            Wordlebot gives an analysis of your guesses.
            <br />
            <span className="font-thin underline">Did you beat the bot? ›</span>
          </p>
        </div>

        <div className="flex w-[343px] self-center border-b border-b-[#dfdfdf] py-4">
          <img
            className="mr-[6px] h-[35px] w-[40px]"
            src="https://www.nytimes.com/games-assets/v2/assets/wordle/page-icons/icon-mini-stats-check.svg"
            alt="worlde-bot"
          />
          <span className="flex items-center text-[14px] font-thin leading-[17.5px] underline ">
            Link these stats to your account.
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center p-4">
          <Button
            label="Share"
            rightIcon="share"
            className=" gap-[10px] border-none
             bg-[color:var(--green)] text-base font-bold leading-[20px] text-[color:var(--color-tone-7)]"
          />

          <div className="mt-5 flex w-[222px] items-center bg-[#f7da22] py-3">
            <img
              className="ml-2 h-[40px] w-[40px]"
              src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/SpellingBee-Icon-Normalized.svg"
              alt="Bee"
            />
            <span className="mt-1 text-[13px] font-bold leading-4 text-[#121212]">
              Play Today’s Spelling Bee
            </span>
            <span className="m-t-[15px] m-b-[5px] mx-auto text-[#0000FF]">
              ›
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatModal
