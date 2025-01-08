export interface ILoginData {
  login: string
  password: string
}

export interface IAuthResponse {
  token: string
}

export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
}