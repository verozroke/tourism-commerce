import axios from "axios";
import type { TourGuide } from "~/types/client";
class TourGuideService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getTourGuides() {
    const { data } = await axios.get<TourGuide[]>(`${this.baseUrl}/tour-guides`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }
}

const tourGuideService = new TourGuideService('http://localhost:4000');
export default tourGuideService