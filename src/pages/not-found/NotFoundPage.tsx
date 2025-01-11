import { Link } from 'react-router-dom'
import st from './NotFoundPage.module.less'
import { ROUTE_URL } from '@/shared/constants/routes'

const NotFoundPage = () => {
  return(
    <div className={st.error}>
      <h1>Такой страницы нет</h1>
        <p>Кажется что-то пошло не так! Страница, которую вы запрашиваете не существует.
          Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.
        </p>
        <div className={st.link}>
          <Link to={ROUTE_URL.HOME}>Перейти на главную</Link>
        </div>
    </div>
  )
}

export default NotFoundPage