import { axiosReq } from "@/api/api";

export class AuthService {
  static async register(data: any) {
    const response = await axiosReq({
      url: '/auth',
      method: 'POST',
      data: data
    });
    return response.data;
  }
}