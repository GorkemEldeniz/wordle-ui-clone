import { ModalProps } from './HamburgerModal'

import cn from '@utils/cn'

import { Icon } from '@icon'

import Cell from './Cell'

import { presentSample, correctSample, absentSample } from '@utils/info-letters'

function InfoModal(props: ModalProps) {
  return (
    <div
      className={cn(
        'info-modal-shadow easy-in absolute -bottom-[100%] left-[50%] h-screen w-full max-w-[520px] translate-x-[-50%] rounded-lg bg-[color:var(--color-tone-7)] text-[color:var(--color-tone-1)] opacity-0 duration-[200ms] sm:h-fit',
        props.isOpen && 'opacity-1 bottom-0 sm:bottom-[100px]',
        !props.isOpen && ' -bottom-[100%] opacity-0'
      )}
    >
      <div className="relative p-[32px]">
        <Icon
          icon="close"
          className="absolute right-4 top-4 h-[20px] w-[20px] cursor-pointer"
          onClick={() => props.setIsOpen(false)}
        />
        <h1 className="mb-[4px] mt-[29px] text-left text-[28px] font-bold leading-[30px]">
          How To Play
        </h1>
        <h3 className="text-[20px] font-thin leading-6">
          Guess the Wordle in 6 tries.
        </h3>
        <ul className="my-[16px] list-disc pl-[20px] font-[500] leading-5">
          <li className="mb-1 font-thin">
            Each guess must be a valid 5-letter word.
          </li>
          <li className="mb-1 font-thin">
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>

        <p className="text-base font-bold leading-5">Examples</p>

        <div className="mb-5 mt-2">
          {correctSample.map((correct, index) => (
            <Cell
              isOpen={props.isOpen}
              key={index}
              letter={correct.letter}
              result={correct.result}
            />
          ))}
          <p className="mt-2">
            <strong>W</strong> is in the word and in the correct spot.
          </p>
        </div>

        <div className="mb-5 mt-2">
          {presentSample.map((present, index) => (
            <Cell
              isOpen={props.isOpen}
              key={index}
              letter={present.letter}
              result={present.result}
            />
          ))}
          <p className="mt-2">
            <strong>I</strong> is in the word but in the wrong spot.
          </p>
        </div>

        <div className="mb-5 mt-2">
          {absentSample.map((absent, index) => (
            <Cell
              isOpen={props.isOpen}
              key={index}
              letter={absent.letter}
              result={absent.result}
            />
          ))}
          <p className="mt-2">
            <strong>U</strong> is not in the word in any spot.
          </p>
        </div>

        <div className="mb-5 flex items-center border-y-[1px] border-y-[#cccccc] py-[17px] ">
          <img
            className="mr-[10px] h-[33px] w-[33px]"
            src="https://www.nytimes.com/games-assets/v2/assets/wordle/page-icons/icon-mini-stats-check.svg"
            alt="page-icons"
          />
          <p className="pb-[3px] font-thin leading-5 text-[#477aaa]">
            Link your stats to your NYT account.
          </p>
        </div>

        <p className="leading-5">
          A new puzzle is released daily at midnight. If you haven’t already,
          you can <span className="text-[#477aaa]">sign up</span> for our daily
          reminder email.
        </p>
      </div>
    </div>
  )
}

export default InfoModal
