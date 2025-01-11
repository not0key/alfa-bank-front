import { ITestCases } from "@/types/test-cases";
import { RootState } from "..";

/*Получение тест-кейсов*/
export const selectTestCases = (state: RootState): ITestCases[] =>
  state.testCases.testCases;