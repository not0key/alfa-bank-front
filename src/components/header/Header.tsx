import { IoMdSettings } from "react-icons/io";

import st from './Header.module.less'
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@/shared/constants/routes";

const Header = () => {
  return (
    <div className={st.header}>
      {/* <div> */}
        <img src="/src/assets/images/AlfaBankLogo.png" alt="logo" className={st.logo}/>
      
      <div className={st.tabs}>
        <Link to={ROUTE_URL.HOME} className={st.tab}>
          Авто-тесты
        </Link>
        <Link to={ROUTE_URL.RESULTS} className={st.tab}>
          Результаты
        </Link>
        <Link to={ROUTE_URL.DOCUMENTATION} className={st.tab}>
          Помощь
        </Link>
      </div>
      <div className={st.control}>
        <Link to={ROUTE_URL.SETTINGS}>
          <IoMdSettings size={30}/>
        </Link>
        <div className={st.user}>
          Иманкулов Артур
        </div>
      </div>
    </div>
  )
}

export default Header