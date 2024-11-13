import { FC } from "react";

import st from './Title.module.css'

interface IProps {
  children: string
}

const Title: FC<IProps> = ({ children }) => {
  return (
    <span className={st.title}>
      {children}
    </span>
  );
}
 
export default Title;