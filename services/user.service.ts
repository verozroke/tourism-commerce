import axios from "axios";
import { ChangeAvatarValidator, ChangeEmailValidator, ChangeNameValidator, ChangePasswordValidator } from "~/stores/SettingStore";
import { MessageResponse } from "~/types/response";

class UserService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async changeAvatar(userId: string, body: ChangeAvatarValidator) {
    const { data } = await axios.patch<MessageResponse>(`${this.baseUrl}/users/${userId}/avatar`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.message
  }

  async changeName(userId: string, body: ChangeNameValidator) {
    const { data } = await axios.patch<MessageResponse>(`${this.baseUrl}/users/${userId}/name`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.message
  }

  async changeEmail(userId: string, body: ChangeEmailValidator) {
    const { data } = await axios.patch<MessageResponse>(`${this.baseUrl}/users/${userId}/email`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.message
  }

  async changePassword(userId: string, body: ChangePasswordValidator) {
    const { data } = await axios.patch<MessageResponse>(`${this.baseUrl}/users/${userId}/password`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.message
  }
}



const userService = new UserService('http://localhost:4000');
export default userService