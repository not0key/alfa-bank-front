import st from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={st.spinner}>
      <span className={st.loader}></span>
    </div>
  );
};
export default Spinner;