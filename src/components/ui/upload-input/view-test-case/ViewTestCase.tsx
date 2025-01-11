import { useState } from "react";
import { UploadInput } from "@/components";
import st from "./ViewTestCase.module.less";

const ViewTestCase = () => {
  const [result, setResult] = useState<{ test_cases: string } | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileProcessed = (processedData: { test_cases: string }) => {
    setResult(processedData);
    setIsUploaded(true); 
  };

  const handleReset = () => {
    setResult(null);
    setIsUploaded(false);
  };

  return (
    <div className={st.container}>
      {!isUploaded && 
        <div className={st.upload}>
          <UploadInput onFileProcessed={handleFileProcessed} />
        </div>
      }
      {result && (
        <div className={st.resultContainer}>
          <div 
            className={st.resultText} 
            dangerouslySetInnerHTML={{ __html: result.test_cases }} 
          />
          <button className={st.resetButton} onClick={handleReset}>
            Сгенерировать снова
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewTestCase;
