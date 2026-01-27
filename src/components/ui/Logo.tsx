import type { ReactNode } from 'react'

const Logo = ({ children }: { children : ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Logo