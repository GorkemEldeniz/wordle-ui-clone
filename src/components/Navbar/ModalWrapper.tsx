import { useClickAway } from '@uidotdev/usehooks'

import { ComponentPropsWithRef } from 'react'

interface ModalWrapperProps extends ComponentPropsWithRef<'div'> {
  isOpen: boolean
  setIsOpen: (params: boolean) => void
}

function ModalWrapper(props: ModalWrapperProps) {
  const ref = useClickAway<HTMLDivElement>(() => {
    props.setIsOpen(false)
  })

  return <div ref={ref}>{props.children}</div>
}

export default ModalWrapper
