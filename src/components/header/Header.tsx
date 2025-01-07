import st from './Header.module.less'

const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.logo}>
        Logo
      </div>
      <div className={st.nav}>
        <div>
          Auto-tests
        </div>
        <div>
          Results
        </div>
        <div>
          Reference
        </div>
      </div>
      <div className={st.control}>
        <div>
          Settings
        </div>
        <div>
          User
        </div>
      </div>
    </div>
  )
}

export default Header