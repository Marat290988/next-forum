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
  let user;
  try {
    const oldEmail = await prisma.user.findUnique({
      where: {email: email}
    });
    if (oldEmail) {
      return NextResponse.json({message: 'Email is already busy.'}, {status: 422});
    }
    const oldName = await prisma.user.findUnique({
      where: {name: name}
    });
    if (oldName) {
      return NextResponse.json({message: 'User already exists.'}, {status: 422});
    }
    user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: await hash(password)
      }
    });
  } catch (e) {
    return NextResponse.json({message: 'Problems with DB.'}, {status: 500});
  }


  return NextResponse.json(user, {status: 200});
}
