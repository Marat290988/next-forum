"use client"

import React, { FC, useState, useEffect } from 'react';
import styles from '@/screens/auth/Auth.module.scss';
import { InputField } from '@/components/input-field/InputField';
import { useMyCustomForm } from '@/hooks/useMyCustomForm';

export const Auth: FC = () => {

  const [isLogin, setIsLogin] = useState(true);
  const {makeTouch, formObj, setField} = useMyCustomForm([
    {
      name: 'name',
      type: 'text',
      validations: [
        {type: 'min', value: 6},
        {type: 'max', value: 20},
        {type: 'notOnlyNumber', value: ''}
      ]
    }
  ])

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
            errorMessage={formObj['name'].errorMessage}
            name='name'
            onChangeHandler={setField}
            onBlurHandler={makeTouch}
          />
        </form>
      </div>
    </main>
  )
}
