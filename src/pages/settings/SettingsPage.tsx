import { Title } from '@/components'
import st from './SettingsPage.module.less'
import { useNavigate } from 'react-router-dom'
import { ROUTE_URL } from '@/shared/constants/routes'
import { useAppSelector } from '@/shared/hooks/redux'
import { selectCurrentUser } from '@/store/auth/auth.selectors'

const SettingsPage = () => {
  const navigate = useNavigate()
  const user = useAppSelector(selectCurrentUser)

  const handleLogout = async () => {
    const isLogout = confirm("Вы точно хотите выйти с аккаунта?")

    if (isLogout) {
      navigate(ROUTE_URL.LOGIN)
    }
  }

  return(
    <div className={st.container}>
      <Title>Персональные данные</Title>
      <div className={st.data}>
        <span>Имя:</span>
        {user?.firstName}
      </div>
      <div className={st.data}>
        <span>Фамилия:</span>
        {user?.lastName}
      </div>
      <div className={st.data}>
        <span>Почта:</span>
        {user?.email}
      </div>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}

export default SettingsPage