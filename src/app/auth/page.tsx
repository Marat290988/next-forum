import { Auth } from "@/screens/auth/Auth";
import { NextPage } from "next";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { verifyJWT } from '@/utils/token';

export const metadata = {
  title: 'Auth Page',
  description: 'A place for an exchange of views.',
}

const AuthPage: NextPage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (token && verifyJWT(token!.value)) {
    redirect('/');
  }
  return (
    <Auth />
  )
}

export default AuthPage;