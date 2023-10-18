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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })

    return data
  }
}

const emailService = new EmailService('http://localhost:4000');
export default emailService