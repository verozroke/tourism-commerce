export type CarouselItem = {
  id: string
  imageUrl: string
}

export type TourGuide = {
  id: string
  fullname: string
  about: string
  journey: string
  facebookLink: string
  instagramLink: string
  twitterLink: string
  imageUrl: string
  createdAt: Date
  updatedAt: Date
}

export type DestinationCard = {
  id: string
  spanning: string
  title: string
  category: string
  rate: number
  imageLink: string
}


export type Like = {
  id: string
  userId: string
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type InclusionType = 'Plus' | 'Minus'

