import { PrismaClient } from '@prisma/client';
import { hash } from 'argon2';
import { NextResponse } from 'next/server';

interface IRegisterForm {
  name: string,
  email: string,
  password: string
}

export async function POST(
  req: Request,
) {
  const {email, name, password}: IRegisterForm =  await req.json();
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: await hash(password)
    }
  });
  return NextResponse.json(user, {status: 200});
}
