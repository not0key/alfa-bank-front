import { IUser } from "@/types/auth";
import { RootState } from "..";

/*Получение текущего пользователя*/
export const selectCurrentUser = (state: RootState): IUser | null =>
  state.auth.user;