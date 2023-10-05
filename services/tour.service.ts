import axios from "axios";
import { TourInfo } from '~/types/tour';
// const config = useRuntimeConfig()
class TourService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getTourInfos() {
    const { data } = await axios.get(`${this.baseUrl}/tour-infos`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

}

const tourService = new TourService('http://localhost:4000');

export default tourService