import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { LoginSchema } from '@/shared/lib/yup';
import { ILoginData } from '@/types/auth';

import st from './AuthForm.module.less'
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL } from '@/shared/constants/routes';
import { useAppDispatch } from '@/shared/hooks/redux';
import { loginUser } from '@/store/auth/auth.action';

const AuthForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async(data: ILoginData) => {
    await dispatch(loginUser(data)).unwrap()
    navigate(ROUTE_URL.HOME)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={st.form}>
      <input 
        type="text"
        id='login'
        placeholder='Логин'
        {...register('login')} 
      />
      {errors.login && (
        <p>{errors.login.message}</p>
      )}
      <input 
        type="password"
        id='password'
        placeholder='Пароль'
        {...register('password')} 
      />
      {errors.password && (
        <p>{errors.password.message}</p>
      )}
      <button type='submit'>
        Войти
      </button>
    </form>
  )
}

export default AuthForm