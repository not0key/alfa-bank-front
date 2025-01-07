import { UploadInput } from '@/components';
import st from './ViewTestCase.module.less'

const ViewTestCase = () => {
  return (
    <div className={st.container}>
      <UploadInput />
    </div>
  );
}
 
export default ViewTestCase;