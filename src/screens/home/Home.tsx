"use client";

import Link from 'next/link';
import React from 'react'
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const Home = () => {
  const { logout } = useActions();
  return (
    <div>
      <h1>HOME</h1>
      <Link href='/auth'>AUTH</Link>
      <div onClick={() => {logout()}}>LOGOUT</div>
    </div>
  )
}

export default Home