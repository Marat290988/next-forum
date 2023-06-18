import { NextRequest, NextResponse } from "next/server";
import { fff, verifyJWT } from '@/utils/token';

export async function middleware (req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token) {
    try {
      await verifyJWT(token);
    } catch(e) {
      const response = NextResponse.next();
      response.cookies.set('token', '');
      return response;
    }
  }
}