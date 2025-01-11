import { useState } from "react";

import { Spinner } from "@/components";
import uploadIcon from '@/assets/upload-icon.svg';

import st from './UploadInput.module.css';

const UploadInput = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setIsTesting(true);
      setProcessingStep(0);
      let step = 0;

      const interval = setInterval(() => {
        step += 1;
        setProcessingStep(step);
        if (step === 4) {
          clearInterval(interval);
          setIsTesting(false);
        }
      }, 3000);
    }
  };

  const processingMessages = [
    "Обрабатываем файл...",
    "Переводим в человекочитаемую спецификацию...",
    "Составляем тест-кейсы...",
    "Почти готово..."
  ];

  return (
    <div className={st.uploadContainer}>
      {!isTesting ? (
        <>
          <img
            src={uploadIcon}
            alt="Upload icon"
            className={st.uploadImage}
          />
          <p className={st.uploadText}>Выберите файлы, или перетащите их сюда, чтобы начать тестирование</p>
          <input
            type="file"
            onChange={handleChange}
            className={st.hiddenInput}
            id="file-upload"
          />
          <label htmlFor="file-upload" className={st.uploadLabel}>
            Загрузить файл
          </label>
        </>
      ) : (
        <>
          <Spinner />
          <p className={st.testingText}>{processingMessages[processingStep]}</p>
        </>
      )}
    </div>
  );
};

export default UploadInput;
