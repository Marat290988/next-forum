import {sign, decode} from 'jsonwebtoken';
import {JwtPayload, verify as jVerify} from 'jsonwebtoken';
import Cookies from 'js-cookie';
import IUser from './../interface/user.interface';

export const signJwt = (
  payload: { sub: string },
  options: { exp: string }
) => {
  return sign({data: payload.sub}, 
    process.env.SECRET as string,
    { expiresIn: '7d', algorithm: 'HS256' }
  );
}

export const verifyJWT = (
  token: string
) => {
  const jwtPayload = jVerify(token, process.env.SECRET as string) as JwtPayload;
  if (Date.now() >= (jwtPayload.exp as number) * 1000) {
    return false;
  } else {
    return true;
  }
}

export const decodeToken = () => {
  const token = Cookies.get('token') as string;
  if (token) {
    const decodeToken: any = decode(token);
    return JSON.parse(decodeToken.data);
  } else {
    return undefined;
  }
}