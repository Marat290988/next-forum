
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { verify } from 'argon2';
import { signJwt } from '@/utils/token';

interface ILoginForm {
  email: string,
  password: string
}

export async function POST(req: Request) {
  const {email, password}: ILoginForm =  await req.json();
  const prisma = new PrismaClient();
  let user;
  try {
    user = await prisma.user.findUnique({
      where: {email: email}
    });
    if (!user) {
      return NextResponse.json({message: 'Unable to find such user.'}, {status: 403});
    };
    const isValid = await verify(user.password, password);
    if (!isValid) {
      return NextResponse.json({message: 'Invalid password.'}, {status: 403});
    }
    const resUser: any = {...user};
    delete resUser.password;
    const response = NextResponse.json({user: resUser, message: 'Successful logging.'}, {status: 200});

    const tokenMaxAge = (new Date().getTime()); // 1 week

    const token: string = signJwt(
      { sub: JSON.stringify(resUser) },
      { exp: `7d` }
    );

    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: false,
      path: "/",
      secure: false,
      maxAge: tokenMaxAge,
    };

    response.cookies.set({
      ...cookieOptions
    });
    return response;
  } catch(e: any) {
    return NextResponse.json({message: 'Problems with DB.'}, {status: 422});
  }
}
