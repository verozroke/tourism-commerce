import axios from "axios"

class EmailService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async sendEmail({ email }: { email: string }) {
    const { data } = await axios.post(`${this.baseUrl}/emails/email`, { email }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }
}

const emailService = new EmailService('https://tourism-commerce-backend.vercel.app');
export default emailService