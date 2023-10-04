import { ButtonHTMLAttributes, forwardRef } from 'react'

import { IconTypes } from '@icon'
import { Icon } from '@icon'

import cn from '@utils/cn'
import { VariantProps, cva } from 'class-variance-authority'

const buttonClass = cva(
  'flex items-center  cursor-pointer border text-[color:var(--color-tone-1)] bg-[color:var(--color-tone-7)] rounded-full min-h-[35px]',
  {
    variants: {
      variant: {
        default: 'border-[1px] border-[color:var(--color-tone-1)]',
        primary: '',
      },
      modifier: {
        outline: '',
      },
      size: {
        sm: 'px-[25px] text-xs',
        md: 'px-[2rem]  text-sm ',
        lg: 'px-[2.4rem] text-md ',
      },
      disabled: {
        true: 'cursor-not-allowed',
      },
      onlyIcon: {
        true: 'border-none p-0 justify-center',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonClass> {
  onlyIcon?: boolean
  icon?: Partial<IconTypes>
  loader?: boolean
  leftIcon?: IconTypes
  rightIcon?: IconTypes
  label?: string
  disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onlyIcon,
      loader,
      leftIcon,
      rightIcon,
      variant,
      size = 'md',
      modifier,
      disabled,
      icon,
      label,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        disabled={disabled || loader}
        className={cn(
          buttonClass({
            className,
            onlyIcon,
            disabled,
            variant,
            modifier,
            size,
          })
        )}
        ref={ref}
        {...rest}
      >
        {onlyIcon && (
          <>
            {loader ? (
              <Icon className="h-5 w-5 md:h-7 md:w-7" icon="stats" />
            ) : (
              <Icon
                className={cn(
                  'h-5 w-5 md:h-7 md:w-7',
                  icon === 'settings' && 'h-7 w-7'
                )}
                icon={icon}
              />
            )}
          </>
        )}
        {leftIcon ? (
          <>
            {loader ? (
              <Icon className="h-[28px] w-[28px]" icon="stats" />
            ) : (
              <Icon className="h-[28px] w-[28px]" icon={leftIcon} />
            )}
            <p>{label}</p>
          </>
        ) : null}
        {rightIcon ? (
          <>
            <p>{label}</p>
            {loader ? (
              <Icon className="h-[28px] w-[28px]" icon="stats" />
            ) : (
              <Icon
                className={cn('h-[28px] w-[28px]', {
                  'h-[20px] w-[20px]': rightIcon === 'share',
                })}
                icon={rightIcon}
              />
            )}
          </>
        ) : null}
        <p>{label}</p>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
