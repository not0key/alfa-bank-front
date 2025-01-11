import { IoMdSettings } from "react-icons/io";

import st from './Header.module.less'
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@/shared/constants/routes";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { selectCurrentUser } from "@/store/auth/auth.selectors";
import { useEffect } from "react";
import { fetchCurrentUser } from "@/store/auth/auth.action";

const Header = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

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
          {user?.lastName} {user?.firstName}
        </div>
      </div>
    </div>
  )
}

export default Header