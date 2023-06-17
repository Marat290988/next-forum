"use client";

import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link href='/auth'>AUTH</Link>
    </div>
  )
}

export default Home