import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { fetchTestCases } from "@/store/test-cases/testCases.action";
import { selectTestCases } from "@/store/test-cases/testCases.selectors";
import { useEffect } from "react";
import st from './TestCasesTable.module.less';

const TestCasesTable = () => {
  const dispatch = useAppDispatch()
  const testData = useAppSelector(selectTestCases)

  useEffect(() => {
    dispatch(fetchTestCases())
  }, [dispatch])

  return (
    <div className={st.tableContainer}>
      <table className={st.table}>
        <thead>
          <tr className={st.tr}>
            <th className={st.th}>ID</th>
            <th className={st.th}>Статус тестрования</th>
            <th className={st.th}>Имя файла</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((testCase) => (
            <tr key={testCase.id} className={st.tr}>
              <td className={st.td}>{testCase.id}</td>
              <td className={st.td}>{testCase.status}</td>
              <td className={st.td}>{testCase.file_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCasesTable;
