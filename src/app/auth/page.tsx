import { Auth } from "@/screens/auth/Auth";
import { NextPage } from "next";

export const metadata = {
  title: 'Auth Page',
  description: 'A place for an exchange of views.',
}

const AuthPage: NextPage = () => {
  return (
    <Auth />
  )
}

export default AuthPage;