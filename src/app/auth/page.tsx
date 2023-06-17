import { Auth } from "@/screens/auth/Auth";
import { GetServerSideProps, NextPage } from "next";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { verifyJWT } from '@/utils/token';

export const metadata = {
  title: 'Auth Page',
  description: 'A place for an exchange of views.',
}

export default function AuthPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (token && token.value) {
    redirect('/');
  }
  return (
    <Auth />
  )
}
