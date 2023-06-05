"use client"

import React, { FC, useState } from 'react';
import styles from '@/screens/auth/Auth.module.scss';
import { InputField } from '@/components/input-field/InputField';
import { useForm } from 'react-hook-form';
import { maxLength, minLength } from '@/utils/validate-util';

export const Auth: FC = () => {

  const [isLogin, setIsLogin] = useState(true);
  const {
    register: formRegister, 
    formState: { errors },
    reset,
    setError,
    getFieldState,
    getValues
  } = useForm({
    mode: 'onChange',
    resetOptions: {
      keepDirtyValues: true, // user-interacted input will be retained
      keepErrors: true, // input errors will be retained with value update
    }
  });

  return (
    <main
      className='h-full flex justify-center items-center px-[10px]'
    >
      <div 
        className='max-w-[500px] w-full border-color-dark rounded-tl-lg rounded-tr-lg overflow-hidden'
      >
        <div
          className={`flex ${styles['header-form']}`}
        >
          <h3 
            className={`title-font3 grow p-[8px] ${isLogin ? styles.active : ''} ${styles['auth-title']}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </h3>
          <h3
            className={`title-font3 grow p-[8px] ${styles['auth-title']} ${!isLogin ? styles.active : ''}`}
            onClick={() => setIsLogin(false)}
          >
            REGISTER
          </h3>
        </div>

        <form className='w-full p-[10px] flex flex-col items-center'>
          <InputField 
            title='Please enter your name'
            type='text'
            error={errors?.name}
            {...formRegister('name', {
              onChange(e) {
                console.log(errors)
                console.log(getFieldState('name'))
                if (!minLength(6, e.target.value) && getFieldState('name').isTouched) {
                  setError('name', {message: 'Minimum length 6 characters'});
                  return;
                }
                if (!maxLength(20, e.target.value) && getFieldState('name').isTouched) {
                  setError('name', {message: 'Max length 20 characters'});
                  console.log(2)
                  return;
                }
              },
              onBlur(e) {
                if (!minLength(6, e.target.value)) {
                  setError('name', {message: 'Minimum length 6 characters'});
                  return;
                }
                if (!maxLength(20, e.target.value)) {
                  setError('name', {message: 'Max length 20 characters'});
                  return;
                }
              }
            })}
          />
        </form>
      </div>
    </main>
  )
}
