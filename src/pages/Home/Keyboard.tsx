import { Icon } from '@icon'

import cn from '@utils/cn'

const keysArray = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'enter',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'del',
]

function Keyboard() {
  const cellStyle =
    'text-[20px] font-bold text-[color:var(--color-tone-1)] dark:bg-[color:var(--color-tone-2)] bg-[color:var(--color-tone-4)] h-[58px] rounded flex items-center justify-center uppercase flex-1'

  return (
    <div className="sm:px-none mx-auto flex w-full max-w-[484px] flex-col gap-2 px-2">
      <div className="flex gap-[6px]">
        {keysArray.slice(0, 10).map((key) => (
          <span className={cellStyle} key={key}>
            {key}
          </span>
        ))}
      </div>

      <div className="flex gap-[6px] px-[21px]">
        {keysArray.slice(10, 19).map((key) => (
          <span className={cellStyle} key={key}>
            {key}
          </span>
        ))}
      </div>

      <div className="grid grid-flow-col gap-[6px]">
        {keysArray.slice(19, keysArray.length).map((key) => (
          <span
            className={cn(
              cellStyle,
              key === 'enter' && 'col-span-2 text-[12px]',
              key === 'del' && 'col-span-2'
            )}
            key={key}
          >
            {key === 'del' ? <Icon className="h-5 w-5" icon="del" /> : key}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Keyboard
