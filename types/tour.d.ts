import type {
  AgeGroup,
  Duration,
  Special,
  Tag,
} from './filters'
import type { InclusionType, Like } from './client'
import { User } from './user'


export type DurationOption = 'Upto 1 Hour' | '1 to 4 Hours' | '4 Hours to 1 Day' | '1 to 3 Days' | '3 Days or More'
export type AgeGroupOption = '1 & Up' | '3 & Up' | '7 & Up' | '13 & Up' | '18 & Up'
export type TagOption = 'Child Friendly' | 'Taking extra precautions' | 'Away from the chaos' | 'Epic Challenges' | 'Virtual Experiences'
export type SpecialOption = 'Discounted deals' | 'Free Cancellations' | 'Private Groups' | 'New on Entrada' | 'Entrada Specials'
export type SortByOption = 'Rating' | 'Relevance' | 'Price' | 'Title'
export type RegTourStatusType = 'pending' | 'closed'
export type SliderValue = [minValue: number, maxValue: number]

export type TourInfo = {
  id: string,
  title: string,
  location: string
  price: number
  rate: number
  date: Date
  rateAmount: number
  isFeatured?: boolean
  description: string
  activity: string
  physical: string
  groupSize: number
  season: string
  inclusionText: string
  images: Image[]
  duration: Duration
  ageGroup: AgeGroup
  specials: Special[]
  tags: Tag[]
  likes?: Like[]
  registeredTours?: RegisteredTour[]
  itineraries: Itinerary[]
  inclusions: Inclusion[]
  reviews?: (Review & { user: User })[]
  faqs: Faq[]
  createdAt: Date
  updatedAt: Date
}

export type RegisteredTour = {
  id: string
  date: Date
  travelers: string
  transports: string
  status: RegTourStatusType
  userId: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Image = {
  id: string
  imageUrl: string
  alt: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

// Tour Details
export type Itinerary = {
  id: string
  dayNumber: string
  text: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Faq = {
  id: string
  question: string
  answer: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Review = {
  id: string
  title: string
  text: string
  userId: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Inclusion = {
  id: string
  type: InclusionType
  text: string
  userId: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

