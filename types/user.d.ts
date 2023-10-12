import type {
  RegisteredTour,
  Review
} from './tour'
import type { Like } from './client'

export type User = {
  id: string
  email: string
  name: string
  avatarUrl: string
  reviews?: Review[]
  registeredTours?: RegisteredTour[]
  likes?: Like[]
  createdAt: Date
  updatedAt: Date
}






