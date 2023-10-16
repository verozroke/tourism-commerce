import axios from "axios";
import type { LoginUserValidator } from "@/components/auth/LoginForm.vue";
import type { RegisterUserValidator } from "@/components/auth/RegisterForm.vue";
import type { User } from "~/types/user";

class AuthService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async login(body: LoginUserValidator) {
    const { data } = await axios.post(`${this.baseUrl}/auth/signin`, body, {
      withCredentials: true,
      httpsAgent: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async register(body: RegisterUserValidator) {
    const { data } = await axios.post(`${this.baseUrl}/auth/signup`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async fetchUser() {
    const { data } = await axios.get(`${this.baseUrl}/users/hash`, {
      withCredentials: true,
    })

    return data.user as User
  }

  async signOut() {
    const { data } = await axios.get(`${this.baseUrl}/auth/signout`, {
      withCredentials: true,
    })

    return data
  }
}



const authService = new AuthService('https://tourism-commerce-backend.vercel.app');
export default authService