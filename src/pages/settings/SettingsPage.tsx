import { Title } from '@/components'
import st from './SettingsPage.module.less'
import { useNavigate } from 'react-router-dom'
import { ROUTE_URL } from '@/shared/constants/routes'

const SettingsPage = () => {
  const navigate = useNavigate()

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
        Артур
      </div>
      <div className={st.data}>
        <span>Фамилия:</span>
        Иманкулов
      </div>
      <div className={st.data}>
        <span>Почта:</span>
        arturimankulov906@gmail.com
      </div>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}

export default SettingsPage