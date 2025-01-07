import { Description, Title, ViewTestCase } from "@/components";

import st from './HomePage.module.less'
import Header from "@/components/header/Header";

const HomePage = () => {
  return (
    <div className={st.container}>
      <Header />
      <Title>Pairwise тестирования</Title>
      <ViewTestCase />
      <Description>Для использования сервиса загрузите документ в формате .docx или .pdf через форму выше. 
        После загрузки система автоматически проведет анализ содержимого и сформирует набор тест-кейсов на основе выявленных данных. 
        Рекомендуем перед отправкой убедиться в корректности формата и структуры документа для оптимальных результатов.
      </Description>
      <span className={st.company}>© Альфа-Банк</span>
    </div>
  );
} 
 
export default HomePage;