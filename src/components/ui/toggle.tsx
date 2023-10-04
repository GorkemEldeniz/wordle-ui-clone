import { LabelHTMLAttributes, useState } from 'react'
import cn from '@utils/cn'

interface ToggleProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function Toggle({ htmlFor, className, ...rest }: ToggleProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <label
      htmlFor={htmlFor}
      {...rest}
      className={cn(
        'relative h-[20px] w-8 cursor-pointer rounded-full bg-[color:var(--color-tone-3)]',
        active && 'bg-[color:var(--green)]',
        className
      )}
    >
      <input
        value={active ? 'on' : 'off'}
        onChange={() => setActive(!active)}
        id={htmlFor}
        className="peer sr-only"
        type="checkbox"
      />
      <span className="absolute left-[2px] top-[2px] h-4 w-[50%] rounded-full bg-[color:var(--white)] duration-100 ease-linear peer-checked:left-[14px]"></span>
    </label>
  )
}

export default Toggle
