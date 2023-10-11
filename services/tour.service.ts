import axios from "axios";
import { DurationOption, AgeGroupOption, TagOption, SortByOption, SpecialOption, TourInfo } from "~/types/tour";

export type QueryParams = {
  durations?: DurationOption[]
  ageGroups?: AgeGroupOption[]
  tags?: TagOption[]
  sortBy: SortByOption
  desc?: boolean
  dateRange?: [from: string, to: string]
  priceRange?: [minPrice: number, maxPrice: number]
  specials?: SpecialOption[]
  limit: number,
  page: number,
}
export type TourLengthQueryParams = {
  priceRange?: [minPrice: number, maxPrice: number]
  durations?: DurationOption[]
  ageGroups?: AgeGroupOption[]
  dateRange?: [from: string, to: string]
  specials?: SpecialOption[]
  tags?: TagOption[]
}

class TourService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getTourLength(query: TourLengthQueryParams): Promise<number> {
    const { tags, ageGroups, specials, durations, priceRange, dateRange } = query
    const queryTags = tags?.map(tag => `tags[]=${tag}`).join('&')
    const queryAgeGroups = ageGroups?.map(ageGroup => `ageGroups[]=${ageGroup.replace('&', '%26')}`).join('&')
    const querySpecials = specials?.map(special => `specials[]=${special}`).join('&')
    const queryDurations = durations?.map(duration => `durations[]=${duration}`).join('&')
    const minValue = priceRange ? priceRange[0] : 0
    const maxValue = priceRange ? priceRange[1] : 7500
    const from = dateRange ? dateRange[0] : '1970-01-01';
    const to = dateRange ? dateRange[1] : '2023-10-23';

    const resultQuery = `${this.baseUrl}/tour-infos/length?${queryTags}&${queryAgeGroups}&${querySpecials}&${queryDurations}&priceRange[]=${minValue}&priceRange[]=${maxValue}&dateRange[]=${from}&dateRange[]=${to}`
    const { data }: { data: { length: number } } = await axios.get(resultQuery, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.length
  }

  async getTourInfos(query: QueryParams): Promise<TourInfo[]> {
    const { tags, ageGroups, specials, durations, sortBy, desc, priceRange, dateRange, limit, page } = query
    const queryTags = tags?.map(tag => `tags[]=${tag}`).join('&')
    const queryAgeGroups = ageGroups?.map(ageGroup => `ageGroups[]=${ageGroup}`).join('&')
    const querySpecials = specials?.map(special => `specials[]=${special}`).join('&')
    const queryDurations = durations?.map(duration => `durations[]=${duration}`).join('&')
    const minValue = priceRange ? priceRange[0] : 0
    const maxValue = priceRange ? priceRange[1] : 7500
    const from = dateRange ? dateRange[0] : '1970-01-01';
    const to = dateRange ? dateRange[1] : '2023-10-23';

    const resultQuery = `${this.baseUrl}/tour-infos?sortBy=${sortBy}&${queryTags}&${queryAgeGroups}&${querySpecials}&${queryDurations}&desc=${!!desc}&priceRange[]=${minValue}&priceRange[]=${maxValue}&dateRange[]=${from}&dateRange[]=${to}&page=${page}&limit=${limit}`
    const { data }: { data: TourInfo[] } = await axios.get(resultQuery, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getFeaturedTours() {
    const { data } = await axios.get(`${this.baseUrl}/tour-infos/featured`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getTopDestinations() {
    const { data } = await axios.get(`${this.baseUrl}/tour-infos/top-destinations`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getTourInfoById(id: string) {
    const { data } = await axios.get(`${this.baseUrl}/tour-infos/tour-info/${id}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async search(query: string) {
    const { data } = await axios.get(`${this.baseUrl}/tour-infos/search/${query}`, {
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