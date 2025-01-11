import { useState } from "react";
import { UploadInput } from "@/components";
import st from "./ViewTestCase.module.less";

const ViewTestCase = () => {
  const [result, setResult] = useState<{ test_cases: string } | null>(null);

  const handleFileProcessed = (processedData: { test_cases: string }) => {
    setResult(processedData);
  };

  return (
    <div className={st.container}>
      <UploadInput onFileProcessed={handleFileProcessed} />
      {result && (
        <div className={st.resultContainer}>
          <pre>{result.test_cases}</pre>
        </div>
      )}
    </div>
  );
};

export default ViewTestCase;
