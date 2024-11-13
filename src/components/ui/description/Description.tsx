import { FC } from "react";

import st from './Description.module.css'

interface IProps {
  children: string
}

const Description: FC<IProps> = ({ children }) => {
  return (
    <div className={st.description}>
      {children}
    </div>
  );
}
 
export default Description;