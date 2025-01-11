import { IError } from '@/types/error';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

/**
 * Создает асинхронное действие для Redux Toolkit с обработкой ошибок.
 *
 * @template TResponse Тип данных, возвращаемых успешным запросом.
 * @template TRequest Тип данных, передаваемых в запрос. По умолчанию это `void`, если запрос не требует параметров.
 *
 * @param typePrefix Префикс типа действия, используемый для создания уникальных типов `pending`, `fulfilled` и `rejected`.
 * @param asyncFunction Асинхронная функция, которая выполняет запрос. Принимает три параметра:
 * - `request`: Параметры запроса, соответствующие типу `TRequest`.
 * - `axiosInstance`: Экземпляр `Axios`, используемый для выполнения HTTP-запроса.
 * - `dispatch`: Функция dispatch для выполнения других действий, если это необходимо.
 *
 * @param axiosInstance Экземпляр `Axios`, используемый для выполнения запросов.
 *
 * @returns Функция `createAsyncThunk`, которая создает асинхронное действие Redux Toolkit.
 * Эта функция автоматически обрабатывает состояния `pending`, `fulfilled` и `rejected`.
 */
export const createAsyncAction = <TResponse, TRequest = void>(
  typePrefix: string,
  asyncFunction: (
    request: TRequest,
    axiosInstance: AxiosInstance,
    dispatch: unknown // тип `any` можно уточнить, если известен тип dispatch
  ) => Promise<TResponse>,
  axiosInstance: AxiosInstance
) => {
  return createAsyncThunk<TResponse, TRequest>(
    typePrefix,
    async (request, { rejectWithValue, dispatch }) => {
      try {
        return await asyncFunction(request, axiosInstance, dispatch);
      } catch (error) {
        const typedError: IError = error as IError;
        return rejectWithValue(
          typedError.response?.data.message || typedError.message
        );
      }
    }
  );
};
