import { IoMdSettings } from "react-icons/io";

import st from './Header.module.less'
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@/shared/constants/routes";

const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.logo}>
        Logo
      </div>
      <div className={st.tabs}>
        <Link to={ROUTE_URL.HOME} className={st.tab}>
          Авто-тесты
        </Link>
        <div className={st.tab}>
          Результаты
        </div>
        <div className={st.tab}>
          Помощь
        </div>
      </div>
      <div className={st.control}>
        <IoMdSettings size={30}/>
        <div className={st.user}>
          Иманкулов Артур
        </div>
      </div>
    </div>
  )
}

export default Header