import { FC, ReactNode } from 'react'

import { Header } from '@/components'
  
import st from './Layout.module.less'

interface ILayout {
  children?: ReactNode
}

const Layout: FC<ILayout> = ({children}) => {
  return(
    <div className={st.layout}>
      <Header />
      <div className={st.content}>{children}</div>
    </div>
  )
}

export default Layout