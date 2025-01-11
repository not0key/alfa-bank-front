import { AuthForm } from "@/components"

import st from './AuthPage.module.less'

const AuthPage = () => {
  return(
    <div className={st.container}>
      <img src="/public/AlfaBankLogo.png" alt="logo"  className={st.logo}/>
      <AuthForm />
    </div>
  )
}

export default AuthPage