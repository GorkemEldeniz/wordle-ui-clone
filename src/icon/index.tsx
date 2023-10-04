import cn from '@utils/cn'

export const iconPaths = [
  'hamburger',
  'info',
  'stats',
  'settings',
  'logo',
  'close',
  'share',
  'del',
] as const

export type IconTypes = (typeof iconPaths)[number] | undefined

interface IIcon extends React.ComponentPropsWithoutRef<'svg'> {
  icon: IconTypes
}
export function Icon({ icon, className, ...props }: IIcon) {
  return (
    <svg {...props} className={cn('object-contain', className)}>
      <use href={`/assets/base.svg#${icon}`} />
    </svg>
  )
}
