import axios from "axios";
import type { LikeTourValidator, RegisterTourValidator } from "~/stores/TourDetailStore";
import type { MessageResponse } from "~/types/response";
import type {
  DurationOption,
  AgeGroupOption,
  TagOption,
  SortByOption,
  SpecialOption,
  TourInfo
} from "~/types/tour";

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

  async registerToTour(body: RegisterTourValidator) {
    const { data } = await axios.post<MessageResponse>(`${this.baseUrl}/registered-tours/registered-tour`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.message
  }

  async likeTour(body: LikeTourValidator) {
    const { data } = await axios.post<MessageResponse>(`${this.baseUrl}/likes/like`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.message
  }

  async getFavourites(userId: string): Promise<TourInfo[]> {
    const { data } = await axios.get<TourInfo[]>(`${this.baseUrl}/tour-infos/${userId}/favourites`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getPendings(userId: string): Promise<TourInfo[]> {
    const { data } = await axios.get<TourInfo[]>(`${this.baseUrl}/registered-tours/${userId}/pending`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getCloseds(userId: string): Promise<TourInfo[]> {
    const { data } = await axios.get<TourInfo[]>(`${this.baseUrl}/registered-tours/${userId}/closed`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }


  async getTourLength(query: TourLengthQueryParams): Promise<number> {
    const resultQuery = this.getResultQuery(query)
    const { data }: { data: { length: number } } = await axios.get(resultQuery, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data.length
  }

  async getTourInfos(query: QueryParams): Promise<TourInfo[]> {
    const { limit, page } = query

    const resultQuery = this.getResultQuery(query) + `&page=${page}&limit=${limit}`
    const { data } = await axios.get<TourInfo[]>(resultQuery, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getFeaturedTours(): Promise<TourInfo[]> {
    const { data } = await axios.get<TourInfo[]>(`${this.baseUrl}/tour-infos/featured`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getTopDestinations(): Promise<TourInfo[]> {
    const { data } = await axios.get<TourInfo[]>(`${this.baseUrl}/tour-infos/top-destinations`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async getTourInfoById(id: string): Promise<TourInfo> {
    const { data } = await axios.get<TourInfo>(`${this.baseUrl}/tour-infos/tour-info/${id}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  async search(query: string): Promise<TourInfo[]> {
    const { data } = await axios.get<TourInfo[]>(`${this.baseUrl}/tour-infos/search/${query}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  }

  getResultQuery(query: QueryParams | TourLengthQueryParams): string {
    const { tags, ageGroups, specials, durations, priceRange, dateRange } = query
    const queryTags = tags?.map(tag => `tags[]=${tag}`).join('&')
    const queryAgeGroups = ageGroups?.map(ageGroup => `ageGroups[]=${ageGroup.replace('&', '%26')}`).join('&')
    const querySpecials = specials?.map(special => `specials[]=${special}`).join('&')
    const queryDurations = durations?.map(duration => `durations[]=${duration}`).join('&')
    const minValue = priceRange ? priceRange[0] : 0
    const maxValue = priceRange ? priceRange[1] : 7500
    const from = dateRange ? dateRange[0] : '1970-01-01';
    const to = dateRange ? dateRange[1] : '2023-10-23';
    return `${this.baseUrl}/tour-infos/length?${queryTags}&${queryAgeGroups}&${querySpecials}&${queryDurations}&priceRange[]=${minValue}&priceRange[]=${maxValue}&dateRange[]=${from}&dateRange[]=${to}`
  }
}

const tourService = new TourService('http://localhost:4000');
export default tourService