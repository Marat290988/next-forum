"use client"

import React, { FC, useState } from 'react';
import styles from '@/screens/auth/Auth.module.scss';

export const Auth: FC = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <main
      className='h-full flex justify-center items-center'
    >
      <div 
        className='max-w-[500px] w-full border-color-dark rounded-tl-lg rounded-tr-lg overflow-hidden'
      >
        <div
          className='flex'
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
      </div>
    </main>
  )
}
