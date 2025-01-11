import { useState } from "react";
import { Spinner } from "@/components";
import st from "./UploadInput.module.less";
import uploadIcon from "@/assets/upload-icon.svg";
import { useAppDispatch } from "@/shared/hooks/redux";
import { uploadFSD } from "@/store/test-cases/testCases.action";

interface UploadInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileProcessed: (data: any) => void;
}

const UploadInput = ({ onFileProcessed }: UploadInputProps) => {
  const [isTesting, setIsTesting] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const dispatch = useAppDispatch();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      setIsTesting(true);
      setProcessingStep(0);

      try {
        const result = await dispatch(uploadFSD(formData)).unwrap();
        onFileProcessed(result);
      } catch (error) {
        console.error("Ошибка загрузки файла:", error);
        onFileProcessed("Ошибка загрузки файла. Попробуйте ещё раз.");
      } finally {
        setIsTesting(false);
      }
    }
  };

  const processingMessages = [
    "Обрабатываем файл...",
    "Переводим в человекочитаемую спецификацию...",
    "Составляем тест-кейсы...",
    "Почти готово...",
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
          <p className={st.uploadText}>
            Выберите файлы, или перетащите их сюда, чтобы начать тестирование
          </p>
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
