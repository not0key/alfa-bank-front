import { APP_ERRORS } from '@/shared/constants/errors';
import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(APP_ERRORS.InvalidEmail)
    .required(APP_ERRORS.RequiredField),
  password: yup
    .string()
    .min(6, APP_ERRORS.minLength)
    .required(APP_ERRORS.RequiredField),
});