import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

import st from './Header.module.less';
import { ROUTE_URL } from "@/shared/constants/routes";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { selectCurrentUser } from "@/store/auth/auth.selectors";
import { useEffect } from "react";
import { fetchCurrentUser } from "@/store/auth/auth.action";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={st.header}>
      <img src="/public/AlfaBankLogo.png" alt="logo" className={st.logo} />

      <div className={st.tabs}>
        <NavLink
          to={ROUTE_URL.HOME}
          className={({ isActive }) => `${st.tab} ${isActive ? st.active : ""}`}
        >
          Авто-тесты
        </NavLink>
        <NavLink
          to={ROUTE_URL.RESULTS}
          className={({ isActive }) => `${st.tab} ${isActive ? st.active : ""}`}
        >
          Результаты
        </NavLink>
        <NavLink
          to={ROUTE_URL.DOCUMENTATION}
          className={({ isActive }) => `${st.tab} ${isActive ? st.active : ""}`}
        >
          Помощь
        </NavLink>
      </div>

      <div className={st.control}>
        <NavLink to={ROUTE_URL.SETTINGS}>
          <IoMdSettings size={30} />
        </NavLink>
        <div className={st.user}>
          {user?.lastName} {user?.firstName}
        </div>
      </div>
    </div>
  );
};

export default Header;
