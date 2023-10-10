export type TourInfo = {
  id: string,
  title: string,
  location: string
  price: number
  rate: number
  rateAmount: number
  duration: Duration
  imageUrl: string
  date: Date
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
  ageGroup: AgeGroup
  specials: Special[]
  tags: Tag[]

}

export type rangeValue = number


export type CarouselItem = {
  id: string
  src: string
}

export type Duration = {
  id: string
  name: DurationOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type AgeGroup = {
  id: string
  name: AgeGroupOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Special = {
  id: string
  name: SpecialOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Tag = {
  id: string
  name: TagOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type DurationOption = 'Upto 1 Hour' | '1 to 4 Hours' | '4 Hours to 1 Day' | '1 to 3 Days' | '3 Days or More'
export type AgeGroupOption = '1 & Up' | '3 & Up' | '7 & Up' | '13 & Up' | '18 & Up'
export type TagOption = 'Child Friendly' | 'Taking extra precautions' | 'Away from the chaos' | 'Epic Challenges' | 'Virtual Experiences'
export type SpecialOption = 'Discounted deals' | 'Free Cancellations' | 'Private Groups' | 'New on Entrada' | 'Entrada Specials'
export type SortByOption = 'Rating' | 'Relevance' | 'Price' | 'Title'




// rating
// relevance
// title
// price